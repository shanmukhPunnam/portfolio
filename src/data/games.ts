
export interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  links: {
    demo: string;
    github: string;
    store: string;
  };
  featured: boolean;
  longDescription?: string;
  developmentTime?: string;
  teamSize?: string;
  downloads?: string;
  rating?: string;
  features?: string[];
  screenshots?: string[];
}

export const games: Game[] = [
  {
    id: 1,
    title: "Mystic Adventure",
    description: "An epic fantasy RPG with stunning visuals and immersive gameplay mechanics.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
    category: "RPG",
    technologies: ["Unity 3D", "C#", "Photon", "Firebase"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: true
  },
  {
    id: 2,
    title: "Space Shooter Elite",
    description: "Fast-paced arcade shooter with procedural generation and multiplayer support.",
    image: "https://images.unsplash.com/photo-1614732414444-096040ec8c49?w=600&h=400&fit=crop",
    category: "Action",
    technologies: ["Unity 2D", "C#", "Mirror", "DOTween"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: false
  },
  {
    id: 3,
    title: "Puzzle Master",
    description: "Mind-bending puzzle game with over 100 levels and unique mechanics.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop",
    category: "Puzzle",
    technologies: ["Unity 2D", "C#", "Analytics", "Addressables"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: true
  },
  {
    id: 4,
    title: "Racing Legends",
    description: "Realistic racing simulator with advanced physics and customization.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
    category: "Racing",
    technologies: ["Unity 3D", "C#", "ProBuilder", "Cinemachine"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: false
  },
  {
    id: 5,
    title: "VR Explorer",
    description: "Immersive VR experience showcasing architectural visualization.",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop",
    category: "VR",
    technologies: ["Unity XR", "C#", "Oculus SDK", "SteamVR"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: true
  },
  {
    id: 6,
    title: "Mobile Casual",
    description: "Addictive mobile game with simple mechanics and beautiful art.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&h=400&fit=crop",
    category: "Mobile",
    technologies: ["Unity 2D", "C#", "Unity Ads", "Google Play"],
    links: {
      demo: "#",
      github: "#",
      store: "#"
    },
    featured: false
  }
];

export const categories = ["All", "RPG", "Action", "Puzzle", "Racing", "VR", "Mobile"];
