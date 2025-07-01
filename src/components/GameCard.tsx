
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";
import { Game } from "@/data/games";

interface GameCardProps {
  game: Game;
  onGameClick: (game: Game) => void;
}

const GameCard = ({ game, onGameClick }: GameCardProps) => {
  return (
    <Card 
      className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden cursor-pointer"
      onClick={() => onGameClick(game)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {game.featured && (
          <Badge className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            Featured
          </Badge>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="bg-white/90 text-slate-900 hover:bg-white">
            View Details
          </Button>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
              {game.title}
            </CardTitle>
            <Badge variant="secondary" className="mt-2 bg-purple-100 text-purple-700">
              {game.category}
            </Badge>
          </div>
        </div>
        <CardDescription className="text-gray-600 mt-2">
          {game.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-800 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {game.technologies.map(tech => (
              <Badge key={tech} variant="outline" className="text-xs bg-gray-50">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
          <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            <Play className="h-4 w-4 mr-1" />
            Demo
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-gray-50">
            <Github className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-gray-50">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
