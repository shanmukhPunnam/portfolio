
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            {game.title}
            {game.featured && (
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                Featured
              </Badge>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Hero Image */}
          {hasValidData(game.image) && (
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={game.image} 
                alt={game.title}
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          {/* YouTube Video */}
          <YouTubeVideo videoUrl={game.links.youtube} />

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hasValidData(game.developmentTime) && (
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Calendar className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                <div className="text-sm text-gray-600">Development Time</div>
                <div className="font-semibold">{game.developmentTime}</div>
              </div>
            )}
            {hasValidData(game.teamSize) && (
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Users className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <div className="text-sm text-gray-600">Team Size</div>
                <div className="font-semibold">{game.teamSize}</div>
              </div>
            )}
            {hasValidData(game.downloads) && (
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <ExternalLink className="h-6 w-6 mx-auto mb-2 text-green-600" />
                <div className="text-sm text-gray-600">Downloads</div>
                <div className="font-semibold">{game.downloads}</div>
              </div>
            )}
            {hasValidData(game.rating) && (
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Award className="h-6 w-6 mx-auto mb-2 text-yellow-600" />
                <div className="text-sm text-gray-600">Rating</div>
                <div className="font-semibold">{game.rating}</div>
              </div>
            )}
          </div>

          {/* Description */}
          {hasValidData(game.longDescription) && (
            <div>
              <h3 className="text-lg font-semibold mb-3">About This Project</h3>
              <p className="text-gray-600 leading-relaxed">
                {game.longDescription}
              </p>
            </div>
          )}

          {/* Contributions Section */}
          <ProjectContributions contributions={game.contributions} />

          {/* Technologies */}
          {hasValidArray(game.technologies) && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {game.technologies.filter(tech => tech.trim() !== '').map(tech => (
                  <Badge key={tech} variant="outline" className="bg-purple-50 border-purple-200 text-purple-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {hasValidArray(game.features) && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {game.features.filter(feature => feature.trim() !== '').map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Screenshots */}
          <ScreenshotGallery screenshots={game.screenshots} gameTitle={game.title} />

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            {hasValidData(game.links.demo) && (
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                onClick={() => window.open(game.links.demo, '_blank')}
              >
                <Play className="h-4 w-4 mr-2" />
                Play Demo
              </Button>
            )}
            {hasValidData(game.links.github) && (
              <Button 
                variant="outline" 
                className="hover:bg-gray-50"
                onClick={() => window.open(game.links.github, '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Button>
            )}
            {hasValidData(game.links.store) && (
              <Button 
                variant="outline" 
                className="hover:bg-gray-50"
                onClick={() => window.open(game.links.store, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Store
              </Button>
            )}
            {hasValidData(game.links.youtube) && (
              <Button 
                variant="outline" 
                className="hover:bg-gray-50"
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
