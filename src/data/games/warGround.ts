
import { Game } from '../games';

export const warGround: Game = {
  id: 3,
  title: "War Ground",
  description: "Offline third-person shooting game with dynamic combat.",
  longDescription: "Fast-paced TPS shooter with weapon inventory, missions, smart AI, and offline gameplay. Unlock guns, complete objectives, and fight enemy forces across challenging battlegrounds with responsive mobile controls and stunning visuals. As the sole developer, I built the entire game, including combat systems, inventory logic, AI, in-app purchases, rewarded ads, and publishing pipeline, all optimized for low to mid-range Android devices.",
  image: "/assets/Images/Projects/WarGround/ProjectIcon.jpg",
  category: "Shooter",
  technologies: ["Unity 3D", "C#", "Scriptable Objects", "Google Play Billing"],
  links: {
    demo: "",
    github: "",
    store: "https://play.google.com/store/apps/details?id=com.example.alphareturns",
    youtube: "https://www.youtube.com/embed/lT-4suX00Vs"
  },
  featured: true,
  developmentTime: "7 months",
  teamSize: "Solo Developer",
  downloads: "20K+",
  rating: "4.5/5",
  features: [
    "Immersive third-person shooter gunplay",
    "Smart AI with cover, flanking, and retreat logic",
    "Weapon inventory, unlocks, and upgrades",
    "Rewarded ads and in-app purchases",
    "Responsive mobile UI and controls",
    "Optimized for low to mid-range Android devices"
  ],
  screenshots: [
    "/assets/Images/Projects/WarGround/Screenshot_1.jpg",
    "/assets/Images/Projects/WarGround/Screenshot_2.jpg",
    "/assets/Images/Projects/WarGround/Screenshot_3.jpg", 
    "/assets/Images/Projects/WarGround/Screenshot_4.jpg",
    "/assets/Images/Projects/WarGround/Screenshot_5.jpg",
    "/assets/Images/Projects/WarGround/Screenshot_6.jpg",
    "/assets/Images/Projects/WarGround/Screenshot_7.jpg"
  ],
  contributions: [
    {
      id: "warground-combat",
      module: "Combat System",
      name: "Third-Person Shooter Mechanics",
      shortDescription: "Built immersive TPS combat system with weapon handling and cover mechanics.",
      fullDescription: "Developed a comprehensive third-person shooter combat system featuring realistic weapon physics, cover-based shooting mechanics, and dynamic crosshair systems. Implemented weapon recoil patterns, bullet physics, and hit detection optimized for mobile touch controls.",
      bulletPoints: [
        "Created realistic weapon physics and recoil patterns",
        "Implemented cover-based shooting mechanics",
        "Developed dynamic crosshair and aiming systems",
        "Built responsive mobile touch controls for shooting",
        "Optimized hit detection and bullet physics"
      ]
    },
    {
      id: "warground-ai",
      module: "AI System",
      name: "Smart Enemy AI with Tactical Behaviors",
      shortDescription: "Implemented advanced AI with cover usage, flanking, and tactical decision making.",
      fullDescription: "Created sophisticated enemy AI featuring tactical behaviors including cover seeking, flanking maneuvers, retreat logic, and coordinated team attacks. The AI system adapts to player behavior and provides challenging yet fair combat encounters.",
      bulletPoints: [
        "Developed cover-seeking and tactical positioning AI",
        "Implemented flanking and coordinated attack patterns",
        "Created dynamic retreat and regrouping behaviors",
        "Built adaptive AI difficulty based on player skill",
        "Optimized AI decision trees for mobile performance"
      ]
    },
    {
      id: "warground-inventory",
      module: "Progression System",
      name: "Weapon Inventory and Upgrade System",
      shortDescription: "Designed modular weapon system with unlocks, upgrades, and progression mechanics.",
      fullDescription: "Architected a comprehensive weapon progression system featuring unlockable weapons, upgrade trees, and stat customization. Integrated with monetization systems including rewarded ads and in-app purchases while maintaining balanced gameplay progression.",
      bulletPoints: [
        "Created modular weapon system with upgrade trees",
        "Implemented progression-based weapon unlocks",
        "Designed balanced stat customization system",
        "Integrated monetization with gameplay progression",
        "Built data persistence for player progression"
      ]
    }
  ]
};
