export interface Game {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  technologies: string[];
  links: {
    demo: string;
    github: string;
    store: string;
    youtube?: string;
  };
  featured: boolean;
  developmentTime: string;
  teamSize: string;
  downloads: string;
  rating: string;
  features: string[];
  screenshots: string[];
}

export const games: Game[] = [
  {
    id: 1,
    title: "Mystic Adventure",
    description: "An epic fantasy RPG with stunning visuals and immersive gameplay mechanics.",
    longDescription: "Mystic Adventure is a comprehensive fantasy RPG that showcases advanced Unity 3D development techniques. The game features a rich storyline, complex character progression systems, and multiplayer capabilities using Photon networking. Built with scalable architecture and modern design patterns, this project demonstrates expertise in game development, database management with Firebase, and real-time multiplayer implementation.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
    category: "RPG",
    technologies: ["Unity 3D", "C#", "Photon", "Firebase"],
    links: {
      demo: "#",
      github: "#",
      store: "#",
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    featured: true,
    developmentTime: "8 months",
    teamSize: "Solo Developer",
    downloads: "15K+",
    rating: "4.7/5",
    features: [
      "Character progression system",
      "Quest management",
      "Inventory system",
      "Real-time combat",
      "Save/Load functionality",
      "Multiple storylines"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Space Shooter Elite",
    description: "Fast-paced arcade shooter with procedural generation and multiplayer support.",
    longDescription: "Space Shooter Elite is a high-performance 2D arcade game that demonstrates mastery of Unity's 2D systems and networking capabilities. The game features procedurally generated levels, smooth animations using DOTween, and robust multiplayer functionality through Mirror networking. This project showcases optimization techniques for mobile and desktop platforms.",
    image: "https://images.unsplash.com/photo-1614732414444-096040ec8c49?w=600&h=400&fit=crop",
    category: "Action",
    technologies: ["Unity 2D", "C#", "Mirror", "DOTween"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: false,
    developmentTime: "5 months",
    teamSize: "Solo Developer",
    downloads: "8K+",
    rating: "4.4/5",
    features: [
      "Fast-paced gameplay",
      "Multiplayer support",
      "Weapon systems",
      "Score tracking",
      "Power-ups and bonuses",
      "Procedural generation"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1614732414444-096040ec8c49?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Puzzle Master",
    description: "Mind-bending puzzle game with over 100 levels and unique mechanics.",
    longDescription: "Puzzle Master is a sophisticated puzzle game featuring over 100 handcrafted levels with unique mechanics. Built with Unity's Addressables system for efficient asset management and integrated analytics for player behavior tracking. The game demonstrates clean code architecture and scalable level design systems.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop",
    category: "Puzzle",
    technologies: ["Unity 2D", "C#", "Analytics", "Addressables"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: true,
    developmentTime: "4 months",
    teamSize: "Solo Developer",
    downloads: "25K+",
    rating: "4.8/5",
    features: [
      "100+ unique levels",
      "Hint system",
      "Progress tracking",
      "Achievement system",
      "Leaderboards",
      "Offline play support"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Racing Legends",
    description: "Realistic racing simulator with advanced physics and customization.",
    longDescription: "Racing Legends is a comprehensive racing simulator showcasing advanced Unity 3D physics implementation and procedural track generation. The project features realistic car physics, dynamic weather systems, and extensive customization options. Built with ProBuilder for rapid prototyping and Cinemachine for cinematic camera work.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
    category: "Racing",
    technologies: ["Unity 3D", "C#", "ProBuilder", "Cinemachine"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: false,
    developmentTime: "7 months",
    teamSize: "Solo Developer",
    downloads: "12K+",
    rating: "4.5/5",
    features: [
      "Realistic physics engine",
      "Multiple racing modes",
      "Car customization",
      "Track editor",
      "Weather effects",
      "Time trial modes"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop"
    ]
  },
  {
    id: 5,
    title: "VR Explorer",
    description: "Immersive VR experience showcasing architectural visualization.",
    longDescription: "VR Explorer is an immersive virtual reality application designed for architectural visualization and virtual tours. Built with Unity XR toolkit and supporting multiple VR platforms including Oculus and SteamVR. The project demonstrates expertise in VR development, spatial computing, and optimization for VR hardware constraints.",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop",
    category: "VR",
    technologies: ["Unity XR", "C#", "Oculus SDK", "SteamVR"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: true,
    developmentTime: "6 months",
    teamSize: "Solo Developer",
    downloads: "3K+",
    rating: "4.9/5",
    features: [
      "Immersive VR experience",
      "Hand tracking support",
      "Spatial audio",
      "Room-scale movement",
      "Cross-platform VR",
      "Haptic feedback"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Mobile Casual",
    description: "Addictive mobile game with simple mechanics and beautiful art.",
    longDescription: "Mobile Casual is a polished mobile game optimized for iOS and Android platforms. The project showcases mobile-specific optimization techniques, touch controls, and monetization integration through Unity Ads. Features cloud save functionality and social integration for enhanced user engagement.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&h=400&fit=crop",
    category: "Mobile",
    technologies: ["Unity 2D", "C#", "Unity Ads", "Google Play"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: false,
    developmentTime: "3 months",
    teamSize: "Solo Developer",
    downloads: "50K+",
    rating: "4.3/5",
    features: [
      "Touch-optimized controls",
      "Social features",
      "In-app purchases",
      "Push notifications",
      "Offline gameplay",
      "Cloud save sync"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop"
    ]
  }
];

export const categories = ["All", "RPG", "Action", "Puzzle", "Racing", "VR", "Mobile"];
