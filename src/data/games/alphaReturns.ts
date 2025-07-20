
import { Game } from '../games';

export const alphaReturns: Game = {
  id: 7,
  title: "Alpha Returns",
  description: "Web3 multiplayer PvP shooter with tokenized assets and crypto rewards.",
  longDescription: "Alpha Returns is a cutting-edge multiplayer PvP shooter that blends traditional FPS action with a full Web3 NFT economy. Built in Unity, it features scalable multiplayer with Photon, blockchain-backed inventory and NFT asset rewards, real-time analytics, hybrid economy (IAP + tokens), and high-end mobile optimization. As Lead Unity Developer, I architected the project, implemented gameplay, Web3 systems, technical standards, and led a cross-functional team from prototype to release.",
  image: "/assets/Images/Projects/AlphaReturns/ProjectIcon.jpg",
  category: "Shooter",
  technologies: ["Unity 3D", "C#", "Photon", "Web3", "Firebase", "NFT"],
  links: {
    demo: "",
    github: "",
    store: "https://play.google.com/store/apps/details?id=com.example.alphareturns",
    youtube: "https://www.youtube.com/embed/iw8KiUCBdqs"
  },
  featured: true,
  developmentTime: "12 months",
  teamSize: "Lead Developer (15+ team)",
  downloads: "25K+",
  rating: "4.7/5",
  features: [
    "PvP multiplayer with Photon Fusion and AI fallback bots",
    "Blockchain-based NFT rewards and wallet integration",
    "Modular weapon, inventory, and attachment system",
    "Analytics and crash reporting (Firebase, Unity Analytics)",
    "Performance optimization for high-end and mid-range Android",
    "Real-time matchmaking, live events, and competitive leaderboards"
  ],
  screenshots: [
    "/assets/Images/Projects/AlphaReturns/Environment_Selection.jpeg",
    "/assets/Images/Projects/AlphaReturns/First_person.png",
    "/assets/Images/Projects/AlphaReturns/iap.jpeg",
    "/assets/Images/Projects/AlphaReturns/main_menu_2.jpeg",
    "/assets/Images/Projects/AlphaReturns/main_menu.jpeg",
    "/assets/Images/Projects/AlphaReturns/missions.jpeg",
    "/assets/Images/Projects/AlphaReturns/multiple_Environments.jpg",
    "/assets/Images/Projects/AlphaReturns/shop.jpeg",
    "/assets/Images/Projects/AlphaReturns/Spin_Wheel.png",
    "/assets/Images/Projects/AlphaReturns/third_person.png",
    "/assets/Images/Projects/AlphaReturns/weapon_selection.jpeg",
    "/assets/Images/Projects/AlphaReturns/Weapons_Showcase.webp.png"
  ],
  contributions: [
    {
      id: "alpha-web3-integration",
      module: "Blockchain System",
      name: "Web3 NFT Economy Integration",
      shortDescription: "Architected blockchain-based NFT rewards and wallet integration system.",
      fullDescription: "Led the development of a comprehensive Web3 integration featuring NFT-based rewards, cryptocurrency transactions, and blockchain wallet connectivity. Designed hybrid economy combining traditional IAP with token-based rewards while ensuring seamless user experience.",
      bulletPoints: [
        "Architected NFT reward system with blockchain integration",
        "Implemented cryptocurrency wallet connectivity",
        "Developed hybrid economy (IAP + token rewards)",
        "Built secure transaction processing systems",
        "Created blockchain asset management and trading"
      ]
    },
    {
      id: "alpha-multiplayer-architecture",
      module: "Networking",
      name: "Scalable PvP Multiplayer System",
      shortDescription: "Developed robust multiplayer architecture with Photon Fusion and AI fallback systems.",
      fullDescription: "Architected and implemented a scalable multiplayer system using Photon Fusion for real-time PvP combat. Designed AI fallback systems, matchmaking algorithms, and server infrastructure to ensure consistent gameplay experience across varying network conditions.",
      bulletPoints: [
        "Implemented Photon Fusion for real-time PvP combat",
        "Developed AI fallback bots for seamless gameplay",
        "Created intelligent matchmaking and lobby systems",
        "Built server infrastructure and load balancing",
        "Optimized network performance for mobile devices"
      ]
    },
    {
      id: "alpha-team-leadership",
      module: "Project Management",
      name: "Cross-Functional Team Leadership",
      shortDescription: "Led 15+ member development team through complete project lifecycle as Lead Developer.",
      fullDescription: "Provided technical leadership for a 15+ member cross-functional team including developers, artists, designers, and blockchain specialists. Established development standards, code review processes, and project management workflows that delivered the project from prototype to successful release.",
      bulletPoints: [
        "Led cross-functional team of 15+ developers and specialists",
        "Established coding standards and review processes",
        "Implemented agile development and project management",
        "Coordinated between technical and blockchain teams",
        "Delivered project from prototype to successful market release"
      ]
    }
  ]
};
