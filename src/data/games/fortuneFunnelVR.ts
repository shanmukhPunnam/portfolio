
import { Game } from '../games';

export const fortuneFunnelVR: Game = {
  id: 10,
  title: "Fortune Funnel VR",
  description: "Physics-based VR puzzle game with funnels, gravity, and haptic feedback.",
  longDescription: "Solve dynamic physics puzzles by guiding objects through interactive funnels, ramps, and traps in VR. Fortune Funnel VR blends tactile object handling with puzzle-solving in a uniquely satisfying, immersive environment built for Oculus Quest. Developed and optimized full VR puzzle gameplay, including gesture-based object handling, real-time physics, modular level design, and immersive feedback systems.",
  image: "/assets/Images/Projects/FortuneFunnelVR/ProjectIcon.jpg",
  category: "VR",
  technologies: ["Unity 3D", "C#", "Oculus SDK", "Scriptable Objects"],
  links: {
    demo: "",
    github: "",
    store: "",
    youtube: ""
  },
  featured: false,
  developmentTime: "5 months",
  teamSize: "Solo VR Developer",
  downloads: "N/A",
  rating: "4.5/5",
  features: [
    "Physics-based VR puzzle mechanics",
    "Hand-tracked grabbing, throwing, and placement",
    "Dynamic funnels, ramps, and gravity traps",
    "Immersive haptic and visual feedback",
    "Optimized for Oculus Quest hardware",
    "Modular level templates and timed challenges"
  ],
  screenshots: [],
  contributions: [
    {
      id: "funnel-vr-physics",
      module: "VR Physics",
      name: "Physics-Based Puzzle Mechanics",
      shortDescription: "Developed realistic VR physics for object manipulation and puzzle solving.",
      fullDescription: "Created a sophisticated VR physics system enabling natural object interaction through hand tracking and controllers. Implemented realistic gravity, momentum, and collision systems optimized for puzzle-solving gameplay in virtual reality.",
      bulletPoints: [
        "Developed realistic VR object physics and interactions",
        "Implemented natural hand tracking for object manipulation",
        "Created gravity and momentum-based puzzle mechanics",
        "Built collision detection optimized for VR performance",
        "Designed intuitive grabbing and throwing systems"
      ]
    },
    {
      id: "funnel-level-design",
      module: "Puzzle Design",
      name: "Modular Puzzle Level System",
      shortDescription: "Architected modular level system with progressive puzzle complexity and timed challenges.",
      fullDescription: "Designed a flexible puzzle level architecture supporting various difficulty levels and challenge types. Created modular puzzle components that can be combined to create diverse and engaging puzzle experiences with progressive complexity.",
      bulletPoints: [
        "Created modular puzzle component architecture",
        "Designed progressive difficulty and complexity scaling",
        "Implemented timed challenges and scoring systems",
        "Built level validation and testing tools",
        "Developed puzzle generation and management systems"
      ]
    },
    {
      id: "funnel-vr-optimization",
      module: "VR Performance",
      name: "Oculus Quest Optimization",
      shortDescription: "Optimized VR performance for Oculus Quest while maintaining immersive visual quality.",
      fullDescription: "Implemented comprehensive VR optimization strategies specifically for Oculus Quest hardware. Achieved stable 90fps performance while maintaining high visual quality and responsive hand tracking through efficient rendering and physics optimizations.",
      bulletPoints: [
        "Optimized rendering pipeline for Oculus Quest hardware",
        "Maintained 90fps VR performance with complex physics",
        "Implemented efficient LOD and culling systems",
        "Optimized hand tracking and haptic feedback",
        "Built dynamic quality scaling for consistent performance"
      ]
    }
  ]
};
