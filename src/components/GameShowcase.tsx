
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Filter } from "lucide-react";

const games = [
  {
    id: 1,
    title: "Mystic Adventure",
    description: "An epic fantasy RPG with stunning visuals and immersive gameplay mechanics.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
    category: "RPG",
    technologies: ["Unity 3D", "C#", "Photon", "Firebase"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: true
  },
  {
    id: 2,
    title: "Space Shooter Elite",
    description: "Fast-paced arcade shooter with procedural generation and multiplayer support.",
    image: "https://images.unsplash.com/photo-1614732414444-096040ec8c49?w=600&h=400&fit=crop",
    category: "Action",
    technologies: ["Unity 2D", "C#", "Mirror", "DOTween"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: false
  },
  {
    id: 3,
    title: "Puzzle Master",
    description: "Mind-bending puzzle game with over 100 levels and unique mechanics.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop",
    category: "Puzzle",
    technologies: ["Unity 2D", "C#", "Analytics", "Addressables"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: true
  },
  {
    id: 4,
    title: "Racing Legends",
    description: "Realistic racing simulator with advanced physics and customization.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
    category: "Racing",
    technologies: ["Unity 3D", "C#", "ProBuilder", "Cinemachine"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: false
  },
  {
    id: 5,
    title: "VR Explorer",
    description: "Immersive VR experience showcasing architectural visualization.",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop",
    category: "VR",
    technologies: ["Unity XR", "C#", "Oculus SDK", "SteamVR"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: true
  },
  {
    id: 6,
    title: "Mobile Casual",
    description: "Addictive mobile game with simple mechanics and beautiful art.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&h=400&fit=crop",
    category: "Mobile",
    technologies: ["Unity 2D", "C#", "Unity Ads", "Google Play"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: false
  }
];

const categories = ["All", "RPG", "Action", "Puzzle", "Racing", "VR", "Mobile"];

const GameShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFeatured, setShowFeatured] = useState(false);

  const filteredGames = games.filter(game => {
    const categoryMatch = selectedCategory === "All" || game.category === selectedCategory;
    const featuredMatch = !showFeatured || game.featured;
    return categoryMatch && featuredMatch;
  });

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Game Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my collection of games built with Unity, showcasing various genres and technologies
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700 font-medium">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-200 ${
                  selectedCategory === category 
                    ? "bg-purple-600 hover:bg-purple-700" 
                    : "hover:bg-purple-50 hover:border-purple-300"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
          <Button
            variant={showFeatured ? "default" : "outline"}
            size="sm"
            onClick={() => setShowFeatured(!showFeatured)}
            className={`ml-4 transition-all duration-200 ${
              showFeatured 
                ? "bg-cyan-600 hover:bg-cyan-700" 
                : "hover:bg-cyan-50 hover:border-cyan-300"
            }`}
          >
            Featured Only
          </Button>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map(game => (
            <Card key={game.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
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
                
                <div className="flex gap-2">
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
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No games found for the selected filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GameShowcase;
