
import { Game } from '../games';

export const worldOfRabin: Game = {
  id: 5,
  title: "World of Rabin",
  description: "A logical 2D platformer with minimalist puzzle design.",
  longDescription: "Navigate a mystical realm filled with logical platforming challenges. Help two friends escape from the depths of Rabin by solving increasingly complex puzzles across beautifully crafted stages. As the sole Unity 2D developer, I handled every aspect including game architecture, core mechanics, level design, minimal UI/UX, visuals, sound, optimization, and deployment to Play Store.",
  image: "/assets/Images/Projects/WorldOfRabin/ProjectIcon.jpg",
  category: "Platformer",
  technologies: ["Unity 2D", "C#", "Custom Level Templates"],
  links: {
    demo: "",
    github: "",
    store: "",
    youtube: ""
  },
  featured: false,
  developmentTime: "4 months",
  teamSize: "Solo Developer",
  downloads: "5K+",
  rating: "4.4/5",
  features: [
    "Logical 2D platforming mechanics",
    "Progressive puzzle complexity",
    "Minimalist UI and visual style",
    "Chapter-based modular level design",
    "Dynamic obstacles and interactive triggers",
    "Optimized for smooth mobile performance"
  ],
  screenshots: [
    "/assets/Images/Projects/WorldOfRabin/Screenshot_1.jpg",
    "/assets/Images/Projects/WorldOfRabin/Screenshot_2.jpg",
    "/assets/Images/Projects/WorldOfRabin/Screenshot_3.jpg", 
    "/assets/Images/Projects/WorldOfRabin/Screenshot_4.jpg",
    "/assets/Images/Projects/WorldOfRabin/Screenshot_5.jpg",
    "/assets/Images/Projects/WorldOfRabin/Screenshot_6.jpg"
  ],
  contributions: [
    {
      id: "rabin-platformer",
      module: "Core Mechanics",
      name: "Logical 2D Platforming System",
      shortDescription: "Developed precise 2D platforming mechanics with logical puzzle integration.",
      fullDescription: "Created a sophisticated 2D platforming system that seamlessly integrates logical puzzle elements. The system features precise character movement, interactive environmental elements, and puzzle mechanics that require both platforming skill and logical thinking to progress.",
      bulletPoints: [
        "Implemented precise 2D character movement and physics",
        "Created interactive environmental puzzle elements",
        "Developed logical puzzle integration with platforming",
        "Built responsive touch controls for mobile platforms",
        "Optimized collision detection and physics calculations"
      ]
    },
    {
      id: "rabin-level-design",
      module: "Level Architecture",
      name: "Modular Level Design System",
      shortDescription: "Architected chapter-based level system with progressive complexity scaling.",
      fullDescription: "Designed a modular level architecture supporting chapter-based progression with intelligent difficulty scaling. Each level introduces new mechanics while building upon previous concepts, creating a smooth learning curve for players.",
      bulletPoints: [
        "Created modular level template system",
        "Designed progressive difficulty and complexity scaling",
        "Implemented chapter-based story progression",
        "Built dynamic obstacle and trigger systems",
        "Developed level validation and testing tools"
      ]
    },
    {
      id: "rabin-minimalist-design",
      module: "Visual Design",
      name: "Minimalist UI and Visual Style",
      shortDescription: "Crafted clean, minimalist visual design focused on gameplay clarity.",
      fullDescription: "Developed a minimalist visual language that emphasizes gameplay clarity and aesthetic appeal. The design reduces visual clutter while maintaining clear visual feedback for player actions and puzzle elements.",
      bulletPoints: [
        "Designed minimalist UI system with clear visual hierarchy",
        "Created cohesive art style with limited color palette",
        "Implemented clean visual feedback systems",
        "Built responsive layouts for multiple screen sizes",
        "Optimized visual performance for smooth mobile gameplay"
      ]
    }
  ]
};
