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
  const [activeSubfolderIndex, setActiveSubfolderIndex] = useState(0);
  const [isGridView, setIsGridView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [driveItems, setDriveItems] = useState<ContentItem[] | null>(null);
  const [availableFolders, setAvailableFolders] = useState<DriveFolder[]>([]);
  const [availableSubfolders, setAvailableSubfolders] = useState<DriveFolder[]>([]);
  const [loading, setLoading] = useState(false);
  const [foldersLoading, setFoldersLoading] = useState(false);
  const [subfoldersLoading, setSubfoldersLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Simplified loading states
  const [imageLoadingStates, setImageLoadingStates] = useState<Record<number, boolean>>({});
  // Single view active image index
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // Caption text from Google Docs
  const [caption, setCaption] = useState<string | null>(null);

  // Decide the data source: Drive (if folderId provided) or the provided content prop
  const allItems: ContentItem[] = driveItems ?? content;
  
  // Filter out images with "-highres" in their filename for display, but keep all for reference
  const items: ContentItem[] = allItems.filter(item => {
    // Check multiple places where "-highres" might appear
    const imageUrl = item.imageUrl || '';
    const title = item.title || '';
    
    // Extract filename from URL (handle various URL formats)
    let filename = '';
    try {
      const urlParts = imageUrl.split('/');
      filename = urlParts[urlParts.length - 1].split('?')[0];
    } catch {
      filename = '';
    }
    
    // Filter out if "-highres" appears in filename, title, or URL (case insensitive)
    const hasHighres = filename.toLowerCase().includes('-highres') || 
                      title.toLowerCase().includes('-highres') ||
                      imageUrl.toLowerCase().includes('-highres');
    
    return !hasHighres;
  });

  // Helper function to find the corresponding high-res image from the full dataset
  const findHighResImage = (regularItem: ContentItem): ContentItem | null => {
    // Generate the expected high-res filename
    const regularUrl = regularItem.imageUrl || '';
    const regularTitle = regularItem.title || '';
    let expectedHighResFilename = '';
    
    try {
      // For Google Drive URLs, use the title field which contains the actual filename
      let filename = regularTitle || '';
      
      // Fallback to URL parsing only if title is not available
      if (!filename && regularUrl) {
        const urlParts = regularUrl.split('/');
        filename = urlParts[urlParts.length - 1].split('?')[0];
      }
      
      const lastDotIndex = filename.lastIndexOf('.');
      if (lastDotIndex === -1) {
        expectedHighResFilename = filename + '-highres';
      } else {
        const name = filename.substring(0, lastDotIndex);
        const extension = filename.substring(lastDotIndex);
        expectedHighResFilename = name + '-highres' + extension;
      }
      
      console.log('Looking for high-res version of:');
      console.log('- regularFilename:', filename);
      console.log('- expectedHighResFilename:', expectedHighResFilename);
      console.log('- regularUrl:', regularUrl);
      console.log('- regularTitle:', regularTitle);
    } catch {
      return null;
    }
    
    // Find the high-res image in the full dataset
    console.log('All available items:', allItems.length);
    allItems.forEach((item, index) => {
      console.log(`Item ${index}:`, item.title, '|', item.imageUrl);
    });
    
    const foundItem = allItems.find(item => {
      const itemUrl = item.imageUrl || '';
      const itemTitle = item.title || '';
      
      // Check both URL and title for matches
      const urlMatch = itemUrl.toLowerCase().includes(expectedHighResFilename.toLowerCase());
      const titleMatch = itemTitle.toLowerCase().includes(expectedHighResFilename.toLowerCase());
      
      console.log('Checking item:');
      console.log('- itemUrl:', itemUrl);
      console.log('- itemTitle:', itemTitle);
      console.log('- expectedHighResFilename:', expectedHighResFilename);
      console.log('- urlMatch:', urlMatch);
      console.log('- titleMatch:', titleMatch);
      
      return urlMatch || titleMatch;
    });
    
    console.log('Found high-res image:', foundItem);
    return foundItem || null;
  };

  useEffect(() => {
    const fetchDrive = async () => {
      // If neither Drive option provided, do nothing
      if (!folderId && !parentFolderId) return;
      
      // If parentFolderId is used but subfolders haven't loaded yet, wait
      if (parentFolderId && availableSubfolders.length === 0 && !subfoldersLoading) return;
      
      setLoading(true);
      setError(null);
      try {
        let url = "";
        if (parentFolderId && availableSubfolders.length > 0) {
          // Use the selected subfolder directly
          const selectedSubfolder = availableSubfolders[activeSubfolderIndex];
          if (!selectedSubfolder) {
            throw new Error("No subfolder selected");
          }
          url = `/api/drive-images?folderId=${encodeURIComponent(selectedSubfolder.id)}`;
        } else if (folderId) {
          url = `/api/drive-images?folderId=${encodeURIComponent(folderId)}`;
        }
        const res = await fetch(url);
        if (!res?.ok) throw new Error(`Failed to load images (${res?.status})`);
        const data = (await res.json()) as { items: { title: string; imageUrl: string }[]; caption?: string | null };
        setDriveItems(data.items || []);
        setCaption(data.caption || null);
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : "Unable to load images";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };
    fetchDrive();
  }, [folderId, parentFolderId, activeSubfolderIndex, availableSubfolders, subfoldersLoading]);

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
        const msg = e instanceof Error ? e.message : "Unable to load folders";
        setError(msg);
        setAvailableFolders([]);
      } finally {
        setFoldersLoading(false);
      }
    };
    fetchFolders();
  }, [parentFolderId]);

  // Fetch subfolders within the selected day folder
  useEffect(() => {
    const fetchSubfolders = async () => {
      if (!parentFolderId || availableFolders.length === 0) return;
      
      const selectedDayFolder = availableFolders[activeFolderIndex];
      if (!selectedDayFolder) return;
      
      setSubfoldersLoading(true);
      setError(null);
      try {
        const url = `/api/drive-images?parentFolderId=${encodeURIComponent(selectedDayFolder.id)}&list=folders`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load subfolders (${res.status})`);
        const data = await res.json() as { folders: DriveFolder[] };
        const sortedSubfolders = (data.folders || []).sort((a, b) => a.name.localeCompare(b.name));
        
        if (sortedSubfolders.length === 0) {
          // If no subfolders, use the day folder itself as the "subfolder"
          setAvailableSubfolders([selectedDayFolder]);
        } else {
          setAvailableSubfolders(sortedSubfolders);
        }
        setActiveSubfolderIndex(0); // Reset to first subfolder
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : "Unable to load subfolders";
        setError(msg);
        // Fallback to using the day folder itself
        setAvailableSubfolders([selectedDayFolder]);
      } finally {
        setSubfoldersLoading(false);
      }
    };
    fetchSubfolders();
  }, [parentFolderId, availableFolders, activeFolderIndex]);

  // Reset image loading states when folder or subfolder changes
  useEffect(() => {
    setImageLoadingStates({});
    setActiveImageIndex(0);
    setCaption(null);
  }, [activeFolderIndex, activeSubfolderIndex, folderId, parentFolderId]);

  // Helper function to handle image load completion
  const handleImageLoad = (index: number) => {
    setImageLoadingStates(prev => ({ ...prev, [index]: false }));
  };

  // Helper function to handle image load start
  const handleImageLoadStart = (index: number) => {
    setImageLoadingStates(prev => ({ ...prev, [index]: true }));
  };




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
          {availableSubfolders.length > 0 && (
            <div className="md:hidden px-4 mb-4 ">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex justify-between items-center bg-[#4A2F1E] text-white py-3 px-4 rounded-lg border border-white/30"
              >
                <span>{availableSubfolders[activeSubfolderIndex]?.name || "Select Folder"}</span>
                <span className="transform transition-transform duration-200">
                  {isDropdownOpen ? "▲" : "▼"}
                </span>
              </button>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div className="absolute z-10 w-[calc(100%-2rem)] mt-1 bg-[#4A2F1E] border border-[#8A6A2F] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {availableSubfolders.map((subfolder, index) => (
                    <button
                      key={subfolder.id}
                      onClick={() => {
                        setActiveSubfolderIndex(index);
                        setIsDropdownOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`w-full text-left py-3 px-4 text-white transition-all ${
                        activeSubfolderIndex === index
                          ? "bg-black/30 font-semibold"
                          : "hover:bg-black/30"
                      }`}
                    >
                      {subfolder.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          {/* Desktop Navigation List - Hidden on mobile */}
          <div className="hidden md:block space-y-2">
            {subfoldersLoading ? (
              <div className="text-white/70 text-sm py-3 px-4">Loading subfolders...</div>
            ) : availableSubfolders.length > 0 ? (
              availableSubfolders.map((subfolder, index) => (
                <button
                  key={subfolder.id}
                  onClick={() => setActiveSubfolderIndex(index)}
                  className={`w-full text-left py-3 px-4 text-white transition-all ${
                    activeSubfolderIndex === index
                      ? "bg-black/30 font-semibold rounded-lg"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  {subfolder.name}
                </button>
              ))
            ) : (
              <div className="text-white/70 text-sm py-3 px-4">No folders found</div>
            )}
          </div>
        </div>

        {/* Right Column - Content Area */}
        <div className="md:w-3/4 w-full ">
          {/* Loading / Error States (when using Google Drive) */}
          {(folderId || parentFolderId) && (
            <div className="mb-4">
              {loading && <p className="text-white/80 text-sm">Loading images...</p>}
              {error && (
                <p className="text-red-300 text-sm">{error}</p>
              )}
            </div>
          )}

          {/* Caption from Google Docs */}
          {caption && caption.trim().length > 0 && (
            <div className="mb-6 p-4 bg-black/20 rounded-lg">
              <div className="text-white whitespace-pre-wrap text-sm md:text-base">
                {caption.trim()}
              </div>
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
                          {/* {item.title} */}
                        </h3>
                        <p className="text-white/80 text-xs mb-2">
                          {index + 1} / {items.length}
                        </p>
                        <div className="flex gap-2">
                          <a
                            href={item.imageUrl}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 hover:bg-white/30 text-white text-xs px-2 py-1 rounded transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Download
                          </a>
                          {(() => {
                            const highResImage = findHighResImage(item);
                            return highResImage ? (
                              <a
                                href={highResImage.imageUrl}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/20 hover:bg-white/30 text-white text-xs px-2 py-1 rounded transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                High-Res
                              </a>
                            ) : null;
                          })()}
                        </div>
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

                    {/* Download buttons for mobile */}
                    <div className="absolute top-2 left-2 flex gap-2">
                      <a
                        href={item.imageUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/50 hover:bg-black/70 text-white text-xs px-2 py-1 rounded transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Download
                      </a>
                      {(() => {
                        const highResImage = findHighResImage(item);
                        return highResImage ? (
                          <a
                            href={highResImage.imageUrl}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/50 hover:bg-black/70 text-white text-xs px-2 py-1 rounded transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            High-Res
                          </a>
                        ) : null;
                      })()}
                    </div>
                  </div>
                ))}
                <div className="bg-[#4A2F1E]/30 p-2 absolute bottom-2 right-2">
                  <ViewOptionBtn isGridView={isGridView} />
                </div>
              </div>

              {/* Desktop - Single image view with navigation */}
              <div className="hidden md:block">
                <div className="flex flex-col items-center space-y-4">
                  {/* Single large image display */}
                  <div className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden relative">
                    <Image
                      src={items[activeImageIndex]?.imageUrl || ""}
                      alt={items[activeImageIndex]?.title || ""}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="100vw"
                      priority
                      onLoadStart={() => handleImageLoadStart(activeImageIndex)}
                      onLoad={() => handleImageLoad(activeImageIndex)}
                      onError={() => handleImageLoad(activeImageIndex)}
                    />

                    {/* Loading overlay */}
                    {imageLoadingStates[activeImageIndex] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                        <div className="h-12 w-12 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}

                    {/* Navigation arrows */}
                    {items.length > 1 && (
                      <>
                        <button
                          onClick={() => setActiveImageIndex(prev => prev > 0 ? prev - 1 : items.length - 1)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                        >
                          ←
                        </button>
                        <button
                          onClick={() => setActiveImageIndex(prev => prev < items.length - 1 ? prev + 1 : 0)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                        >
                          →
                        </button>
                      </>
                    )}

                    {/* Download buttons */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <a
                        href={items[activeImageIndex]?.imageUrl || ""}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/60 hover:bg-black/80 text-white text-sm px-3 py-2 rounded transition-colors shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Download
                      </a>
                      {(() => {
                        const highResImage = items[activeImageIndex] ? findHighResImage(items[activeImageIndex]) : null;
                        return highResImage ? (
                          <a
                            href={highResImage.imageUrl}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/60 hover:bg-black/80 text-white text-sm px-3 py-2 rounded transition-colors shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                          >
                            High-Res
                          </a>
                        ) : null;
                      })()}
                    </div>

                    {/* Image counter */}
                    <div className="absolute bottom-4 left-4 bg-black/50 text-white text-sm px-3 py-2 rounded">
                      {activeImageIndex + 1} / {items.length}
                    </div>
                  </div>

                  {/* Thumbnail navigation */}
                  <div className="flex gap-2 overflow-x-auto pb-2 max-w-4xl w-full justify-center">
                    {items.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-14 bg-black rounded overflow-hidden cursor-pointer transition-all ${
                          index === activeImageIndex
                            ? "opacity-100 ring-2 ring-white"
                            : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={80}
                          height={56}
                          style={{ objectFit: "cover" }}
                          className="w-full h-full"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end pt-2">
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
