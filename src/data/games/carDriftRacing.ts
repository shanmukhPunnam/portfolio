
import { Game } from '../games';

export const carDriftRacing: Game = {
  id: 9,
  title: "Car Drift Racing",
  description: "Realistic mobile drift racing with fine-tuned car physics.",
  longDescription: "Master the art of drifting in this fast-paced mobile racer. Perform smooth drifts, unlock high-performance cars, and race across visually diverse tracks. Designed and built for precise handling, rewarding style-based gameplay, and seamless upgrades and monetization. Led the full project, implementing custom drift physics, track design, monetization, and optimization for smooth play on all Android devices.",
  image: "/assets/Images/Projects/CarDriftRacing/ProjectIcon.jpg",
  category: "Racing",
  technologies: ["Unity 3D", "C#", "Scriptable Objects", "Unity Ads"],
  links: {
    demo: "",
    github: "",
    store: "https://play.google.com/store/apps/details?id=com.supercodegames.android.cardrift",
    youtube: "https://www.youtube.com/embed/si2HdzLv94w"
  },
  featured: true,
  developmentTime: "6 months",
  teamSize: "Solo Developer",
  downloads: "100K+",
  rating: "4.7/5",
  features: [
    "Custom drift physics for tight control",
    "Unlockable cars, garage and upgrades",
    "Multiple visually unique tracks and environments",
    "Rewarded ads, IAP, and daily login bonuses",
    "Touch and tilt control modes",
    "Optimized for low-end Android devices"
  ],
  screenshots: [
    "/assets/Images/Projects/CarDriftRacing/Screenshot_1.jpg",
    "/assets/Images/Projects/CarDriftRacing/Screenshot_2.jpg",
    "/assets/Images/Projects/CarDriftRacing/Screenshot_3.jpg",
    "/assets/Images/Projects/CarDriftRacing/Screenshot_4.jpg",
    "/assets/Images/Projects/CarDriftRacing/Screenshot_5.jpg",
    "/assets/Images/Projects/CarDriftRacing/Screenshot_6.jpg",
    "/assets/Images/Projects/CarDriftRacing/Screenshot_7.jpg"
  ],
  contributions: [
    {
      id: "drift-physics",
      module: "Physics System",
      name: "Custom Drift Physics Engine",
      shortDescription: "Developed realistic drift physics system with fine-tuned car handling for mobile devices.",
      fullDescription: "Created a sophisticated car physics system specifically optimized for drift racing mechanics. Implemented realistic tire physics, weight transfer simulation, and drift scoring algorithms while maintaining smooth performance on mobile devices.",
      bulletPoints: [
        "Developed custom car physics with realistic drift mechanics",
        "Implemented tire physics and weight transfer simulation",
        "Created drift scoring and combo systems",
        "Optimized physics calculations for mobile performance",
        "Built responsive handling for touch and tilt controls"
      ]
    },
    {
      id: "drift-progression",
      module: "Vehicle System",
      name: "Car Collection and Upgrade System",
      shortDescription: "Architected comprehensive vehicle progression with unlockable cars and upgrade mechanics.",
      fullDescription: "Designed a robust vehicle progression system featuring multiple unlockable cars, each with unique handling characteristics and upgrade paths. Integrated progression with gameplay achievements and monetization systems while maintaining balanced gameplay.",
      bulletPoints: [
        "Created diverse car collection with unique handling profiles",
        "Implemented comprehensive upgrade and tuning systems",
        "Designed progression-based vehicle unlock system",
        "Built garage management and customization features",
        "Integrated vehicle progression with monetization"
      ]
    },
    {
      id: "drift-environments",
      module: "Level Design",
      name: "Diverse Track Environments",
      shortDescription: "Designed multiple racing environments with varied track layouts and visual themes.",
      fullDescription: "Created diverse racing environments featuring different track layouts, environmental themes, and visual styles. Each environment provides unique driving challenges while maintaining consistent drift-focused gameplay mechanics.",
      bulletPoints: [
        "Designed multiple track environments with unique themes",
        "Created varied track layouts for different skill levels",
        "Implemented environmental effects and weather systems",
        "Built scalable track generation and management system",
        "Optimized environmental rendering for mobile devices"
      ]
    }
  ]
};
