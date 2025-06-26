
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Gamepad2, Palette, Database, Zap, Users } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Unity 3D/2D", level: 95, icon: "🎮" },
    { name: "C# Programming", level: 90, icon: "💻" },
    { name: "Game Design", level: 85, icon: "🎨" },
    { name: "3D Modeling", level: 75, icon: "🧊" },
    { name: "Shader Programming", level: 80, icon: "✨" },
    { name: "Mobile Development", level: 85, icon: "📱" },
    { name: "VR/AR Development", level: 70, icon: "🥽" },
    { name: "Multiplayer/Networking", level: 75, icon: "🌐" }
  ];

  const tools = [
    { name: "Unity", category: "Game Engine" },
    { name: "Visual Studio", category: "IDE" },
    { name: "Blender", category: "3D Modeling" },
    { name: "Photoshop", category: "Graphics" },
    { name: "Git", category: "Version Control" },
    { name: "Firebase", category: "Backend" },
    { name: "Photon", category: "Networking" },
    { name: "Addressables", category: "Asset Management" }
  ];

  const specializations = [
    {
      icon: <Code className="h-8 w-8 text-purple-600" />,
      title: "Game Programming",
      description: "Expert in C# and Unity scripting, gameplay mechanics, and system architecture"
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-blue-600" />,
      title: "Game Design",
      description: "Creating engaging gameplay experiences with balanced mechanics and user flow"
    },
    {
      icon: <Palette className="h-8 w-8 text-green-600" />,
      title: "Visual Effects",
      description: "Shader programming, particle systems, and stunning visual effects"
    },
    {
      icon: <Database className="h-8 w-8 text-orange-600" />,
      title: "Performance Optimization",
      description: "Memory management, frame rate optimization, and efficient asset handling"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Cross-Platform",
      description: "Deploying games across PC, mobile, console, and VR platforms"
    },
    {
      icon: <Users className="h-8 w-8 text-pink-600" />,
      title: "Team Collaboration",
      description: "Working with artists, designers, and other developers in agile environments"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional gaming experiences
          </p>
        </div>

        {/* Specializations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specializations.map((spec, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-gray-50 w-fit">
                  {spec.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900">
                  {spec.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {spec.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Technical Proficiency
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-slate-900">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-3 bg-gray-200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h4 className="font-semibold text-slate-900 mb-1">{tool.name}</h4>
                      <p className="text-sm text-gray-600">{tool.category}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
