
import { Game } from '../games';

export const zombieFever: Game = {
  id: 2,
  title: "Zombie Fever",
  description: "Shoot, survive, and escape the zombie apocalypse!",
  longDescription: "Step into a post-apocalyptic world overrun by the undead. Armed with powerful weapons and quick reflexes, fight your way through zombie-infested streets to reach the last research center. Survive intense shootouts, use power-ups, rescue hostages, and stay alive in King of the Hill or Horde modes. Shoot, run, and survive—this is humanity's last stand. As the sole Unity developer, I spearheaded the entire game lifecycle, implemented core systems, optimized performance for Android, and managed Play Store release and updates.",
  image: "/assets/Images/Projects/ZombieFever/ProjectIcon.jpg",
  category: "Shooter",
  technologies: ["Unity 3D", "C#", "Scriptable Objects", "Google Play Services"],
  links: {
    demo: "",
    github: "",
    store: "https://play.google.com/store/apps/details?id=com.supercodegames.android.zombiefever",
    youtube: "https://www.youtube.com/embed/W5DrjB4Hskw"
  },
  featured: true,
  developmentTime: "6 months",
  teamSize: "Solo Developer",
  downloads: "50K+",
  rating: "4.6/5",
  features: [
    "Dynamic zombie AI with pursuit and attack behaviors",
    "Multiple game modes: Horde, Rescue, King of the Hill",
    "Weapon upgrades, power-ups, and health kits",
    "Optimized performance for low-end Android devices",
    "Responsive touch controls and interactive HUD",
    "Google Play publishing and compliance"
  ],
  screenshots: [
    "/assets/Images/Projects/ZombieFever/Screenshot_1.jpg",
    "/assets/Images/Projects/ZombieFever/Screenshot_2.jpg",
    "/assets/Images/Projects/ZombieFever/Screenshot_3.jpg", 
    "/assets/Images/Projects/ZombieFever/Screenshot_4.jpg",
    "/assets/Images/Projects/ZombieFever/Screenshot_5.jpg",
    "/assets/Images/Projects/ZombieFever/Screenshot_6.jpg"
  ],
  contributions: [
    {
      id: "zombie-ai",
      module: "AI System",
      name: "Dynamic Zombie AI Behaviors",
      shortDescription: "Developed intelligent zombie AI with pursuit, attack, and crowd behaviors.",
      fullDescription: "Created a comprehensive AI system for zombie enemies featuring state-based behavior trees, pathfinding optimization, and dynamic difficulty scaling. The AI includes pursuit mechanics, attack patterns, crowd formation, and performance optimization for handling large numbers of entities simultaneously on mobile devices.",
      bulletPoints: [
        "Implemented state-based behavior trees for zombie decision making",
        "Created dynamic pathfinding with obstacle avoidance",
        "Developed crowd AI for realistic zombie horde behaviors",
        "Optimized AI calculations for mobile performance",
        "Built adaptive difficulty scaling based on player performance"
      ]
    },
    {
      id: "zombie-game-modes",
      module: "Game Systems",
      name: "Multiple Game Mode Implementation",
      shortDescription: "Designed and implemented Horde, Rescue, and King of the Hill game modes.",
      fullDescription: "Architected a modular game mode system supporting multiple gameplay variants. Each mode features unique objectives, spawn patterns, and win conditions while sharing core gameplay mechanics. Implemented dynamic difficulty progression and balanced scoring systems across all modes.",
      bulletPoints: [
        "Created modular game mode architecture for easy expansion",
        "Implemented unique objectives and win conditions per mode",
        "Designed dynamic spawn systems for each game mode",
        "Built progression and scoring systems",
        "Optimized mode transitions and state management"
      ]
    },
    {
      id: "zombie-mobile-optimization",
      module: "Performance System",
      name: "Mobile Performance Optimization",
      shortDescription: "Optimized game performance for low-end Android devices while maintaining quality.",
      fullDescription: "Implemented comprehensive performance optimization strategies including object pooling, LOD systems, texture compression, and memory management. Achieved smooth 60fps gameplay on devices with 2GB RAM while maintaining visual quality and responsive controls.",
      bulletPoints: [
        "Implemented object pooling for enemies and projectiles",
        "Created LOD system for distant objects and effects",
        "Optimized texture compression and memory usage",
        "Built dynamic quality scaling based on device performance",
        "Achieved 60fps on low-end Android devices"
      ]
    }
  ]
};
