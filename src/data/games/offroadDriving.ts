
import { Game } from '../games';

export const offroadDriving: Game = {
  id: 13,
  title: "Offroad Driving",
  description: "Realistic off-road driving game with dynamic terrain physics.",
  longDescription: "Experience extreme terrain driving with realistic vehicle physics and immersive environments. Choose from a range of vehicles and conquer hills, mud, water, and rough roads. Explore open landscapes and push your off-road skills to the limit. Led all development, including dynamic physics, vehicle systems, environments, progression, monetization, and mobile optimization.",
  image: "/assets/Images/Projects/OffroadDriving/ProjectIcon.jpg",
  category: "Racing",
  technologies: ["Unity 3D", "C#", "Scriptable Objects", "Unity Ads"],
  links: {
    demo: "",
    github: "",
    store: "https://play.google.com/store/apps/details?id=com.supercodegames.android.offroaddriving",
    youtube: "https://www.youtube.com/embed/6jdOQuT39Vo"
  },
  featured: false,
  developmentTime: "6 months",
  teamSize: "Solo Developer",
  downloads: "30K+",
  rating: "4.6/5",
  features: [
    "Dynamic vehicle physics for off-road terrain",
    "Multiple vehicles with unique stats and upgrades",
    "Varied environments and realistic terrain deformation",
    "Tilt, button, and joystick driving modes",
    "Rewarded ads, IAP, and daily challenges",
    "Optimized for smooth mobile performance"
  ],
  screenshots: [
    "/assets/Images/Projects/OffroadDriving/Screenshot_1.jpg",
    "/assets/Images/Projects/OffroadDriving/Screenshot_2.jpg",
    "/assets/Images/Projects/OffroadDriving/Screenshot_3.jpg",
    "/assets/Images/Projects/OffroadDriving/Screenshot_4.jpg",
    "/assets/Images/Projects/OffroadDriving/Screenshot_5.jpg",
    "/assets/Images/Projects/OffroadDriving/Screenshot_6.jpg"
  ],
  contributions: [
    {
      id: "offroad-vehicle-physics",
      module: "Physics System",
      name: "Dynamic Vehicle and Terrain Physics",
      shortDescription: "Developed realistic off-road vehicle physics with dynamic terrain interaction systems.",
      fullDescription: "Created sophisticated vehicle physics system featuring realistic off-road driving mechanics including terrain deformation, mud physics, water interaction, and dynamic suspension systems. Optimized for various vehicle types while maintaining authentic driving feel.",
      bulletPoints: [
        "Developed realistic off-road vehicle physics and suspension",
        "Implemented dynamic terrain deformation and interaction",
        "Created mud, water, and surface physics systems",
        "Built multiple vehicle types with unique handling",
        "Optimized physics performance for mobile devices"
      ]
    },
    {
      id: "offroad-environments",
      module: "Environment Design",
      name: "Diverse Off-Road Environments",
      shortDescription: "Designed varied terrain environments with realistic environmental challenges.",
      fullDescription: "Created diverse off-road environments featuring different terrain types, weather conditions, and environmental challenges. Each environment provides unique driving experiences while maintaining consistent physics and visual quality.",
      bulletPoints: [
        "Designed multiple terrain types and environmental challenges",
        "Created realistic weather and lighting systems",
        "Implemented environmental effects and particle systems",
        "Built scalable environment generation and optimization",
        "Developed environmental storytelling and atmosphere"
      ]
    },
    {
      id: "offroad-progression",
      module: "Vehicle System",
      name: "Vehicle Progression and Customization",
      shortDescription: "Architected comprehensive vehicle upgrade system with performance and visual customization.",
      fullDescription: "Designed vehicle progression system featuring performance upgrades, visual customization, and unlock mechanics. Integrated progression with gameplay challenges and monetization while maintaining balanced difficulty and fair progression.",
      bulletPoints: [
        "Created comprehensive vehicle upgrade and customization systems",
        "Implemented performance tuning and visual modification",
        "Designed progression-based vehicle unlock system",
        "Built challenge-based reward and achievement systems",
        "Integrated balanced monetization with progression mechanics"
      ]
    }
  ]
};
