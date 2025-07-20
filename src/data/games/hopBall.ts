
import { Game } from '../games';

export const hopBall: Game = {
  id: 11,
  title: "Hop Ball",
  description: "Endless arcade game with bouncing rhythm-based mechanics.",
  longDescription: "Control a bouncing ball as it hops across pillars in this visually vibrant and highly addictive arcade game. Swipe to guide the ball, maintain momentum, collect skins, and set high scores across dynamic and ever-changing environments. Developed full game loop, endless procedural generation, collectible skins, and integrated IAP and ads for a polished mobile experience.",
  image: "/assets/Images/Projects/HopBall/ProjectIcon.jpg",
  category: "Arcade",
  technologies: ["Unity 3D", "C#", "Unity Ads", "Scriptable Objects"],
  links: {
    demo: "",
    github: "",
    store: "https://play.google.com/store/apps/details?id=com.example.alphareturns",
    youtube: ""
  },
  featured: false,
  developmentTime: "4 months",
  teamSize: "Solo Developer",
  downloads: "15K+",
  rating: "4.5/5",
  features: [
    "Physics-based bouncing and swipe controls",
    "Endless procedural level generation",
    "Collectible ball and pillar skins",
    "Score combos, multipliers, and unlocks",
    "IAP and rewarded ads integration",
    "Optimized for casual play and mobile performance"
  ],
  screenshots: [
    "/assets/Images/Projects/HopBall/Screenshot_1.jpg",
    "/assets/Images/Projects/HopBall/Screenshot_2.jpg",
    "/assets/Images/Projects/HopBall/Screenshot_3.jpg",
    "/assets/Images/Projects/HopBall/Screenshot_4.jpg",
    "/assets/Images/Projects/HopBall/Screenshot_5.jpg",
    "/assets/Images/Projects/HopBall/Screenshot_6.jpg",
    "/assets/Images/Projects/HopBall/Screenshot_7.jpg",
    "/assets/Images/Projects/HopBall/Screenshot_8.jpg"
  ],
  contributions: [
    {
      id: "hopball-physics",
      module: "Physics System",
      name: "Bouncing Ball Physics and Controls",
      shortDescription: "Developed realistic ball physics with responsive swipe controls for addictive gameplay.",
      fullDescription: "Created a physics system that accurately simulates ball bouncing mechanics with momentum conservation and realistic collision responses. Implemented intuitive swipe controls that provide precise ball guidance while maintaining challenging gameplay.",
      bulletPoints: [
        "Developed realistic ball bouncing and momentum physics",
        "Implemented precise swipe-based control system",
        "Created responsive collision detection and reactions",
        "Built momentum conservation and trajectory prediction",
        "Optimized physics calculations for smooth mobile performance"
      ]
    },
    {
      id: "hopball-procedural",
      module: "Level Generation",
      name: "Endless Procedural Generation",
      shortDescription: "Architected procedural level generation system for infinite replayability.",
      fullDescription: "Designed and implemented a sophisticated procedural generation system that creates endless, varied level layouts while maintaining consistent difficulty progression and engaging gameplay patterns.",
      bulletPoints: [
        "Created algorithmic level generation for endless gameplay",
        "Implemented difficulty progression and balancing systems",
        "Designed varied pillar patterns and obstacle placement",
        "Built level validation and quality assurance systems",
        "Optimized generation performance for real-time creation"
      ]
    },
    {
      id: "hopball-progression",
      module: "Monetization",
      name: "Skin Collection and Monetization",
      shortDescription: "Developed collectible skin system with balanced monetization and progression rewards.",
      fullDescription: "Created an engaging skin collection system featuring unlockable balls and pillars through gameplay achievements and optional purchases. Designed balanced monetization that enhances rather than disrupts the core gameplay experience.",
      bulletPoints: [
        "Designed collectible ball and pillar skin systems",
        "Implemented achievement-based unlock progression",
        "Created balanced free-to-play monetization model",
        "Built reward systems and daily challenges",
        "Integrated analytics for monetization optimization"
      ]
    }
  ]
};
