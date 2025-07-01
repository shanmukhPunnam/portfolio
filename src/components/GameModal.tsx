
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Calendar, Users, Award } from "lucide-react";

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  links: {
    demo: string;
    github: string;
    store: string;
  };
  featured: boolean;
  longDescription?: string;
  developmentTime?: string;
  teamSize?: string;
  downloads?: string;
  rating?: string;
  features?: string[];
  screenshots?: string[];
}

interface GameModalProps {
  game: Game | null;
  isOpen: boolean;
  onClose: () => void;
}

const GameModal = ({ game, isOpen, onClose }: GameModalProps) => {
  if (!game) return null;

  // Dynamic project details based on the actual game data
  const getProjectDetails = (game: Game) => {
    const baseDetails = {
      longDescription: game.longDescription || `${game.description} This project demonstrates advanced development techniques and showcases expertise in ${game.technologies.slice(0, 2).join(' and ')}.`,
      developmentTime: game.developmentTime || "3-6 months",
      teamSize: game.teamSize || "Solo Developer",
      downloads: game.downloads || "10K+",
      rating: game.rating || "4.5/5",
      features: game.features || [
        "Responsive design",
        "Optimized performance",
        "Cross-platform compatibility",
        "Modern UI/UX",
        "Scalable architecture"
      ],
      screenshots: game.screenshots || [
        game.image,
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop"
      ]
    };

    // Customize details based on project category
    switch (game.category.toLowerCase()) {
      case 'rpg':
        return {
          ...baseDetails,
          developmentTime: "8-12 months",
          features: [
            "Character progression system",
            "Quest management",
            "Inventory system",
            "Real-time combat",
            "Save/Load functionality",
            "Multiple storylines"
          ]
        };
      case 'action':
        return {
          ...baseDetails,
          developmentTime: "4-6 months",
          features: [
            "Fast-paced gameplay",
            "Multiplayer support",
            "Weapon systems",
            "Score tracking",
            "Power-ups and bonuses",
            "Procedural generation"
          ]
        };
      case 'puzzle':
        return {
          ...baseDetails,
          developmentTime: "2-4 months",
          features: [
            "100+ unique levels",
            "Hint system",
            "Progress tracking",
            "Achievement system",
            "Leaderboards",
            "Offline play support"
          ]
        };
      case 'racing':
        return {
          ...baseDetails,
          developmentTime: "6-8 months",
          features: [
            "Realistic physics engine",
            "Multiple racing modes",
            "Car customization",
            "Track editor",
            "Weather effects",
            "Time trial modes"
          ]
        };
      case 'vr':
        return {
          ...baseDetails,
          developmentTime: "5-7 months",
          features: [
            "Immersive VR experience",
            "Hand tracking support",
            "Spatial audio",
            "Room-scale movement",
            "Cross-platform VR",
            "Haptic feedback"
          ]
        };
      case 'mobile':
        return {
          ...baseDetails,
          developmentTime: "2-3 months",
          downloads: "100K+",
          features: [
            "Touch-optimized controls",
            "Social features",
            "In-app purchases",
            "Push notifications",
            "Offline gameplay",
            "Cloud save sync"
          ]
        };
      default:
        return baseDetails;
    }
  };

  const projectDetails = getProjectDetails(game);

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
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={game.image} 
              alt={game.title}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Calendar className="h-6 w-6 mx-auto mb-2 text-purple-600" />
              <div className="text-sm text-gray-600">Development Time</div>
              <div className="font-semibold">{projectDetails.developmentTime}</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Users className="h-6 w-6 mx-auto mb-2 text-blue-600" />
              <div className="text-sm text-gray-600">Team Size</div>
              <div className="font-semibold">{projectDetails.teamSize}</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <ExternalLink className="h-6 w-6 mx-auto mb-2 text-green-600" />
              <div className="text-sm text-gray-600">Downloads</div>
              <div className="font-semibold">{projectDetails.downloads}</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Award className="h-6 w-6 mx-auto mb-2 text-yellow-600" />
              <div className="text-sm text-gray-600">Rating</div>
              <div className="font-semibold">{projectDetails.rating}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About This Project</h3>
            <p className="text-gray-600 leading-relaxed">
              {projectDetails.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {game.technologies.map(tech => (
                <Badge key={tech} variant="outline" className="bg-purple-50 border-purple-200 text-purple-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {projectDetails.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projectDetails.screenshots.map((screenshot, index) => (
                <img 
                  key={index}
                  src={screenshot} 
                  alt={`${game.title} screenshot ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              onClick={() => window.open(game.links.demo, '_blank')}
            >
              <Play className="h-4 w-4 mr-2" />
              Play Demo
            </Button>
            <Button 
              variant="outline" 
              className="hover:bg-gray-50"
              onClick={() => window.open(game.links.github, '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              View Code
            </Button>
            <Button 
              variant="outline" 
              className="hover:bg-gray-50"
              onClick={() => window.open(game.links.store, '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit Store
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GameModal;
