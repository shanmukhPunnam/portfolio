
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, GamepadIcon, Code, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <GamepadIcon className="absolute top-32 left-1/4 w-8 h-8 text-purple-400/30 animate-bounce" style={{ animationDelay: '0s' }} />
        <Code className="absolute top-48 right-1/3 w-6 h-6 text-blue-400/30 animate-bounce" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-48 left-1/3 w-7 h-7 text-cyan-400/30 animate-bounce" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 p-1 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              <img 
                src="/lovable-uploads/6da09970-af62-4896-a766-e3213dca4258.png" 
                alt="Unity Game Developer" 
                className="w-full h-full object-cover rounded-full bg-white"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 rounded-full opacity-30 blur animate-pulse"></div>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Unity Game
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Creating immersive gaming experiences with cutting-edge technology
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <GamepadIcon className="mr-2 h-5 w-5" />
            View My Games
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1 h-3 bg-white/60 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
