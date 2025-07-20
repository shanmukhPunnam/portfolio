
import { Game } from '../games';

export const pokerVR: Game = {
  id: 1,
  title: "Poker VR",
  description: "Multiplayer VR poker game with realistic physics and hand tracking.",
  longDescription: "Step into a virtual casino and experience real-time multiplayer poker with fully immersive hand-tracked gestures, avatar interactions, and lifelike physics. Built for Oculus Quest, Poker VR delivers the feel of live poker from the comfort of your home. Developed core gameplay, multiplayer logic, realistic physics, and gesture-based interactions as part of the VR team.",
  image: "/assets/Images/Projects/PokerVR/ProjectIcon.jpg",
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
    "Real-time multiplayer poker tables",
    "Hand-tracked gesture interactions",
    "Realistic physics for cards and chips",
    "Voice chat and avatar interactions",
    "Optimized for Oculus Quest hardware",
    "Robust session state and reconnect handling"
  ],
  screenshots: [],
  contributions: [
    {
      id: "poker-multiplayer",
      module: "Multiplayer System",
      name: "Real-time Poker Gameplay",
      shortDescription: "Implemented core multiplayer poker logic with real-time synchronization.",
      fullDescription: "Designed and developed the complete multiplayer poker system using Photon networking. This included turn-based gameplay logic, card dealing mechanics, betting rounds, and real-time state synchronization across all connected players. Implemented robust error handling for network disconnections and reconnections.",
      bulletPoints: [
        "Developed turn-based poker game logic with betting rounds",
        "Implemented real-time card dealing and hand evaluation",
        "Created robust network state synchronization",
        "Built reconnection and error recovery systems",
        "Optimized for low-latency VR gameplay"
      ]
    },
    {
      id: "poker-hand-tracking",
      module: "VR Interaction System",
      name: "Hand-Tracked Gesture Controls",
      shortDescription: "Created intuitive hand-tracking system for poker gestures and card interactions.",
      fullDescription: "Developed a comprehensive hand-tracking system specifically tailored for poker gameplay in VR. This included gesture recognition for betting actions (fold, call, raise), card pickup and placement mechanics, and chip handling. The system provides haptic feedback and visual cues to enhance the tactile experience of playing poker in virtual reality.",
      bulletPoints: [
        "Implemented gesture recognition for poker actions (fold, call, raise)",
        "Created realistic card pickup and placement mechanics",
        "Developed physics-based chip handling and stacking",
        "Integrated haptic feedback for tactile interactions",
        "Optimized hand tracking for Oculus Quest hardware"
      ]
    },
    {
      id: "poker-physics",
      module: "Physics System",
      name: "Realistic Card and Chip Physics",
      shortDescription: "Built physics-based card dealing and chip interactions for immersive gameplay.",
      fullDescription: "Implemented a sophisticated physics system for cards and poker chips to create a realistic casino experience. This included card shuffling animations, smooth dealing mechanics, chip throwing and stacking physics, and table interactions. The system was optimized to maintain 90fps performance on Oculus Quest while providing satisfying tactile feedback.",
      bulletPoints: [
        "Created realistic card shuffling and dealing animations",
        "Implemented physics-based chip throwing and stacking",
        "Developed smooth table surface interactions",
        "Optimized physics calculations for VR performance",
        "Added audio-visual feedback for all interactions"
      ]
    }
  ]
};
