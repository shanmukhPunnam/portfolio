
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Game } from "@/data/games";
import { Star, Download, Users, Calendar } from 'lucide-react';

interface GameCardProps {
  game: Game;
  onGameClick: (game: Game) => void;
}

const GameCard = ({ game, onGameClick }: GameCardProps) => {
  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100 shadow-md overflow-hidden cursor-pointer h-full flex flex-col"
      onClick={() => onGameClick(game)}
    >
      {/* Header Image Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="aspect-video relative">
          <img 
            src={game.image} 
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {game.featured && (
            <Badge className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg">
              ⭐ Featured
            </Badge>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col flex-1 p-4">
        {/* Title and Category */}
        <div className="mb-3">
          <CardTitle className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {game.title}
          </CardTitle>
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
            {game.category}
          </Badge>
        </div>

        {/* Description */}
        <CardDescription className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
          {game.description}
        </CardDescription>

        {/* Stats Row */}
        <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
          {game.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{game.rating}</span>
            </div>
          )}
          {game.downloads && (
            <div className="flex items-center gap-1">
              <Download className="w-3 h-3" />
              <span>{game.downloads}</span>
            </div>
          )}
          {game.teamSize && (
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{game.teamSize}</span>
            </div>
          )}
          {game.developmentTime && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{game.developmentTime}</span>
            </div>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {game.technologies.slice(0, 3).map(tech => (
              <Badge key={tech} variant="outline" className="text-xs bg-gray-50 border-gray-200 text-gray-600">
                {tech}
              </Badge>
            ))}
            {game.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs bg-gray-50 border-gray-200 text-gray-600">
                +{game.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors mt-auto"
          onClick={(e) => {
            e.stopPropagation();
            onGameClick(game);
          }}
        >
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default GameCard;
