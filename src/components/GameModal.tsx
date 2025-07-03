
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Calendar, Users, Award, Youtube } from "lucide-react";
import { Game } from "@/data/games";
import ScreenshotGallery from './ScreenshotGallery';
import YouTubeVideo from './YouTubeVideo';
import ProjectContributions from './ProjectContributions';

interface GameModalProps {
  game: Game | null;
  isOpen: boolean;
  onClose: () => void;
}

const GameModal = ({ game, isOpen, onClose }: GameModalProps) => {
  if (!game) return null;

  const hasValidData = (value: string | undefined) => {
    return value && value.trim() !== '';
  };

  const hasValidArray = (arr: string[] | undefined) => {
    return arr && arr.length > 0 && arr.some(item => item.trim() !== '');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900 flex items-center gap-3 pr-8">
            {hasValidData(game.image) && (
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white flex-shrink-0">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex items-center gap-2 flex-wrap min-w-0 flex-1">
              <span className="truncate">{game.title}</span>
              {game.featured && (
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white flex-shrink-0">
                  Featured
                </Badge>
              )}
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 w-full overflow-hidden">

          {/* Screenshots & Video - Moved to top for immediate visual impact */}
          <ScreenshotGallery 
            screenshots={game.screenshots} 
            gameTitle={game.title} 
            videoUrl={game.links.youtube}
          />

          {/* Technologies - Moved up to show tech stack immediately after visuals */}
          {hasValidArray(game.technologies) && (
            <div className="w-full overflow-hidden">
              <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {game.technologies.filter(tech => tech.trim() !== '').map(tech => (
                  <Badge key={tech} variant="outline" className="bg-purple-50 border-purple-200 text-purple-700 max-w-full truncate">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Key Features - Moved up to highlight game features early */}
          {hasValidArray(game.features) && (
            <div className="w-full overflow-hidden">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {game.features.filter(feature => feature.trim() !== '').map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 min-w-0">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-600 break-words">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full overflow-hidden">
            {hasValidData(game.developmentTime) && (
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg min-w-0">
                <Calendar className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                <div className="text-xs md:text-sm text-gray-600">Development Time</div>
                <div className="font-semibold text-sm md:text-base truncate">{game.developmentTime}</div>
              </div>
            )}
            {hasValidData(game.teamSize) && (
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg min-w-0">
                <Users className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <div className="text-xs md:text-sm text-gray-600">Team Size</div>
                <div className="font-semibold text-sm md:text-base truncate">{game.teamSize}</div>
              </div>
            )}
            {hasValidData(game.downloads) && (
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg min-w-0">
                <ExternalLink className="h-6 w-6 mx-auto mb-2 text-green-600" />
                <div className="text-xs md:text-sm text-gray-600">Downloads</div>
                <div className="font-semibold text-sm md:text-base truncate">{game.downloads}</div>
              </div>
            )}
            {hasValidData(game.rating) && (
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg min-w-0">
                <Award className="h-6 w-6 mx-auto mb-2 text-yellow-600" />
                <div className="text-xs md:text-sm text-gray-600">Rating</div>
                <div className="font-semibold text-sm md:text-base truncate">{game.rating}</div>
              </div>
            )}
          </div>

          {/* Description */}
          {hasValidData(game.longDescription) && (
            <div className="w-full overflow-hidden">
              <h3 className="text-lg font-semibold mb-3">About This Project</h3>
              <p className="text-gray-600 leading-relaxed break-words">
                {game.longDescription}
              </p>
            </div>
          )}

          {/* Contributions Section */}
          <ProjectContributions contributions={game.contributions} />

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t w-full overflow-hidden">
            {hasValidData(game.links.demo) && (
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex-shrink-0"
                onClick={() => window.open(game.links.demo, '_blank')}
              >
                <Play className="h-4 w-4 mr-2" />
                Play Demo
              </Button>
            )}
            {hasValidData(game.links.github) && (
              <Button 
                variant="outline" 
                className="hover:bg-gray-50 flex-shrink-0"
                onClick={() => window.open(game.links.github, '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Button>
            )}
            {hasValidData(game.links.store) && (
              <Button 
                variant="outline" 
                className="hover:bg-gray-50 flex-shrink-0"
                onClick={() => window.open(game.links.store, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Store
              </Button>
            )}
            {hasValidData(game.links.youtube) && (
              <Button 
                variant="outline" 
                className="hover:bg-gray-50 flex-shrink-0"
                onClick={() => window.open(game.links.youtube, '_blank')}
              >
                <Youtube className="h-4 w-4 mr-2" />
                Watch Video
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GameModal;
