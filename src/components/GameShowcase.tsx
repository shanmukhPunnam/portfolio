
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import GameModal from './GameModal';
import GameFilters from './GameFilters';
import GameCard from './GameCard';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { games, Game } from '@/data/games';

const GameShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFeatured, setShowFeatured] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredGames = games.filter(game => {
    const categoryMatch = selectedCategory === "All" || game.category === selectedCategory;
    const featuredMatch = !showFeatured || game.featured;
    return categoryMatch && featuredMatch;
  });

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollAnimationWrapper animation="fadeUp">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Game <span className="text-blue-600">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore my collection of interactive games and applications built with cutting-edge technologies
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fadeUp" delay={0.2}>
          <GameFilters
            selectedCategory={selectedCategory}
            showFeatured={showFeatured}
            onCategoryChange={setSelectedCategory}
            onFeaturedToggle={() => setShowFeatured(!showFeatured)}
          />
        </ScrollAnimationWrapper>

        {/* Results Summary */}
        <ScrollAnimationWrapper animation="fadeUp" delay={0.3}>
          <div className="mb-8">
            <p className="text-gray-600 text-center">
              Showing <span className="font-semibold text-gray-900">{filteredGames.length}</span> {filteredGames.length === 1 ? 'project' : 'projects'}
              {selectedCategory !== "All" && <span> in <span className="font-semibold text-blue-600">{selectedCategory}</span></span>}
              {showFeatured && <span> · <span className="font-semibold text-amber-600">Featured only</span></span>}
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game, index) => (
            <ScrollAnimationWrapper
              key={game.id}
              animation="fadeUp"
              delay={0.1 * (index % 8)}
            >
              <GameCard
                game={game}
                onGameClick={handleGameClick}
              />
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Empty State */}
        {filteredGames.length === 0 && (
          <ScrollAnimationWrapper animation="fadeIn" delay={0.3}>
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="text-gray-400 text-3xl">🎮</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No games found</h3>
              <p className="text-gray-500 text-lg max-w-md mx-auto">
                Try adjusting your filters to discover more amazing projects.
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategory("All");
                  setShowFeatured(false);
                }}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Clear Filters
              </Button>
            </div>
          </ScrollAnimationWrapper>
        )}

        <GameModal 
          game={selectedGame} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      </div>
    </section>
  );
};

export default GameShowcase;
