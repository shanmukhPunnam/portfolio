
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Download, GamepadIcon, Code, Sparkles, ArrowRight, Calendar, Trophy, Users, Star } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Animated taglines
  const taglines = [
    "Creating immersive gaming experiences with cutting-edge technology",
    "Turning creative visions into interactive realities",
    "Building the future of gaming, one line of code at a time",
    "Crafting worlds where imagination becomes playable reality"
  ];

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

  // Typing animation effect
  useEffect(() => {
    const currentTagline = taglines[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === currentTagline) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else {
          setCurrentText(currentTagline.substring(0, currentText.length + 1));
        }
      } else {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        } else {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, taglines]);

  const scrollToGames = () => {
    try {
      const gamesSection = document.getElementById('games');
      if (gamesSection) {
        gamesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error scrolling to games section:', error);
    }
  };

  const downloadResume = () => {
    try {
      const link = document.createElement('a');
      link.href = '/assets/ShanmukaJagadeesh_Resume.pdf';
      link.download = 'ShanmukaJagadeesh_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Reduced intensity background animations */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Animated gradient orbs with reduced opacity */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-cyan-400/10 rounded-full blur-3xl animate-float"
          style={{
            left: `${20 + mousePosition.x * 0.01}%`,
            top: `${10 + mousePosition.y * 0.01}%`,
            animationDelay: '0s',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-600/8 via-purple-500/8 to-pink-400/8 rounded-full blur-3xl animate-float"
          style={{
            right: `${15 + mousePosition.x * 0.015}%`,
            bottom: `${20 + mousePosition.y * 0.015}%`,
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/6 via-blue-400/6 to-purple-500/6 rounded-full blur-3xl animate-float"
          style={{
            left: `${60 + mousePosition.x * 0.008}%`,
            top: `${60 + mousePosition.y * 0.008}%`,
            animationDelay: '4s',
          }}
        />

        {/* Subtle flowing light streaks */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-flow-right" />
          <div className="absolute top-3/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-cyan-400/20 to-transparent animate-flow-left" />
        </div>

        {/* Grid pattern overlay with reduced opacity */}
        <div 
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
          }}
        />
      </div>

      {/* Reduced floating tech icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <GamepadIcon className="absolute top-32 left-1/4 w-5 h-5 text-purple-400/30 animate-float-slow hidden lg:block" style={{ animationDelay: '0s' }} />
        <Code className="absolute top-48 right-1/3 w-4 h-4 text-blue-400/30 animate-float-slow hidden lg:block" style={{ animationDelay: '1.5s' }} />
        <Sparkles className="absolute bottom-48 left-1/3 w-6 h-6 text-cyan-400/30 animate-float-slow hidden lg:block" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left content */}
        <div className="flex-1 max-w-3xl text-center lg:text-left mb-8 lg:mb-0">
          {/* Hero badge - improved mobile alignment */}
          <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6 sm:mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-300 font-medium">Available for new projects</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="block text-white mb-1 sm:mb-2">Unity Game</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          {/* Animated Subtitle */}
          <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed animate-fade-in-up h-12 sm:h-16 flex items-center justify-center lg:justify-start" style={{ animationDelay: '0.4s' }}>
            <span className="relative px-2 sm:px-0">
              {currentText}
              <span className="animate-pulse text-cyan-400">|</span>
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center animate-fade-in-up mb-8 sm:mb-12" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              onClick={scrollToGames}
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 border-0 w-full sm:w-auto"
            >
              <GamepadIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
              <span className="text-sm sm:text-base">View My Games</span>
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={downloadResume}
              className="group border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:text-cyan-300 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 bg-transparent backdrop-blur-sm w-full sm:w-auto"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
              <span className="text-sm sm:text-base">Download Resume</span>
            </Button>
          </div>

          {/* Enhanced stats with icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center group">
              <div className="relative">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mr-2" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text transition-transform group-hover:scale-110">
                    8
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mr-2" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text transition-transform group-hover:scale-110">
                    50+
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Projects Delivered</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 mr-2" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text transition-transform group-hover:scale-110">
                    15+
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Team Members Led</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right content - Profile image */}
        <div className="flex-shrink-0 animate-fade-in-up mt-6 lg:mt-0" style={{ animationDelay: '0.3s' }}>
          <div className="relative group">
            {/* Animated glow rings */}
            <div className="absolute -inset-6 sm:-inset-8 rounded-full opacity-20 sm:opacity-30 blur-2xl bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-spin-slow" />
            <div className="absolute -inset-3 sm:-inset-4 rounded-full opacity-30 sm:opacity-50 blur-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 animate-spin-reverse-slow" />
            
            {/* Profile container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-cyan-400/20 rounded-full" />
              <img 
                src="/lovable-uploads/6da09970-af62-4896-a766-e3213dca4258.png" 
                alt="Shanmuka Jagadeesh - Unity Game Developer" 
                className="w-full h-full object-cover rounded-full relative z-10 transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  console.warn('Profile image failed to load, using fallback');
                  const target = e.target as HTMLImageElement;
                  target.src = "/assets/Images/Profile/ProfilePicture.png";
                  target.onerror = () => {
                    // If fallback also fails, hide the image gracefully
                    target.style.opacity = '0';
                  };
                }}
                onLoad={() => {
                  console.log('Profile image loaded successfully');
                }}
              />
            </div>

            {/* Floating elements around profile */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator - improved mobile positioning */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button 
          onClick={scrollToGames}
          className="flex flex-col items-center gap-1 sm:gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-lg p-2"
          aria-label="Scroll to explore games section"
        >
          <span className="text-xs sm:text-sm">Scroll to explore</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full p-1 flex items-start">
            <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mx-auto animate-scroll-indicator" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
