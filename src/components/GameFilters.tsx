
import React from 'react';
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { categories } from "@/data/games";

interface GameFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const GameFilters = ({ selectedCategory, onCategoryChange }: GameFiltersProps) => {
  return (
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
            onClick={() => onCategoryChange(category)}
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
    </div>
  );
};

export default GameFilters;
