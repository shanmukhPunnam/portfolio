
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Coffee } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "Senior Unity Developer",
      company: "GameStudio Pro",
      description: "Leading a team of 8 developers on AAA mobile games, implementing advanced rendering techniques and optimization strategies."
    },
    {
      year: "2022",
      title: "Unity Developer",
      company: "Indie Games Collective",
      description: "Developed and published 5 successful indie games, focusing on innovative gameplay mechanics and cross-platform compatibility."
    },
    {
      year: "2020",
      title: "Game Developer",
      company: "StartUp Gaming",
      description: "Created prototypes and MVPs for various game concepts, specializing in rapid development and user testing integration."
    },
    {
      year: "2019",
      title: "Junior Developer",
      company: "Creative Solutions",
      description: "Started professional game development journey, learning Unity fundamentals and contributing to educational games."
    }
  ];

  const achievements = [
    "🏆 Unity Certified Expert",
    "🎮 20+ Published Games",
    "⭐ 4.8/5 Average App Store Rating",
    "📱 1M+ Total Downloads",
    "🥇 Indie Game Festival Winner 2023",
    "🎯 Google Play Featured Developer"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate game developer with a mission to create memorable gaming experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    JD
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">John Developer</h3>
                    <p className="text-gray-300">Unity Game Developer</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        San Francisco, CA
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        5+ Years Experience
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate Unity game developer with over 5 years of experience creating 
                  engaging games across multiple platforms. My journey started with a love for 
                  both playing and creating games, which led me to specialize in Unity development, 
                  game design, and interactive experiences.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new game mechanics, experimenting 
                  with emerging technologies like VR/AR, or contributing to the game development 
                  community through tutorials and open-source projects.
                </p>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Coffee className="h-5 w-5" />
                  Fun Facts
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">500+</div>
                    <div className="text-gray-400 text-sm">Cups of Coffee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">50K+</div>
                    <div className="text-gray-400 text-sm">Lines of Code</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">24/7</div>
                    <div className="text-gray-400 text-sm">Gamer Mode</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">∞</div>
                    <div className="text-gray-400 text-sm">Creativity</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience Timeline & Achievements */}
          <div className="space-y-8">
            {/* Achievements */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Achievements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-white/20 text-white hover:bg-white/30 transition-colors p-2 justify-start"
                    >
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience Timeline */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-6">Experience Timeline</h4>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-purple-400/30 last:border-l-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                      <div className="mb-2">
                        <Badge variant="outline" className="border-purple-400 text-purple-300 mb-2">
                          {item.year}
                        </Badge>
                        <h5 className="font-semibold text-lg">{item.title}</h5>
                        <p className="text-purple-300 text-sm font-medium">{item.company}</p>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
