
import React, { useState } from 'react';
import GameModal from './GameModal';
import GameFilters from './GameFilters';
import GameCard from './GameCard';
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

        <GameFilters
          selectedCategory={selectedCategory}
          showFeatured={showFeatured}
          onCategoryChange={setSelectedCategory}
          onFeaturedToggle={() => setShowFeatured(!showFeatured)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map(game => (
            <GameCard
              key={game.id}
              game={game}
              onGameClick={handleGameClick}
            />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No games found for the selected filters.</p>
          </div>
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
