
import { Game } from '../games';

export const nutColorSort: Game = {
  id: 12,
  title: "Nut Color Sort",
  description: "Satisfying puzzle game to sort nuts by color and type.",
  longDescription: "Relax and challenge your brain in this colorful sorting puzzle. Tap to move nuts across branches and organize them by type. Plan your moves carefully and unwind with smooth visuals and satisfying animations across hundreds of handcrafted levels. Developed end-to-end with stack and color-match mechanics, modular level system, monetization, and polished UX.",
  image: "/assets/Images/Projects/NutColorSort/ProjectIcon.jpg",
  category: "Puzzle",
  technologies: ["Unity 3D", "C#", "Scriptable Objects", "Unity Ads"],
  links: {
    demo: "",
    github: "",
    store: "https://play.google.com/store/apps/details?id=com.RunyGames.NutSort",
    youtube: "https://www.youtube.com/embed/5ALWKA5Ul1s"
  },
  featured: false,
  developmentTime: "4 months",
  teamSize: "Solo Developer",
  downloads: "25K+",
  rating: "4.7/5",
  features: [
    "Hundreds of handcrafted sorting levels",
    "Intuitive tap-to-move color stack logic",
    "Undo, retry, and power-up systems",
    "Soothing animations and responsive feedback",
    "Rewarded ads and in-app purchases",
    "Dynamic difficulty and daily challenges"
  ],
  screenshots: [
    "/assets/Images/Projects/NutColorSort/Screenshot_1.jpg",
    "/assets/Images/Projects/NutColorSort/Screenshot_2.jpg",
    "/assets/Images/Projects/NutColorSort/Screenshot_3.jpg",
    "/assets/Images/Projects/NutColorSort/Screenshot_4.jpg",
    "/assets/Images/Projects/NutColorSort/Screenshot_5.jpg",
    "/assets/Images/Projects/NutColorSort/Screenshot_6.jpg"
  ],
  contributions: [
    {
      id: "nutsort-puzzle-mechanics",
      module: "Puzzle System",
      name: "Color Stack Sorting Logic",
      shortDescription: "Developed intuitive tap-to-move sorting mechanics with stack-based color matching.",
      fullDescription: "Created sophisticated sorting puzzle mechanics featuring stack-based color matching with intuitive tap controls. Implemented smart movement validation, hint systems, and undo functionality to provide satisfying puzzle-solving experience.",
      bulletPoints: [
        "Developed stack-based color sorting algorithms",
        "Implemented intuitive tap-to-move control system",
        "Created smart movement validation and hint systems",
        "Built undo/redo functionality for better UX",
        "Designed progressive difficulty and complexity scaling"
      ]
    },
    {
      id: "nutsort-level-content",
      module: "Content Management",
      name: "Handcrafted Level Design",
      shortDescription: "Designed hundreds of handcrafted puzzle levels with balanced difficulty progression.",
      fullDescription: "Created an extensive library of handcrafted puzzle levels featuring carefully balanced difficulty curves and engaging puzzle patterns. Each level is designed to provide satisfying solutions while introducing new challenges and complexity.",
      bulletPoints: [
        "Designed hundreds of handcrafted puzzle levels",
        "Created balanced difficulty progression curves",
        "Implemented level validation and testing systems",
        "Built daily challenge and special event levels",
        "Developed level analytics and player feedback systems"
      ]
    },
    {
      id: "nutsort-relaxing-ux",
      module: "User Experience",
      name: "Soothing Visual and Audio Design",
      shortDescription: "Crafted relaxing visual and audio experience with smooth animations and calming feedback.",
      fullDescription: "Designed a calming and satisfying user experience featuring smooth animations, pleasing color palettes, and satisfying audio feedback. Created visual and audio systems that enhance the relaxing nature of the puzzle gameplay.",
      bulletPoints: [
        "Designed soothing color palettes and visual themes",
        "Implemented smooth animations and transitions",
        "Created satisfying audio feedback and sound design",
        "Built responsive UI optimized for relaxing gameplay",
        "Developed accessibility features for inclusive design"
      ]
    }
  ]
};
