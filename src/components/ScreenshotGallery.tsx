
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ImageModal from './ImageModal';

interface ScreenshotGalleryProps {
  screenshots: string[];
  gameTitle: string;
}

const ScreenshotGallery = ({ screenshots, gameTitle }: ScreenshotGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Screenshots</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {screenshots.map((screenshot, index) => (
          <div 
            key={index}
            className="cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => handleImageClick(screenshot)}
          >
            <AspectRatio ratio={16/9} className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={screenshot} 
                alt={`${gameTitle} screenshot ${index + 1}`}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
      
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
