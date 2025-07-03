import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Development Skills",
      skills: [
        { name: "Unity3D", icon: <img src="/assets/Images/skills/unity.svg" alt="Unity3D" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Unreal", icon: <img src="/assets/Images/skills/unreal.svg" alt="Unreal" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "C#", icon: <img src="/assets/Images/skills/csharp.svg" alt="C#" className="h-8 w-8" /> },
        { name: "Multiplayer", icon: <img src="/assets/Images/skills/multiplayer.svg" alt="Multiplayer" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Shaders", icon: <img src="/assets/Images/skills/shader.svg" alt="Shaders" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Particles", icon: <img src="/assets/Images/skills/particles.svg" alt="Particles" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Optimization", icon: <img src="/assets/Images/skills/performance.svg" alt="Optimization" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "AI Agents", icon: <img src="/assets/Images/skills/ai.svg" alt="AI Agents" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "UI/UX", icon: <img src="/assets/Images/skills/uiux.svg" alt="UI/UX" className="h-8 w-8" /> },
        { name: "Localization", icon: <img src="/assets/Images/skills/localization.svg" alt="Localization" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Editor Tools", icon: <img src="/assets/Images/skills/editor.svg" alt="Editor Tools" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Scriptables", icon: <img src="/assets/Images/skills/scriptable.png" alt="Scriptables" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Addressables", icon: <img src="/assets/Images/skills/cloud.svg" alt="Addressables" className="h-8 w-8 filter brightness-0 invert" /> }
      ]
    },
    {
      title: "Tools & Services",
      skills: [
        { name: "Photon", icon: <img src="/assets/Images/skills/photon.png" alt="Photon" className="h-8 w-8" /> },
        { name: "Firebase", icon: <img src="/assets/Images/skills/firebase.svg" alt="Firebase" className="h-8 w-8" /> },
        { name: "Unity Services", icon: <img src="/assets/Images/skills/cloud.svg" alt="Unity Services" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Git", icon: <img src="/assets/Images/skills/github.svg" alt="Git" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Voice Chat", icon: <img src="/assets/Images/skills/voice.svg" alt="Voice Chat" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "LiveOps", icon: <img src="/assets/Images/skills/liveOps.svg" alt="LiveOps" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Crypto", icon: <img src="/assets/Images/skills/crypto.svg" alt="Crypto" className="h-8 w-8" /> },
        { name: "NFT", icon: <img src="/assets/Images/skills/nft.svg" alt="NFT" className="h-8 w-8" /> }
      ]
    },
    {
      title: "Target Platforms",
      skills: [
        { name: "Android", icon: <img src="/assets/Images/skills/android.svg" alt="Android" className="h-8 w-8" /> },
        { name: "iOS", icon: <img src="/assets/Images/skills/apple.svg" alt="iOS" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "WebGL", icon: <img src="/assets/Images/skills/webgl.svg" alt="WebGL" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "PC", icon: <img src="/assets/Images/skills/pc.svg" alt="PC" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "AR", icon: <img src="/assets/Images/skills/ar.svg" alt="AR" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "VR", icon: <img src="/assets/Images/skills/vr.svg" alt="VR" className="h-8 w-8 filter brightness-0 invert" /> }
      ]
    },
    {
      title: "Project Types",
      skills: [
        { name: "Shooter", icon: <img src="/assets/Images/skills/shooter.svg" alt="Shooter" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "VR Sim", icon: <img src="/assets/Images/skills/oculus.svg" alt="VR Sim" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Editor Tool", icon: <img src="/assets/Images/skills/editor.svg" alt="Editor Tool" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Casual Game", icon: <img src="/assets/Images/skills/casual.webp" alt="Casual Game" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "AI Combat", icon: <img src="/assets/Images/skills/ai.svg" alt="AI Combat" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Puzzle Gen", icon: <img src="/assets/Images/skills/puzzle.svg" alt="Puzzle Gen" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Perf Test", icon: <img src="/assets/Images/skills/performance.svg" alt="Perf Test" className="h-8 w-8 filter brightness-0 invert" /> },
        { name: "Simulator", icon: <img src="/assets/Images/skills/simulator.svg" alt="Simulator" className="h-8 w-8 filter brightness-0 invert" /> }
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
