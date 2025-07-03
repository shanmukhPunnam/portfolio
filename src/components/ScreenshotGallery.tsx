
import React, { useState, useEffect } from 'react';
import ImageModal from './ImageModal';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

interface ScreenshotGalleryProps {
  screenshots: string[];
  gameTitle: string;
}

const ScreenshotGallery = ({ screenshots, gameTitle }: ScreenshotGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [imageAspectRatios, setImageAspectRatios] = useState<{ [key: number]: number }>({});

  // Load images and calculate aspect ratios
  useEffect(() => {
    const loadImageAspectRatios = async () => {
      const ratios: { [key: number]: number } = {};
      
      await Promise.all(
        screenshots.map((screenshot, index) => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => {
              ratios[index] = img.width / img.height;
              resolve();
            };
            img.onerror = () => {
              ratios[index] = 16 / 9; // Default aspect ratio
              resolve();
            };
            img.src = screenshot;
          });
        })
      );
      
      setImageAspectRatios(ratios);
    };

    if (screenshots.length > 0) {
      loadImageAspectRatios();
    }
  }, [screenshots]);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const nextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const getImageCardClass = (aspectRatio: number) => {
    if (aspectRatio > 1.5) {
      // Landscape
      return "col-span-2 row-span-1";
    } else if (aspectRatio < 0.8) {
      // Portrait
      return "col-span-1 row-span-2";
    } else {
      // Square-ish
      return "col-span-1 row-span-1";
    }
  };

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Screenshots</h3>
      
      {/* Featured Image Section */}
      {screenshots.length > 0 && (
        <div className="mb-6">
          <div className="relative group bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={screenshots[featuredIndex]} 
              alt={`${gameTitle} featured screenshot`}
              className="w-full h-64 md:h-80 lg:h-96 object-contain bg-gray-900"
            />
            
            {/* Navigation Arrows */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={prevFeatured}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextFeatured}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
            
            {/* Expand Button */}
            <button
              onClick={() => handleImageClick(screenshots[featuredIndex])}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <Expand className="w-4 h-4" />
            </button>
            
            {/* Image Counter */}
            {screenshots.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {featuredIndex + 1} / {screenshots.length}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Thumbnail Grid */}
      {screenshots.length > 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {screenshots.map((screenshot, index) => {
            const aspectRatio = imageAspectRatios[index] || 1;
            const isActive = index === featuredIndex;
            
            return (
              <div 
                key={index}
                className={`relative cursor-pointer group transition-all duration-200 rounded-lg overflow-hidden ${
                  isActive 
                    ? 'ring-2 ring-blue-500 ring-offset-2 scale-105' 
                    : 'hover:scale-105 hover:shadow-lg'
                }`}
                onClick={() => setFeaturedIndex(index)}
              >
                <div className="aspect-square bg-gray-100">
                  <img 
                    src={screenshot} 
                    alt={`${gameTitle} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                  />
                </div>
                
                {/* Overlay for non-active images */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                )}
                
                {/* Click to expand hint */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleImageClick(screenshot);
                    }}
                    className="bg-black/50 hover:bg-black/70 text-white p-1 rounded"
                  >
                    <Expand className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
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
