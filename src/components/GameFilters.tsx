
import React from 'react';
import { Button } from "@/components/ui/button";
import { Filter, Star } from "lucide-react";
import { categories } from "@/data/games";

interface GameFiltersProps {
  selectedCategory: string;
  showFeatured: boolean;
  onCategoryChange: (category: string) => void;
  onFeaturedToggle: () => void;
}

const GameFilters = ({ selectedCategory, showFeatured, onCategoryChange, onFeaturedToggle }: GameFiltersProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        {/* Filter Label */}
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-blue-600" />
          <span className="text-gray-900 font-semibold">Filters</span>
        </div>

        {/* Category Filters */}
        <div className="flex flex-1 flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={`transition-all duration-200 rounded-full ${
                selectedCategory === category 
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md" 
                  : "hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Toggle */}
        <div className="flex items-center">
          <Button
            variant={showFeatured ? "default" : "outline"}
            size="sm"
            onClick={onFeaturedToggle}
            className={`transition-all duration-200 rounded-full flex items-center gap-2 ${
              showFeatured 
                ? "bg-amber-600 hover:bg-amber-700 text-white shadow-md" 
                : "hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700"
            }`}
          >
            <Star className={`w-4 h-4 ${showFeatured ? 'fill-current' : ''}`} />
            Featured
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameFilters;
