import { NextResponse } from "next/server";

// Returns list of images from a Google Drive folder as
// [{ title: string, imageUrl: string }]
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const folderIdParam = searchParams.get("folderId");
    const parentFolderId = searchParams.get("parentFolderId");
    const dayParam = searchParams.get("day");
    const debugList = searchParams.get("list"); // when "folders", list subfolders under parent

    const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Server misconfiguration: GOOGLE_DRIVE_API_KEY not set" }, { status: 500 });
    }

    // Resolve target folder: either direct folderId, or Day subfolder under parentFolderId
    let targetFolderId: string | null = null;

    if (parentFolderId && (dayParam || debugList === "folders")) {
      // List all subfolders under the parent and match by normalized name (case-insensitive, ignore spaces)
      const subQuery = encodeURIComponent(
        `'${parentFolderId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`
      );
      const fieldsFolder = encodeURIComponent("files(id,name)");
      const findFolderUrl = `https://www.googleapis.com/drive/v3/files?q=${subQuery}&fields=${fieldsFolder}&pageSize=1000&key=${apiKey}`;
      const subRes = await fetch(findFolderUrl, { cache: "no-store" });
      if (!subRes.ok) {
        const text = await subRes.text();
        return NextResponse.json({ error: `Drive API error (list subfolders): ${subRes.status} ${text}` }, { status: 502 });
      }
      const subData = (await subRes.json()) as { files?: Array<{ id: string; name: string }> };
      const folders = subData.files ?? [];

      // Debug mode: return folders list directly and log to server console
      if (debugList === "folders") {
        console.log("[drive-images] Subfolders under parent", parentFolderId, folders);
        return NextResponse.json({ parentFolderId, folders }, { status: 200 });
      }

      const targetNames = [
        `day ${dayParam}`,
        `day${dayParam}`,
      ];
      const normalize = (s: string) => s.toLowerCase().replaceAll(" ", "");
      const found = folders.find((f) => targetNames.includes(normalize(f.name)));
      if (!found) {
        return NextResponse.json({
          error: `Subfolder for day ${dayParam} not found under parent` ,
          available: folders.map((f) => f.name),
          hint: "If available is empty, ensure the parent and its subfolders are publicly shared (Anyone with link can view). API keys cannot access private Drive folders.",
        }, { status: 404 });
      }
      targetFolderId = found.id;
    } else if (folderIdParam) {
      targetFolderId = folderIdParam;
    } else {
      return NextResponse.json({ error: "Missing folderId or parentFolderId+day" }, { status: 400 });
    }

    // Build Drive API query for images within the resolved folder
    const query = encodeURIComponent(
      `'${targetFolderId}' in parents and mimeType contains 'image/' and trashed = false`
    );
    const fields = encodeURIComponent("files(id,name,mimeType,modifiedTime)");

    const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=${fields}&orderBy=createdTime desc&pageSize=100&key=${apiKey}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: `Drive API error: ${res.status} ${text}` }, { status: 502 });
    }

    const data = (await res.json()) as { files?: Array<{ id: string; name: string }> };
    const files = data.files ?? [];

    const items = files.map((f) => ({
      title: f.name,
      imageUrl: `https://drive.google.com/uc?export=view&id=${f.id}`,
    }));

    // Also fetch caption from Google Docs file named "caption" in the same folder
    let caption = null;
    try {
      const captionQuery = encodeURIComponent(
        `'${targetFolderId}' in parents and name = 'caption' and mimeType = 'application/vnd.google-apps.document' and trashed = false`
      );
      const captionUrl = `https://www.googleapis.com/drive/v3/files?q=${captionQuery}&fields=${fields}&key=${apiKey}`;
      
      const captionRes = await fetch(captionUrl, { cache: "no-store" });
      if (captionRes.ok) {
        const captionData = (await captionRes.json()) as { files?: Array<{ id: string; name: string }> };
        const captionFiles = captionData.files ?? [];
        
        if (captionFiles.length > 0) {
          const captionFileId = captionFiles[0].id;
          // Export Google Doc as plain text
          const exportUrl = `https://www.googleapis.com/drive/v3/files/${captionFileId}/export?mimeType=text/plain&key=${apiKey}`;
          const exportRes = await fetch(exportUrl, { cache: "no-store" });
          if (exportRes.ok) {
            caption = await exportRes.text();
          }
        }
      }
    } catch (captionError) {
      console.log("[drive-images] Failed to fetch caption:", captionError);
      // Don't fail the whole request if caption fails
    }

    return NextResponse.json({ items, caption }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
