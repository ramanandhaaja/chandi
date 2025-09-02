"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

interface Props {
  content?: ContentItem[];
  // Optional: Google Drive folder ID to load videos dynamically
  folderId?: string;
  // Optional: Parent folder that contains subfolders named "Day 1", "Day 2", "Day 3"
  parentFolderId?: string;
}

interface ContentItem {
  title: string;
  videoUrl: string;
  downloadUrl?: string;
}

interface DriveFolder {
  id: string;
  name: string;
  createdTime?: string;
}

const VideoGalleryDrive: React.FC<Props> = ({ content = [], folderId, parentFolderId }) => {
  const { language } = useLanguage();
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
  const [videoLoadingStates, setVideoLoadingStates] = useState<Record<number, boolean>>({});
  // Single view active video index
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  // Caption text from Google Docs
  const [caption, setCaption] = useState<string | null>(null);

  // Decide the data source: Drive (if folderId provided) or the provided content prop
  const allItems: ContentItem[] = driveItems ?? content;
  
  // Filter out videos with "-highres" in their filename for display, but keep all for reference
  const items: ContentItem[] = allItems.filter(item => {
    // Check multiple places where "-highres" might appear
    const videoUrl = item.videoUrl || '';
    const title = item.title || '';
    
    // Extract filename from URL (handle various URL formats)
    let filename = '';
    try {
      const urlParts = videoUrl.split('/');
      filename = urlParts[urlParts.length - 1].split('?')[0];
    } catch {
      filename = '';
    }
    
    // Filter out if "-highres" appears in filename, title, or URL (case insensitive)
    const hasHighres = filename.toLowerCase().includes('-highres') || 
                      title.toLowerCase().includes('-highres') ||
                      videoUrl.toLowerCase().includes('-highres');
    
    return !hasHighres;
  });

  // Helper function to find the corresponding high-res video from the full dataset
  const findHighResVideo = (regularItem: ContentItem): ContentItem | null => {
    // Generate the expected high-res filename
    const regularUrl = regularItem.videoUrl || '';
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
    
    // Find the high-res video in the full dataset
    console.log('All available items:', allItems.length);
    allItems.forEach((item, index) => {
      console.log(`Item ${index}:`, item.title, '|', item.videoUrl);
    });
    
    const foundItem = allItems.find(item => {
      const itemUrl = item.videoUrl || '';
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
    
    console.log('Found high-res video:', foundItem);
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
          url = `/api/drive-videos?folderId=${encodeURIComponent(selectedSubfolder.id)}&language=${encodeURIComponent(language)}`;
        } else if (folderId) {
          url = `/api/drive-videos?folderId=${encodeURIComponent(folderId)}&language=${encodeURIComponent(language)}`;
        }
        const res = await fetch(url);
        if (!res?.ok) throw new Error(`Failed to load videos (${res?.status})`);
        const data = (await res.json()) as { items: { title: string; videoUrl: string; downloadUrl?: string }[]; caption?: string | null };
        setDriveItems(data.items || []);
        setCaption(data.caption || null);
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : "Unable to load videos";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };
    fetchDrive();
  }, [folderId, parentFolderId, activeSubfolderIndex, availableSubfolders, subfoldersLoading, language]);

  // Fetch available folders when parentFolderId is provided
  useEffect(() => {
    const fetchFolders = async () => {
      if (!parentFolderId) return;
      setFoldersLoading(true);
      try {
        const url = `/api/drive-videos?parentFolderId=${encodeURIComponent(parentFolderId)}&list=folders`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load folders (${res.status})`);
        const data = await res.json() as { folders: DriveFolder[] };
        const sortedFolders = (data.folders || []).sort((a, b) => {
          // Sort by creation time (newest first), fallback to name if no createdTime
          if (a.createdTime && b.createdTime) {
            return new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime();
          }
          return a.name.localeCompare(b.name);
        });
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
        const url = `/api/drive-videos?parentFolderId=${encodeURIComponent(selectedDayFolder.id)}&list=folders`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load subfolders (${res.status})`);
        const data = await res.json() as { folders: DriveFolder[] };
        const sortedSubfolders = (data.folders || []).sort((a, b) => {
          // Sort by creation time (newest first for subfolders), fallback to name if no createdTime
          if (a.createdTime && b.createdTime) {
            return new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime();
          }
          return a.name.localeCompare(b.name);
        });
        
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

  // Reset video loading states when folder or subfolder changes
  useEffect(() => {
    setVideoLoadingStates({});
    setActiveVideoIndex(0);
    setCaption(null);
  }, [activeFolderIndex, activeSubfolderIndex, folderId, parentFolderId, language]);

  // Helper function to handle video load completion
  const handleVideoLoad = (index: number) => {
    setVideoLoadingStates(prev => ({ ...prev, [index]: false }));
  };

  // Helper function to handle video download
  const handleVideoDownload = (item: ContentItem, isHighRes: boolean = false) => {
    const downloadUrl = isHighRes 
      ? (findHighResVideo(item)?.downloadUrl || findHighResVideo(item)?.videoUrl)
      : (item.downloadUrl || item.videoUrl);
    
    if (downloadUrl) {
      // Create a proper filename
      const filename = item.title || 'video';
      const suffix = isHighRes ? '_highres' : '';
      const extension = filename.includes('.') ? '' : '.mp4';
      const downloadFilename = `${filename.replace(/\.[^/.]+$/, "")}${suffix}${extension}`;
      
      // Create a temporary link to trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = downloadFilename;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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
            className="text-black hover:bg-white hover:text-black cursor-pointer p-2 rounded"
          >
            {isGridView ? (
              <Image
                src="/grid-view-black.svg"
                alt="grid-view"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="/single-view-black.svg"
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
    <main className="w-full bg-white" style={{ minHeight: "650px" }}>
      <div className=" mx-auto w-full max-w-[1500px] flex flex-col md:flex-row gap-8 md:gap-18 lg:gap-20 pt-8 px-4 md:px-8 lg:px-12 xl:px-16 py-12 lg:py-16">
        {/* Left Column - Header and Video Navigation */}
        <div className="md:w-1/4 w-full space-y-8">
          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black/70 z-30"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}

          <div className="space-y-4 p-4 md:p-0 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Videos
            </h2>

            {/* Folder selection tabs */}
            {parentFolderId && (
              <div className="flex justify-center md:justify-start gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
                {foldersLoading ? (
                  <div className="text-black/70 text-sm">Loading folders...</div>
                ) : availableFolders.length > 0 ? (
                  availableFolders.map((folder, index) => (
                    <button
                      key={folder.id}
                      onClick={() => setActiveFolderIndex(index)}
                      className={`whitespace-nowrap text-lg py-2 px-3 text-black transition-all ${
                        activeFolderIndex === index ? "font-bold underline text-black" : "opacity-70"
                      }`}
                    >
                      {folder.name}
                    </button>
                  ))
                ) : (
                  <div className="text-black/70 text-sm">No folders found</div>
                )}
              </div>
            )}
            <div className="border-b border-black/30"></div>
          </div>

          {/* Dropdown Menu - Mobile Only */}
          {availableSubfolders.length > 0 && (
            <div className="md:hidden px-4 mb-4 ">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex justify-between items-center bg-white text-black py-3 px-4 rounded-lg border border-black/30"
              >
                <span>{availableSubfolders[activeSubfolderIndex]?.name || "Select Folder"}</span>
                <span className="transform transition-transform duration-200">
                  {isDropdownOpen ? "▲" : "▼"}
                </span>
              </button>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div className="absolute z-10 w-[calc(100%-2rem)] mt-1 bg-white border border-[#8A6A2F] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {availableSubfolders.map((subfolder, index) => (
                    <button
                      key={subfolder.id}
                      onClick={() => {
                        setActiveSubfolderIndex(index);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left py-3 px-4 text-black transition-all ${
                        activeSubfolderIndex === index
                          ? "bg-gray-200 font-semibold text-black"
                          : "hover:bg-gray-100"
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
          <div className="hidden md:block space-y-2 ">
            {subfoldersLoading ? (
              <div className="text-black/70 text-sm py-3 px-4">Loading subfolders...</div>
            ) : availableSubfolders.length > 0 ? (
              availableSubfolders.map((subfolder, index) => (
                <button
                  key={subfolder.id}
                  onClick={() => setActiveSubfolderIndex(index)}
                  className={`w-full text-left py-3 px-4 text-black transition-all ${
                    activeSubfolderIndex === index
                      ? "bg-black/30 font-semibold rounded-lg shadow-lg"
                      : "hover:bg-black/30"
                  }`}
                >
                  {subfolder.name}
                </button>
              ))
            ) : (
              <div className="text-black/70 text-sm py-3 px-4">No folders found</div>
            )}
          </div>
        </div>

        {/* Right Column - Content Area */}
        <div className="md:w-3/4 w-full ">
          {/* Loading / Error States (when using Google Drive) */}
          {(folderId || parentFolderId) && (
            <div className="mb-4">
              {loading && <p className="text-black/80 text-sm">Loading videos...</p>}
              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}
            </div>
          )}

          {/* Caption from Google Docs */}
          {caption && caption.trim().length > 0 && (
            <div className="mb-8 p-6 bg-gray-100 rounded-lg">
              {(() => {
                const trimmedCaption = caption.trim();
                const lines = trimmedCaption.split('\n');
                
                if (lines.length === 0) return null;
                
                const title = lines[0].trim();
                const remainingText = lines.length > 1 
                  ? lines.slice(1).join('\n').trim()
                  : '';
                
                return (
                  <div className="space-y-4">
                    <h3 className="text-black font-bold text-lg md:text-xl lg:text-2xl leading-relaxed">
                      {title}
                    </h3>
                    {remainingText && (
                      <div className="text-black/90 whitespace-pre-wrap text-sm md:text-base leading-none">
                        {remainingText}
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}

          {items.length === 0 ? (
            // No videos state
            <div className="flex flex-col items-center justify-center h-[50vh] text-center">
              <p className="text-black/80 text-lg mb-2">No videos available</p>
              <p className="text-black/60 text-sm">Please check back later</p>
            </div>
          ) : isGridView ? (
            // Grid View
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group aspect-video bg-black rounded-lg overflow-hidden relative hover:shadow-lg transition-all duration-300"
                  >
                    <iframe
                      src={item.videoUrl}
                      className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                      allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onLoad={() => handleVideoLoad(index)}
                      onError={() => handleVideoLoad(index)}
                    />

                    {/* Loading overlay for individual videos */}
                    {videoLoadingStates[index] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                        <div className="h-8 w-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col justify-between p-4">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-right"></div>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-black font-medium text-sm md:text-base truncate">
                          {/* {item.title} */}
                        </h3>
                        <p className="text-black/80 text-xs mb-2">
                          {index + 1} / {items.length}
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleVideoDownload(item);
                            }}
                            className="bg-black/20 hover:bg-black/30 text-white text-xs px-2 py-1 rounded transition-colors"
                          >
                            Download
                          </button>
                          {(() => {
                            const highResVideo = findHighResVideo(item);
                            return highResVideo ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleVideoDownload(item, true);
                                }}
                                className="bg-black/20 hover:bg-black/30 text-black text-xs px-2 py-1 rounded transition-colors"
                              >
                                High-Res
                              </button>
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
            </>
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
                    <iframe
                      src={item.videoUrl}
                      className="w-full h-full"
                      allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onLoad={() => handleVideoLoad(index)}
                      onError={() => handleVideoLoad(index)}
                    />

                    {/* Loading overlay for individual videos */}
                    {videoLoadingStates[index] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                        <div className="h-10 w-10 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}

                    {/* Download buttons for mobile */}
                    <div className="absolute top-2 left-2 flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVideoDownload(item);
                        }}
                        className="bg-black/50 hover:bg-black/70 text-white text-xs px-2 py-1 rounded transition-colors"
                      >
                        Download
                      </button>
                      {(() => {
                        const highResVideo = findHighResVideo(item);
                        return highResVideo ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleVideoDownload(item, true);
                            }}
                            className="bg-black/50 hover:bg-black/70 text-white text-xs px-2 py-1 rounded transition-colors"
                          >
                            High-Res
                          </button>
                        ) : null;
                      })()}
                    </div>
                  </div>
                ))}
                <div className="bg-white/80 p-2 absolute bottom-2 right-2 rounded">
                  <ViewOptionBtn isGridView={isGridView} />
                </div>
              </div>

              {/* Desktop - Single video view with navigation */}
              <div className="hidden md:block relative w-full">
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                  <iframe
                    src={items[activeVideoIndex]?.videoUrl || ""}
                    className="w-full h-full"
                    allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => handleVideoLoad(activeVideoIndex)}
                    onError={() => handleVideoLoad(activeVideoIndex)}
                  />

                  {/* Loading overlay */}
                  {videoLoadingStates[activeVideoIndex] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                      <div className="h-12 w-12 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}

                  {/* Download buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (items[activeVideoIndex]) {
                          handleVideoDownload(items[activeVideoIndex]);
                        }
                      }}
                      className="bg-black/60 hover:bg-black/80 text-white text-sm px-3 py-2 rounded transition-colors shadow-lg"
                    >
                      Download
                    </button>
                    {(() => {
                      const highResVideo = items[activeVideoIndex] ? findHighResVideo(items[activeVideoIndex]) : null;
                      return highResVideo ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (items[activeVideoIndex]) {
                              handleVideoDownload(items[activeVideoIndex], true);
                            }
                          }}
                          className="bg-black/60 hover:bg-black/80 text-white text-sm px-3 py-2 rounded transition-colors shadow-lg"
                        >
                          High-Res
                        </button>
                      ) : null;
                    })()}
                  </div>
                </div>

                {/* Desktop Navigation Controls */}
                <div className="flex justify-center mt-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full">
                    <button
                      onClick={() => setActiveVideoIndex(prev => prev > 0 ? prev - 1 : items.length - 1)}
                      disabled={items.length <= 1}
                      className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-black disabled:opacity-50"
                      aria-label="Previous"
                    >
                      <Image
                        src="/left-arrow-black.svg"
                        alt="left arrow"
                        width={24}
                        height={24}
                      />
                    </button>
                    <span className="text-black text-sm">
                      {activeVideoIndex + 1} / {items.length}
                    </span>
                    <button
                      onClick={() => setActiveVideoIndex(prev => prev < items.length - 1 ? prev + 1 : 0)}
                      disabled={items.length <= 1}
                      className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-black disabled:opacity-50"
                      aria-label="Next"
                    >
                      <Image
                        src="/right-arrow-black.svg"
                        alt="right arrow"
                        width={24}
                        height={24}
                      />
                    </button>
                    <ViewOptionBtn isGridView={isGridView} />
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default VideoGalleryDrive;
