
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Download, GamepadIcon, Code, Sparkles, ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Dynamic animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-cyan-400/20 rounded-full blur-3xl animate-float"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
            animationDelay: '0s',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-600/15 via-purple-500/15 to-pink-400/15 rounded-full blur-3xl animate-float"
          style={{
            right: `${15 + mousePosition.x * 0.03}%`,
            bottom: `${20 + mousePosition.y * 0.03}%`,
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/10 via-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-float"
          style={{
            left: `${60 + mousePosition.x * 0.015}%`,
            top: `${60 + mousePosition.y * 0.015}%`,
            animationDelay: '4s',
          }}
        />

        {/* Flowing light streaks */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-flow-right" />
          <div className="absolute top-3/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-cyan-400/30 to-transparent animate-flow-left" />
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-400/20 to-transparent animate-flow-down" />
        </div>

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <GamepadIcon className="absolute top-32 left-1/4 w-6 h-6 text-purple-400/20 animate-float-slow" style={{ animationDelay: '0s' }} />
        <Code className="absolute top-48 right-1/3 w-5 h-5 text-blue-400/20 animate-float-slow" style={{ animationDelay: '1.5s' }} />
        <Sparkles className="absolute bottom-48 left-1/3 w-7 h-7 text-cyan-400/20 animate-float-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute top-64 right-1/4 w-4 h-4 bg-pink-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-64 left-1/5 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left content */}
        <div className="flex-1 max-w-3xl text-center lg:text-left mb-12 lg:mb-0">
          {/* Hero badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300 font-medium">Available for new projects</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl lg:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="block text-white mb-2">Unity Game</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Creating immersive gaming experiences with cutting-edge technology.
            <span className="block mt-2 text-gray-400">Turning creative visions into interactive realities.</span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              onClick={scrollToGames}
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 border-0"
            >
              <GamepadIcon className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              View My Games
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={downloadResume}
              className="group border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:text-cyan-300 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 bg-transparent backdrop-blur-sm"
            >
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Download Resume
            </Button>
          </div>

          {/* Social proof stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">6+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-gray-400">Team Members Led</div>
            </div>
          </div>
        </div>

        {/* Right content - Profile image */}
        <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative group">
            {/* Animated glow rings */}
            <div className="absolute -inset-8 rounded-full opacity-30 blur-2xl bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-spin-slow" />
            <div className="absolute -inset-4 rounded-full opacity-50 blur-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 animate-spin-reverse-slow" />
            
            {/* Profile container */}
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-cyan-400/20 rounded-full" />
              <img 
                src="/lovable-uploads/6da09970-af62-4896-a766-e3213dca4258.png" 
                alt="Shanmuka Jagadeesh - Unity Game Developer" 
                className="w-full h-full object-cover rounded-full relative z-10 transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Floating elements around profile */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={scrollToGames}>
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1 flex items-start">
            <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
