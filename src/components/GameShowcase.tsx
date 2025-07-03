
import React, { useState } from 'react';
import GameModal from './GameModal';
import GameFilters from './GameFilters';
import GameCard from './GameCard';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { games, Game } from '@/data/games';

const GameShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredGames = games.filter(game => {
    const categoryMatch = selectedCategory === "All" || game.category === selectedCategory;
    return categoryMatch;
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
    <section id="games" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Game Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my collection of games built with Unity, showcasing various genres and technologies
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fadeUp" delay={0.2}>
          <GameFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredGames.map((game, index) => (
            <ScrollAnimationWrapper
              key={game.id}
              animation="fadeUp"
              delay={0.1 * (index % 4)}
            >
              <GameCard
                game={game}
                onGameClick={handleGameClick}
              />
            </ScrollAnimationWrapper>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <ScrollAnimationWrapper animation="fadeIn" delay={0.3}>
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No games found for the selected filters.</p>
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
