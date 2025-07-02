
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface YouTubeVideoProps {
  videoUrl?: string;
}

const YouTubeVideo = ({ videoUrl }: YouTubeVideoProps) => {
  if (!videoUrl || videoUrl.trim() === '') {
    return null;
  }

  // Extract video ID from various YouTube URL formats
  const getVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(videoUrl);
  
  if (!videoId) {
    return null;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Video Showcase</h3>
      <AspectRatio ratio={16/9} className="bg-gray-100 rounded-lg overflow-hidden">
        <iframe
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default YouTubeVideo;
