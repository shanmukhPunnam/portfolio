
import { Game } from '../games';

export const wordCoach: Game = {
  id: 4,
  title: "Word Coach",
  description: "Relaxing crossword word puzzle game with 6,000+ levels.",
  longDescription: "Swipe, solve, and sharpen your vocabulary with 6,000+ crossword puzzles. Enjoy a relaxing and immersive word journey across beautifully designed worlds filled with daily challenges, brain boosters, and vocabulary training. As the sole Unity developer, I implemented modular crossword and word-connect logic, adaptive level systems, hint mechanics, engaging visuals, and managed deployment and updates.",
  image: "/assets/Images/Projects/WordCoach/ProjectIcon.jpg",
  category: "Puzzle",
  technologies: ["Unity 3D", "C#", "Scriptable Objects"],
  links: {
    demo: "",
    github: "",
    store: "",
    youtube: "https://www.youtube.com/embed/gKUrRWPIu5M"
  },
  featured: true,
  developmentTime: "5 months",
  teamSize: "Solo Developer",
  downloads: "10K+",
  rating: "4.8/5",
  features: [
    "6000+ handcrafted crossword levels",
    "Modular level architecture (crossword, anagram, word-connect modes)",
    "Daily puzzles and vocabulary training",
    "In-game hints and power-ups",
    "Relaxing animated visuals and audio",
    "Optimized for offline and low-end devices"
  ],
  screenshots: [
    "/assets/Images/Projects/WordCoach/Screenshot_1.jpg",
    "/assets/Images/Projects/WordCoach/Screenshot_2.jpg",
    "/assets/Images/Projects/WordCoach/Screenshot_3.jpg", 
    "/assets/Images/Projects/WordCoach/Screenshot_4.jpg",
    "/assets/Images/Projects/WordCoach/Screenshot_5.jpg",
    "/assets/Images/Projects/WordCoach/Screenshot_6.jpg",
    "/assets/Images/Projects/WordCoach/Screenshot_7.jpg",
    "/assets/Images/Projects/WordCoach/Screenshot_8.jpg"
  ],
  contributions: [
    {
      id: "wordcoach-puzzle-engine",
      module: "Puzzle System",
      name: "Modular Crossword Engine",
      shortDescription: "Developed flexible puzzle engine supporting crossword, anagram, and word-connect modes.",
      fullDescription: "Created a sophisticated puzzle generation system capable of handling multiple word puzzle formats. The engine features dynamic difficulty scaling, hint systems, and procedural puzzle generation while maintaining consistent gameplay across 6000+ handcrafted levels.",
      bulletPoints: [
        "Built modular puzzle engine for multiple game modes",
        "Implemented dynamic difficulty scaling algorithm",
        "Created hint and power-up systems",
        "Developed puzzle validation and scoring mechanics",
        "Optimized for smooth performance across all devices"
      ]
    },
    {
      id: "wordcoach-level-system",
      module: "Content Management",
      name: "Adaptive Level Architecture",
      shortDescription: "Designed scalable level system managing 6000+ puzzle levels with progression tracking.",
      fullDescription: "Architected a comprehensive level management system handling thousands of puzzle levels with intelligent progression tracking, difficulty curves, and content delivery optimization. Implemented daily challenges and vocabulary training features to enhance player engagement.",
      bulletPoints: [
        "Designed architecture for 6000+ puzzle levels",
        "Implemented intelligent progression tracking",
        "Created daily challenge and vocabulary systems",
        "Built efficient content loading and caching",
        "Developed player statistics and achievement tracking"
      ]
    },
    {
      id: "wordcoach-ux",
      module: "User Experience",
      name: "Relaxing Visual and Audio Design",
      shortDescription: "Crafted soothing visual and audio experience optimized for relaxing gameplay.",
      fullDescription: "Designed and implemented a calming user experience featuring smooth animations, pleasing color palettes, and relaxing audio feedback. Created responsive UI systems optimized for both casual and extended play sessions while maintaining accessibility across different device sizes.",
      bulletPoints: [
        "Designed relaxing visual themes and color palettes",
        "Implemented smooth animations and transitions",
        "Created responsive UI for multiple device sizes",
        "Built audio feedback systems for enhanced immersion",
        "Optimized UX for both casual and extended play"
      ]
    }
  ]
};
