import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, GamepadIcon, Code, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToGames = () => {
    const gamesSection = document.getElementById('games');
    if (gamesSection) {
      gamesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/ShanmukaJagadeesh_Resume.pdf';
    link.download = 'ShanmukaJagadeesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <GamepadIcon className="absolute top-32 left-1/4 w-8 h-8 text-purple-400/30 animate-bounce" style={{ animationDelay: '0s' }} />
        <Code className="absolute top-48 right-1/3 w-6 h-6 text-blue-400/30 animate-bounce" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-48 left-1/3 w-7 h-7 text-cyan-400/30 animate-bounce" style={{ animationDelay: '2s' }} />
      </div>

      {/* HERO ROW */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[70vh] w-full px-6 pt-20 md:pt-32">
        {/* LEFT: Text and Buttons */}
        <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Unity Game
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Creating immersive gaming experiences with cutting-edge technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              onClick={scrollToGames}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <GamepadIcon className="mr-2 h-5 w-5" />
              View My Games
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={downloadResume}
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* RIGHT: Profile Photo */}
        <div className="flex-1 w-full flex justify-center md:justify-end mt-12 md:mt-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="relative group">
            {/* Glowing gradient ring */}
            <div className="absolute -inset-2 md:-inset-4 rounded-full opacity-70 blur-lg bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 group-hover:opacity-100 transition"></div>
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-transparent p-1 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 relative z-10">
              <img 
                src="/lovable-uploads/6da09970-af62-4896-a766-e3213dca4258.png" 
                alt="Unity Game Developer" 
                className="w-full h-full object-cover rounded-full bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* STATS BELOW HERO */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-12 px-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">6+</div>
          <div className="text-gray-400">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">15+</div>
          <div className="text-gray-400">Projects Delivered</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">15+</div>
          <div className="text-gray-400">Team Members Led</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1 flex items-start">
          <div className="w-1 h-3 bg-white/60 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
