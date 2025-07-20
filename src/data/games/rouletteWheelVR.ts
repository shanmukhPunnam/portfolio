
import { Game } from '../games';

export const rouletteWheelVR: Game = {
  id: 6,
  title: "Roulette Wheel VR",
  description: "Multiplayer roulette game with gesture-based betting in VR.",
  longDescription: "Experience the thrill of live roulette in virtual reality. Place your bets with intuitive hand gestures, interact with a lifelike wheel, and enjoy multiplayer casino realism with voice chat, animated avatars, and physics-based chips—all in an immersive VR space. Developed core VR gameplay, hand-tracked betting gestures, multiplayer logic, and optimized for Oculus Quest performance.",
  image: "/assets/Images/Projects/RouletteWheelVR/ProjectIcon.jpg",
  category: "VR",
  technologies: ["Unity 3D", "C#", "Oculus SDK", "Photon"],
  links: {
    demo: "",
    github: "",
    store: "",
    youtube: ""
  },
  featured: false,
  developmentTime: "6 months",
  teamSize: "VR Gameplay Engineer",
  downloads: "N/A",
  rating: "4.5/5",
  features: [
    "Physics-based chip and roulette wheel interactions",
    "Hand-tracked betting gestures and VR controller support",
    "Real-time multiplayer with voice chat and avatars",
    "Immersive casino environment and lighting",
    "Optimized for Oculus Quest hardware"
  ],
  screenshots: [],
  contributions: [
    {
      id: "roulette-vr-physics",
      module: "Physics System",
      name: "Realistic Roulette Wheel Physics",
      shortDescription: "Implemented authentic roulette wheel physics with realistic ball movement and betting mechanics.",
      fullDescription: "Developed a sophisticated physics system for roulette wheel simulation featuring accurate ball physics, wheel rotation dynamics, and realistic betting chip interactions. The system provides authentic casino experience with proper randomization and fair gameplay mechanics.",
      bulletPoints: [
        "Created realistic roulette wheel rotation and ball physics",
        "Implemented authentic betting chip throwing and placement",
        "Developed fair randomization algorithms",
        "Built collision detection for ball and wheel interactions",
        "Optimized physics calculations for VR performance"
      ]
    },
    {
      id: "roulette-hand-tracking",
      module: "VR Interaction",
      name: "Hand-Tracked Betting System",
      shortDescription: "Created intuitive hand tracking for placing bets and interacting with casino elements.",
      fullDescription: "Developed comprehensive hand tracking system for natural casino interactions including chip placement, gesture recognition for betting actions, and tactile feedback. The system provides intuitive VR interactions that feel natural and responsive.",
      bulletPoints: [
        "Implemented gesture recognition for betting actions",
        "Created natural chip grabbing and placement mechanics",
        "Developed haptic feedback for tactile interactions",
        "Built hand tracking calibration and optimization",
        "Integrated controller fallback for accessibility"
      ]
    },
    {
      id: "roulette-multiplayer",
      module: "Networking",
      name: "Multiplayer Casino Experience",
      shortDescription: "Built real-time multiplayer system with voice chat and avatar interactions.",
      fullDescription: "Architected a robust multiplayer system supporting multiple players at roulette tables with real-time synchronization, voice communication, and avatar interactions. Implemented casino etiquette and social features to enhance the authentic casino atmosphere.",
      bulletPoints: [
        "Developed real-time multiplayer table synchronization",
        "Implemented voice chat and spatial audio",
        "Created avatar animation and interaction systems",
        "Built casino room management and matchmaking",
        "Optimized networking for low-latency VR gameplay"
      ]
    }
  ]
};
