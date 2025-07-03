
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ImageModal from './ImageModal';
import { ChevronLeft, ChevronRight, Expand, Play, Pause, Youtube } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface ScreenshotGalleryProps {
  screenshots: string[];
  gameTitle: string;
  videoUrl?: string;
}

const ScreenshotGallery = ({ screenshots, gameTitle, videoUrl }: ScreenshotGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Create combined media array (video + screenshots)
  const mediaItems = useMemo(() => {
    const items = [];
    
    // Add video as first item if it exists
    if (videoUrl && videoUrl.trim() && getVideoId(videoUrl)) {
      items.push({
        type: 'video' as const,
        url: videoUrl,
        thumbnail: `https://img.youtube.com/vi/${getVideoId(videoUrl)}/maxresdefault.jpg`
      });
    }
    
    // Add screenshots
    screenshots.forEach(screenshot => {
      items.push({
        type: 'image' as const,
        url: screenshot,
        thumbnail: screenshot
      });
    });
    
    return items;
  }, [screenshots, videoUrl]);

  // Preload images (including video thumbnails)
  useEffect(() => {
    mediaItems.forEach((item, index) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, index]));
      };
      img.src = item.thumbnail;
    });
  }, [mediaItems]);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const nextFeatured = useCallback(() => {
    setFeaturedIndex((prev) => (prev + 1) % mediaItems.length);
  }, [mediaItems.length]);

  const prevFeatured = useCallback(() => {
    setFeaturedIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  }, [mediaItems.length]);

  // Auto-advance functionality
  useEffect(() => {
    if (!isAutoPlay || mediaItems.length <= 1) return;

    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % mediaItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay, mediaItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isModalOpen) return; // Don't interfere with modal navigation
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevFeatured();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextFeatured();
          break;
        case ' ': // Spacebar
          event.preventDefault();
          setIsAutoPlay(prev => !prev);
          break;
        case 'Enter': {
          event.preventDefault();
          const currentItem = mediaItems[featuredIndex];
          if (currentItem.type === 'video') {
            window.open(currentItem.url, '_blank');
          } else {
            handleImageClick(currentItem.url);
          }
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, featuredIndex, mediaItems, nextFeatured, prevFeatured]);

  if (!mediaItems || mediaItems.length === 0) {
    return null;
  }

  const currentItem = mediaItems[featuredIndex];

  return (
    <div className="select-none w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <h3 className="text-lg font-semibold">Screenshots {videoUrl && '& Video'}</h3>
        {mediaItems.length > 1 && (
          <div className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 sm:gap-2 flex-wrap">
            <span className="hidden sm:inline">Use ← → keys to navigate</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-xs">Space to toggle slideshow</span>
          </div>
        )}
      </div>
      
      {/* Enhanced Featured Media Section */}
      {mediaItems.length > 0 && (
        <div className="mb-6">
          <div className="relative group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 w-full">
            {/* 16:9 Aspect Ratio Container */}
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              {currentItem.type === 'video' ? (
                // Video Player with autoplay
                <iframe
                  src={`https://www.youtube.com/embed/${getVideoId(currentItem.url)}?autoplay=1&mute=1&controls=1&loop=1&playlist=${getVideoId(currentItem.url)}`}
                  title={`${gameTitle} video`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                // Image Display with 16:9 aspect ratio
                <>
                  <img 
                    src={currentItem.url} 
                    alt={`${gameTitle} featured screenshot`}
                    className={`absolute inset-0 w-full h-full object-contain bg-gradient-to-br from-gray-900 to-gray-800 transition-all duration-500 ease-out ${
                      loadedImages.has(featuredIndex) ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  
                  {/* Loading indicator for featured image */}
                  {!loadedImages.has(featuredIndex) && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </>
              )}
            </div>
            
            {/* Enhanced Navigation Arrows */}
            {mediaItems.length > 1 && (
              <>
                <button
                  onClick={prevFeatured}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
                  title="Previous item"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextFeatured}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
                  title="Next item"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
              </>
            )}
            
            {/* Enhanced Action Button */}
            <button
              onClick={() => {
                if (currentItem.type === 'video') {
                  window.open(currentItem.url, '_blank');
                } else {
                  handleImageClick(currentItem.url);
                }
              }}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/40 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              title={currentItem.type === 'video' ? 'Watch on YouTube' : 'View full size'}
            >
              {currentItem.type === 'video' ? (
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Expand className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
            
            {/* Auto-play toggle button */}
            {mediaItems.length > 1 && (
              <button
                onClick={() => setIsAutoPlay(prev => !prev)}
                className={`absolute top-2 sm:top-4 right-12 sm:right-20 text-white p-2 sm:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 ${
                  isAutoPlay 
                    ? 'bg-purple-500/60 hover:bg-purple-600/70' 
                    : 'bg-black/40 hover:bg-black/70'
                }`}
                title={isAutoPlay ? 'Pause slideshow' : 'Start slideshow'}
              >
                {isAutoPlay ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            )}
            
            {/* Enhanced Counter */}
            {mediaItems.length > 1 && (
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/60 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm backdrop-blur-sm border border-white/20 font-medium">
                {featuredIndex + 1} of {mediaItems.length}
              </div>
            )}
            
            {/* Media type overlay */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/60 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm backdrop-blur-sm border border-white/20 max-w-[60%] truncate">
              {currentItem.type === 'video' ? `${gameTitle} Video` : `${gameTitle} Screenshot`}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Thumbnail Carousel */}
      {mediaItems.length > 1 && (
        <div className="relative group w-full overflow-hidden">
          <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-sm font-medium text-gray-600">
              {mediaItems.length} Media Item{mediaItems.length > 1 ? 's' : ''}
            </span>
            <div className="text-xs text-gray-400">
              Scroll to view more
            </div>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {mediaItems.map((item, index) => {
                const isActive = index === featuredIndex;
                
                return (
                  <CarouselItem key={index} className="pl-1 basis-[80px] sm:basis-[100px] md:basis-[120px]">
                    <div 
                      className={`relative cursor-pointer group/item transition-all duration-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg ${
                        isActive 
                          ? 'ring-2 ring-purple-500 ring-offset-1 scale-105 shadow-purple-200' 
                          : 'hover:scale-102 ring-1 ring-gray-200 hover:ring-gray-300'
                      }`}
                      onClick={() => setFeaturedIndex(index)}
                    >
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                        <img 
                          src={item.thumbnail} 
                          alt={item.type === 'video' ? `${gameTitle} video thumbnail` : `${gameTitle} thumbnail ${index + 1}`}
                          className={`w-full h-full object-cover transition-all duration-300 ${
                            isActive 
                              ? 'opacity-100' 
                              : 'opacity-90 group-hover/item:opacity-100'
                          } ${loadedImages.has(index) ? 'opacity-100' : 'opacity-0'}`}
                          loading="lazy"
                        />
                        
                        {/* Video play overlay */}
                        {item.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <div className="bg-red-600 text-white p-2 rounded-full">
                              <Youtube className="w-4 h-4" />
                            </div>
                          </div>
                        )}
                        
                        {/* Loading placeholder for thumbnails */}
                        {!loadedImages.has(index) && (
                          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        )}
                      </div>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 sm:h-1 bg-purple-500 rounded-full" />
                      )}
                      
                      {/* Overlay for non-active items */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-black/15 group-hover/item:bg-black/5 transition-colors duration-300" />
                      )}
                      
                      {/* Enhanced action button */}
                      <div className="absolute top-1 right-1 opacity-0 group-hover/item:opacity-100 transition-all duration-200 transform translate-y-1 group-hover/item:translate-y-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (item.type === 'video') {
                              window.open(item.url, '_blank');
                            } else {
                              handleImageClick(item.url);
                            }
                          }}
                          className="bg-black/60 hover:bg-black/80 text-white p-1 rounded-md backdrop-blur-sm transition-all duration-200 hover:scale-110"
                          title={item.type === 'video' ? 'Watch on YouTube' : 'View full size'}
                        >
                          {item.type === 'video' ? (
                            <Youtube className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          ) : (
                            <Expand className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          )}
                        </button>
                      </div>
                      
                      {/* Item number badge */}
                      <div className="absolute bottom-1 left-1 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                        {index + 1}
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Enhanced navigation buttons */}
            <CarouselPrevious 
              className="left-2 -translate-x-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 h-7 w-7 sm:h-8 sm:w-8" 
            />
            <CarouselNext 
              className="right-2 translate-x-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 h-7 w-7 sm:h-8 sm:w-8" 
            />
          </Carousel>
          
          {/* Progress indicator */}
          <div className="flex justify-center mt-3 space-x-1 overflow-hidden">
            <div className="flex space-x-1 max-w-full overflow-x-auto pb-1 scrollbar-hide">
              {mediaItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setFeaturedIndex(index)}
                  className={`flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 ${
                    index === featuredIndex 
                      ? 'bg-purple-500 w-4 sm:w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  title={`Go to ${mediaItems[index].type === 'video' ? 'video' : `screenshot ${index + 1}`}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          imageUrl={selectedImage}
          altText={`${gameTitle} screenshot`}
        />
      )}
    </div>
  );
};

export default ScreenshotGallery;
