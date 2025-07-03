
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Calendar, Users, Award, Youtube, Star, Download, ChevronDown, ChevronUp } from "lucide-react";
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
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  if (!game) return null;

  const hasValidData = (value: string | undefined) => {
    return value && value.trim() !== '';
  };

  const hasValidArray = (arr: string[] | undefined) => {
    return arr && arr.length > 0 && arr.some(item => item.trim() !== '');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto p-0">
        <div className="bg-white">
          {/* Header Section */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-start gap-4">
              {/* Project Icon */}
              <div className="flex-shrink-0">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                />
              </div>
              
              {/* Title and Metadata */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900 truncate">{game.title}</h1>
                  {game.featured && (
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                      ⭐ Featured
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {game.category}
                  </Badge>
                </div>

                {/* Key Metadata Row */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  {game.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-900">{game.rating}</span>
                    </div>
                  )}
                  {game.downloads && (
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4 text-green-600" />
                      <span>{game.downloads}</span>
                    </div>
                  )}
                  {game.developmentTime && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span>{game.developmentTime}</span>
                    </div>
                  )}
                  {game.teamSize && (
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{game.teamSize}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              {hasValidData(game.links.demo) && (
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                  onClick={() => window.open(game.links.demo, '_blank')}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Play Demo
                </Button>
              )}
              {hasValidData(game.links.github) && (
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-300 hover:bg-gray-50"
                  onClick={() => window.open(game.links.github, '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              )}
              {hasValidData(game.links.store) && (
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-300 hover:bg-gray-50"
                  onClick={() => window.open(game.links.store, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Store
                </Button>
              )}
              {hasValidData(game.links.youtube) && (
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-300 hover:bg-gray-50"
                  onClick={() => window.open(game.links.youtube, '_blank')}
                >
                  <Youtube className="h-4 w-4 mr-2" />
                  Video
                </Button>
              )}
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* Media Showcase */}
            <div className="space-y-6">
              <YouTubeVideo videoUrl={game.links.youtube} />
              <ScreenshotGallery screenshots={game.screenshots} gameTitle={game.title} />
            </div>

            {/* Description Block */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">About this project</h2>
              
              {/* Short Description */}
              <p className="text-gray-700 text-base leading-relaxed">
                {game.description}
              </p>
              
              {/* Expandable Full Description */}
              {hasValidData(game.longDescription) && (
                <div className="space-y-3">
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isDescriptionExpanded ? 'max-h-none' : 'max-h-0'
                  }`}>
                    <p className="text-gray-600 leading-relaxed pt-2">
                      {game.longDescription}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    {isDescriptionExpanded ? 'Show less' : 'Read more'}
                    {isDescriptionExpanded ? 
                      <ChevronUp className="w-4 h-4" /> : 
                      <ChevronDown className="w-4 h-4" />
                    }
                  </button>
                </div>
              )}
            </div>

            {/* Key Features */}
            {hasValidArray(game.features) && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {game.features.filter(feature => feature.trim() !== '').map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Used */}
            {hasValidArray(game.technologies) && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {game.technologies.filter(tech => tech.trim() !== '').map(tech => (
                    <Badge key={tech} variant="outline" className="bg-purple-50 border-purple-200 text-purple-700 px-3 py-1 text-sm font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* My Contributions */}
            <ProjectContributions contributions={game.contributions} />

            {/* Stats Section */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {game.rating && (
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Award className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{game.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                )}
                {game.downloads && (
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Download className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{game.downloads}</div>
                    <div className="text-sm text-gray-600">Downloads</div>
                  </div>
                )}
                {game.developmentTime && (
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Calendar className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{game.developmentTime}</div>
                    <div className="text-sm text-gray-600">Dev Time</div>
                  </div>
                )}
                {game.teamSize && (
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{game.teamSize}</div>
                    <div className="text-sm text-gray-600">Team Size</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GameModal;
