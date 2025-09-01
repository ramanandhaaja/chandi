"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  content?: ContentItem[];
  // Optional: Google Drive folder ID to load images dynamically
  folderId?: string;
  // Optional: Parent folder that contains subfolders named "Day 1", "Day 2", "Day 3"
  parentFolderId?: string;
}

interface ContentItem {
  title: string;
  imageUrl: string;
}

interface DriveFolder {
  id: string;
  name: string;
}

const GalleryPhotoDrive: React.FC<Props> = ({ content = [], folderId, parentFolderId }) => {
  const [activeFolderIndex, setActiveFolderIndex] = useState(0);
  const [activeTitle, setActiveTitle] = useState(0);
  const [isGridView, setIsGridView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [driveItems, setDriveItems] = useState<ContentItem[] | null>(null);
  const [availableFolders, setAvailableFolders] = useState<DriveFolder[]>([]);
  const [loading, setLoading] = useState(false);
  const [foldersLoading, setFoldersLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Simplified loading states
  const [imageLoadingStates, setImageLoadingStates] = useState<Record<number, boolean>>({});

  // Decide the data source: Drive (if folderId provided) or the provided content prop
  const items: ContentItem[] = driveItems ?? content;

  useEffect(() => {
    const fetchDrive = async () => {
      // If neither Drive option provided, do nothing
      if (!folderId && !parentFolderId) return;
      
      // If parentFolderId is used but folders haven't loaded yet, wait
      if (parentFolderId && availableFolders.length === 0 && !foldersLoading) return;
      
      setLoading(true);
      setError(null);
      try {
        let url = "";
        if (parentFolderId && availableFolders.length > 0) {
          // Use the actual folder name from the available folders
          const selectedFolder = availableFolders[activeFolderIndex];
          if (!selectedFolder) {
            throw new Error("No folder selected");
          }
          // Extract day number from folder name for compatibility with existing API
          const dayMatch = selectedFolder.name.match(/day\s*(\d+)/i);
          const dayNumber = dayMatch ? dayMatch[1] : activeFolderIndex + 1;
          url = `/api/drive-images?parentFolderId=${encodeURIComponent(parentFolderId)}&day=${dayNumber}`;
        } else if (folderId) {
          url = `/api/drive-images?folderId=${encodeURIComponent(folderId)}`;
        }
        const res = await fetch(url);
        if (!res?.ok) throw new Error(`Failed to load Google Drive images (${res?.status})`);
        const data = (await res.json()) as { title: string; imageUrl: string }[];
        setDriveItems(data);
        setActiveTitle(0);
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : "Unable to load images from Google Drive";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };
    fetchDrive();
  }, [folderId, parentFolderId, activeFolderIndex, availableFolders, foldersLoading]);

  // Fetch available folders when parentFolderId is provided
  useEffect(() => {
    const fetchFolders = async () => {
      if (!parentFolderId) return;
      setFoldersLoading(true);
      try {
        const url = `/api/drive-images?parentFolderId=${encodeURIComponent(parentFolderId)}&list=folders`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load folders (${res.status})`);
        const data = await res.json() as { folders: DriveFolder[] };
        const sortedFolders = (data.folders || []).sort((a, b) => a.name.localeCompare(b.name));
        setAvailableFolders(sortedFolders);
        setActiveFolderIndex(0); // Reset to first folder
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : "Unable to load folders from Google Drive";
        setError(msg);
        setAvailableFolders([]);
      } finally {
        setFoldersLoading(false);
      }
    };
    fetchFolders();
  }, [parentFolderId]);

  // Reset image loading states when folder changes
  useEffect(() => {
    setImageLoadingStates({});
  }, [activeFolderIndex, folderId, parentFolderId]);

  // Helper function to handle image load completion
  const handleImageLoad = (index: number) => {
    setImageLoadingStates(prev => ({ ...prev, [index]: false }));
  };

  // Helper function to handle image load start
  const handleImageLoadStart = (index: number) => {
    setImageLoadingStates(prev => ({ ...prev, [index]: true }));
  };

  const mobileStyles = {
    navButton: "p-3 min-w-[44px] min-h-[44px] flex items-center justify-center",
    activeNavItem: "bg-[#8A6A2F] text-white",
    navItem: "text-white hover:bg-[#8A6A2F]/70",
  };

  const NavButton = ({
    direction,
    onClick,
    disabled,
  }: {
    direction: "left" | "right";
    onClick: () => void;
    disabled?: boolean;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${mobileStyles.navButton} ${disabled ? "opacity-50" : ""}`}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      <Image
        src={`/${direction}-arrow.svg`}
        alt={`${direction} arrow`}
        width={24}
        height={24}
      />
    </button>
  );

  const ViewOptionBtn = ({
    showControlsBtn = true,
    isGridView,
  }: {
    showControlsBtn?: boolean;
    isGridView: boolean;
  }) => {
    return (
      showControlsBtn && (
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsGridView(!isGridView)}
            className=" text-white hover:bg-[#8A6A2F] cursor-pointer p-2"
          >
            {isGridView ? (
              <Image
                src="/grid-view.svg"
                alt="grid-view"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="/single-view.svg"
                alt="single-view"
                width={24}
                height={24}
              />
            )}
          </button>
        </div>
      )
    );
  };

  return (
    <main className="w-full bg-[#4A2F1E]" style={{ minHeight: "650px" }}>
      <div className=" mx-auto w-full max-w-[1500px] flex flex-col md:flex-row gap-8 md:gap-18 lg:gap-20 pt-8 px-4 md:px-8 lg:px-12 xl:px-16 py-12 lg:py-16">
        {/* Left Column - Header and Image Navigation */}
        <div className="md:w-1/4 w-full space-y-8">
          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black/70 z-30"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}

          <div className="space-y-4 p-4 md:p-0 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Gallery
            </h2>

            {/* Folder selection tabs */}
            {parentFolderId && (
              <div className="flex justify-center md:justify-start gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
                {foldersLoading ? (
                  <div className="text-white/70 text-sm">Loading folders...</div>
                ) : availableFolders.length > 0 ? (
                  availableFolders.map((folder, index) => (
                    <button
                      key={folder.id}
                      onClick={() => setActiveFolderIndex(index)}
                      className={`whitespace-nowrap text-lg py-2 px-3 text-white transition-all ${
                        activeFolderIndex === index ? "font-bold underline" : "opacity-70"
                      }`}
                    >
                      {folder.name}
                    </button>
                  ))
                ) : (
                  <div className="text-white/70 text-sm">No folders found</div>
                )}
              </div>
            )}
            <div className="border-b border-white/30"></div>
          </div>

          {/* Dropdown Menu - Mobile Only */}
          <div className="md:hidden px-4 mb-4 ">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex justify-between items-center bg-[#4A2F1E] text-white py-3 px-4 rounded-lg border border-white/30"
            >
              <span>{items[activeTitle]?.title || "Select Image"}</span>
              <span className="transform transition-transform duration-200">
                {isDropdownOpen ? "▲" : "▼"}
              </span>
            </button>

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="absolute z-10 w-[calc(100%-2rem)] mt-1 bg-[#4A2F1E] border border-[#8A6A2F] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTitle(index);
                      setIsDropdownOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-full text-left py-3 px-4 text-white transition-all ${
                      activeTitle === index
                        ? "bg-black/30 font-semibold"
                        : "hover:bg-black/30"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Desktop Navigation List - Hidden on mobile */}
          <div className="hidden md:block space-y-2">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTitle(index)}
                className={`w-full text-left py-3 px-4 text-white transition-all ${
                  activeTitle === index
                    ? "bg-black/30 font-semibold rounded-lg"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Content Area */}
        <div className="md:w-3/4 w-full ">
          {/* Loading / Error States (when using Google Drive) */}
          {folderId && (
            <div className="mb-4">
              {loading && <p className="text-white/80 text-sm">Loading images from Google Drive…</p>}
              {error && (
                <p className="text-red-300 text-sm">{error}</p>
              )}
            </div>
          )}

          {items.length === 0 ? (
            // No images state
            <div className="flex flex-col items-center justify-center h-[50vh] text-center">
              <p className="text-white/80 text-lg mb-2">No images available</p>
              <p className="text-white/60 text-sm">Please check back later</p>
            </div>
          ) : isGridView ? (
            // Grid View
            <div className="relative">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group aspect-video bg-black rounded-lg overflow-hidden relative hover:shadow-lg transition-all duration-300"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="transition-transform duration-300 group-hover:scale-105"
                      onLoadStart={() => handleImageLoadStart(index)}
                      onLoad={() => handleImageLoad(index)}
                      onError={() => handleImageLoad(index)}
                    />

                    {/* Loading overlay for individual images */}
                    {imageLoadingStates[index] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                        <div className="h-8 w-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col justify-between p-4">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-right"></div>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-medium text-sm md:text-base truncate">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-xs">
                          {index + 1} / {items.length}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end pt-2">
                <ViewOptionBtn isGridView={isGridView} />
              </div>
            </div>
          ) : (
            // Single View
            <div className="relative w-full">
              {/* Mobile - Horizontal Scroll */}
              <div className="md:hidden relative flex overflow-x-auto snap-x snap-mandatory h-[70vh] no-scrollbar">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 snap-start relative aspect-video"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      sizes="100vw"
                      priority={index === 0}
                      onLoadStart={() => handleImageLoadStart(index)}
                      onLoad={() => handleImageLoad(index)}
                      onError={() => handleImageLoad(index)}
                    />

                    {/* Loading overlay for individual images */}
                    {imageLoadingStates[index] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                        <div className="h-10 w-10 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </div>
                ))}
                <div className="bg-[#4A2F1E]/30 p-2 absolute bottom-2 right-2">
                  <ViewOptionBtn isGridView={isGridView} />
                </div>
              </div>

              {/* Desktop - Single Image with Navigation */}
              <div className="hidden md:block relative w-full aspect-video rounded-lg overflow-hidden">
                {items[activeTitle]?.imageUrl && (
                  <Image
                    src={items[activeTitle]!.imageUrl}
                    alt={items[activeTitle]!.title}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    sizes="80vw"
                    priority
                    onLoadStart={() => handleImageLoadStart(activeTitle)}
                    onLoad={() => handleImageLoad(activeTitle)}
                    onError={() => handleImageLoad(activeTitle)}
                  />
                )}

                {/* Loading overlay for active image */}
                {imageLoadingStates[activeTitle] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                    <div className="h-10 w-10 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </div>

              {/* Desktop Navigation Controls */}
              <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 bg-[#4A2F1E]/80 px-4 py-2 rounded-full">
                  <NavButton
                    direction="left"
                    onClick={() => setActiveTitle(activeTitle - 1)}
                    disabled={activeTitle === 0}
                  />
                  <span className="text-white text-sm">
                    {items.length > 0 ? `${activeTitle + 1} / ${items.length}` : "0 / 0"}
                  </span>
                  <NavButton
                    direction="right"
                    onClick={() => setActiveTitle(activeTitle + 1)}
                    disabled={items.length === 0 || activeTitle === items.length - 1}
                  />
                  <ViewOptionBtn isGridView={isGridView} />
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default GalleryPhotoDrive;
