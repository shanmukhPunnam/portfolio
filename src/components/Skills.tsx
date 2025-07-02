
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { Code, Gamepad2, Smartphone, Monitor, Wrench, Globe, Shield, Cpu, Database, GitBranch, Mic, Coins, Bot, Palette, Languages, Settings, Package, Target, Headphones, Zap, Puzzle, TestTube } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Development Skills",
      skills: [
        { name: "Unity3D", icon: <Package className="h-6 w-6" /> },
        { name: "Unreal", icon: <Gamepad2 className="h-6 w-6" /> },
        { name: "C#", icon: <Code className="h-6 w-6" /> },
        { name: "Multiplayer", icon: <Globe className="h-6 w-6" /> },
        { name: "Shaders", icon: <Zap className="h-6 w-6" /> },
        { name: "Particles", icon: <Target className="h-6 w-6" /> },
        { name: "Optimization", icon: <Cpu className="h-6 w-6" /> },
        { name: "AI Agents", icon: <Bot className="h-6 w-6" /> },
        { name: "UI/UX", icon: <Palette className="h-6 w-6" /> },
        { name: "Localization", icon: <Languages className="h-6 w-6" /> },
        { name: "Editor Tools", icon: <Settings className="h-6 w-6" /> },
        { name: "Scriptables", icon: <Code className="h-6 w-6" /> },
        { name: "Addressables", icon: <Package className="h-6 w-6" /> }
      ]
    },
    {
      title: "Tools & Services",
      skills: [
        { name: "Photon", icon: <Globe className="h-6 w-6" /> },
        { name: "Firebase", icon: <Database className="h-6 w-6" /> },
        { name: "Unity Services", icon: <Wrench className="h-6 w-6" /> },
        { name: "Git", icon: <GitBranch className="h-6 w-6" /> },
        { name: "Voice Chat", icon: <Mic className="h-6 w-6" /> },
        { name: "LiveOps", icon: <Shield className="h-6 w-6" /> },
        { name: "Crypto", icon: <Coins className="h-6 w-6" /> },
        { name: "NFT", icon: <Coins className="h-6 w-6" /> }
      ]
    },
    {
      title: "Target Platforms",
      skills: [
        { name: "Android", icon: <Smartphone className="h-6 w-6" /> },
        { name: "iOS", icon: <Smartphone className="h-6 w-6" /> },
        { name: "WebGL", icon: <Globe className="h-6 w-6" /> },
        { name: "PC", icon: <Monitor className="h-6 w-6" /> },
        { name: "AR", icon: <Target className="h-6 w-6" /> },
        { name: "VR", icon: <Headphones className="h-6 w-6" /> }
      ]
    },
    {
      title: "Project Types",
      skills: [
        { name: "Shooter", icon: <Target className="h-6 w-6" /> },
        { name: "VR Sim", icon: <Headphones className="h-6 w-6" /> },
        { name: "Editor Tool", icon: <Settings className="h-6 w-6" /> },
        { name: "Casual Game", icon: <Gamepad2 className="h-6 w-6" /> },
        { name: "AI Combat", icon: <Bot className="h-6 w-6" /> },
        { name: "Puzzle Gen", icon: <Puzzle className="h-6 w-6" /> },
        { name: "Perf Test", icon: <TestTube className="h-6 w-6" /> },
        { name: "Simulator", icon: <Monitor className="h-6 w-6" /> }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Core Components & Skills
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive expertise across game development technologies and platforms
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollAnimationWrapper
              key={categoryIndex}
              animation={categoryIndex % 2 === 0 ? "slideLeft" : "slideRight"}
              delay={0.1 * categoryIndex}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-center mb-8 border-b border-gray-700 pb-4">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <ScrollAnimationWrapper
                      key={skillIndex}
                      animation="scale"
                      delay={0.05 * skillIndex + 0.2 * categoryIndex}
                    >
                      <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm">
                        <CardContent className="p-4 flex flex-col items-center text-center space-y-3">
                          <div className="text-purple-400 hover:text-purple-300 transition-colors">
                            {skill.icon}
                          </div>
                          <span className="text-gray-100 font-medium text-sm">
                            {skill.name}
                          </span>
                        </CardContent>
                      </Card>
                    </ScrollAnimationWrapper>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
