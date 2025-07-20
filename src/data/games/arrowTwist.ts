
import { Game } from '../games';

export const arrowTwist: Game = {
  id: 8,
  title: "Arrow Twist",
  description: "Arcade reflex game with rotating targets and precision shooting.",
  longDescription: "Shoot arrows into spinning logs without hitting obstacles. Time your shots, dodge spikes, slash apples, and face off against bosses every few levels. Unlock special bows and arrows while testing your reflexes in this high-speed tap game. Built as a solo developer, I designed dynamic rotation mechanics, progression, monetization, and polished the game for responsive, satisfying play.",
  image: "/assets/Images/Projects/ArrowTwist/ProjectIcon.jpg",
  category: "Arcade",
  technologies: ["Unity 3D", "C#", "Scriptable Objects", "Unity Ads"],
  links: {
    demo: "",
    github: "",
    store: "",
    youtube: "https://www.youtube.com/embed/nqcuOXFJxGM"
  },
  featured: false,
  developmentTime: "4 months",
  teamSize: "Solo Developer",
  downloads: "10K+",
  rating: "4.6/5",
  features: [
    "Fast-paced tap-to-shoot mechanics",
    "Dynamic rotating target patterns",
    "Boss encounters and special rewards",
    "Unlockable bows, arrows, and skins",
    "Integrated rewarded ads and IAP",
    "One-handed portrait play and mobile optimization"
  ],
  screenshots: [
    "/assets/Images/Projects/ArrowTwist/Screenshot_1.png",
    "/assets/Images/Projects/ArrowTwist/Screenshot_2.png",
    "/assets/Images/Projects/ArrowTwist/Screenshot_3.png",
    "/assets/Images/Projects/ArrowTwist/Screenshot_4.png",
    "/assets/Images/Projects/ArrowTwist/Screenshot_5.png",
    "/assets/Images/Projects/ArrowTwist/Screenshot_6.png",
    "/assets/Images/Projects/ArrowTwist/Screenshot_7.png",
    "/assets/Images/Projects/ArrowTwist/Screenshot_8.png"
  ],
  contributions: [
    {
      id: "arrow-rotation-mechanics",
      module: "Core Gameplay",
      name: "Dynamic Rotation and Timing System",
      shortDescription: "Developed precise rotation mechanics and timing systems for challenging arcade gameplay.",
      fullDescription: "Created sophisticated rotation algorithms and timing mechanics that provide challenging yet fair gameplay. Implemented dynamic difficulty scaling, precision timing systems, and responsive controls optimized for one-handed mobile play.",
      bulletPoints: [
        "Developed dynamic rotation patterns and algorithms",
        "Implemented precision timing and collision detection",
        "Created adaptive difficulty scaling system",
        "Built responsive one-handed touch controls",
        "Optimized performance for smooth 60fps gameplay"
      ]
    },
    {
      id: "arrow-progression",
      module: "Progression System",
      name: "Boss Encounters and Unlockable Content",
      shortDescription: "Designed boss fight mechanics and progression system with unlockable bows and arrows.",
      fullDescription: "Architected a comprehensive progression system featuring challenging boss encounters, unlockable weapons, and cosmetic rewards. Balanced difficulty curves and reward systems to maintain player engagement while providing meaningful progression milestones.",
      bulletPoints: [
        "Designed challenging boss encounter mechanics",
        "Created unlockable bow and arrow progression system",
        "Implemented reward and achievement systems",
        "Built balanced difficulty and progression curves",
        "Developed cosmetic customization features"
      ]
    },
    {
      id: "arrow-monetization",
      module: "Business Systems",
      name: "Integrated Monetization Strategy",
      shortDescription: "Implemented balanced monetization with rewarded ads and IAP without disrupting gameplay flow.",
      fullDescription: "Designed and implemented a player-friendly monetization system combining rewarded video ads with optional in-app purchases. Ensured monetization elements enhance rather than disrupt the core gameplay experience while maintaining fair progression for all players.",
      bulletPoints: [
        "Integrated rewarded video ads with gameplay progression",
        "Designed optional IAP for cosmetics and convenience",
        "Maintained fair free-to-play progression balance",
        "Implemented non-intrusive ad placement strategy",
        "Created analytics tracking for monetization optimization"
      ]
    }
  ]
};
