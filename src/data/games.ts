export interface Contribution {
  id: string;
  module: string;
  name: string;
  image?: string;
  shortDescription: string;
  fullDescription: string;
  bulletPoints: string[];
}

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
  contributions?: Contribution[];
}

export const games: Game[] = [
{
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
  screenshots: [
    // No screenshots available
  ],
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
},
{
  id: 2,
  title: "Zombie Fever",
  description: "Shoot, survive, and escape the zombie apocalypse!",
  longDescription: "Step into a post-apocalyptic world overrun by the undead. Armed with powerful weapons and quick reflexes, fight your way through zombie-infested streets to reach the last research center. Survive intense shootouts, use power-ups, rescue hostages, and stay alive in King of the Hill or Horde modes. Shoot, run, and survive—this is humanity's last stand. As the sole Unity developer, I spearheaded the entire game lifecycle, implemented core systems, optimized performance for Android, and managed Play Store release and updates.",
  image: "/assets/Images/Projects/ZombieFever/ProjectIcon.jpg",
  category: "Shooter",
  technologies: ["Unity 3D", "C#", "Scriptable Objects", "Google Play Services"],
  links: {
    demo: "",
    github: "",
    store: "https://play.google.com/store/apps/details?id=com.supercodegames.android.zombiefever",
    youtube: "https://www.youtube.com/embed/W5DrjB4Hskw"
  },
  featured: true,
  developmentTime: "6 months",
  teamSize: "Solo Developer",
  downloads: "50K+",
  rating: "4.6/5",
  features: [
    "Dynamic zombie AI with pursuit and attack behaviors",
    "Multiple game modes: Horde, Rescue, King of the Hill",
    "Weapon upgrades, power-ups, and health kits",
    "Optimized performance for low-end Android devices",
    "Responsive touch controls and interactive HUD",
    "Google Play publishing and compliance"
  ],
  screenshots: [
    "/assets/Images/Projects/ZombieFever/Screenshot_1.jpg",
    "/assets/Images/Projects/ZombieFever/Screenshot_2.jpg",
    "/assets/Images/Projects/ZombieFever/Screenshot_3.jpg", 
    "/assets/Images/Projects/ZombieFever/Screenshot_4.jpg",
    "/assets/Images/Projects/ZombieFever/Screenshot_5.jpg",
    "/assets/Images/Projects/ZombieFever/Screenshot_6.jpg"
  ],
  contributions: [
    {
      id: "zombie-ai",
      module: "AI System",
      name: "Dynamic Zombie AI Behaviors",
      shortDescription: "Developed intelligent zombie AI with pursuit, attack, and crowd behaviors.",
      fullDescription: "Created a comprehensive AI system for zombie enemies featuring state-based behavior trees, pathfinding optimization, and dynamic difficulty scaling. The AI includes pursuit mechanics, attack patterns, crowd formation, and performance optimization for handling large numbers of entities simultaneously on mobile devices.",
      bulletPoints: [
        "Implemented state-based behavior trees for zombie decision making",
        "Created dynamic pathfinding with obstacle avoidance",
        "Developed crowd AI for realistic zombie horde behaviors",
        "Optimized AI calculations for mobile performance",
        "Built adaptive difficulty scaling based on player performance"
      ]
    },
    {
      id: "zombie-game-modes",
      module: "Game Systems",
      name: "Multiple Game Mode Implementation",
      shortDescription: "Designed and implemented Horde, Rescue, and King of the Hill game modes.",
      fullDescription: "Architected a modular game mode system supporting multiple gameplay variants. Each mode features unique objectives, spawn patterns, and win conditions while sharing core gameplay mechanics. Implemented dynamic difficulty progression and balanced scoring systems across all modes.",
      bulletPoints: [
        "Created modular game mode architecture for easy expansion",
        "Implemented unique objectives and win conditions per mode",
        "Designed dynamic spawn systems for each game mode",
        "Built progression and scoring systems",
        "Optimized mode transitions and state management"
      ]
    },
    {
      id: "zombie-mobile-optimization",
      module: "Performance System",
      name: "Mobile Performance Optimization",
      shortDescription: "Optimized game performance for low-end Android devices while maintaining quality.",
      fullDescription: "Implemented comprehensive performance optimization strategies including object pooling, LOD systems, texture compression, and memory management. Achieved smooth 60fps gameplay on devices with 2GB RAM while maintaining visual quality and responsive controls.",
      bulletPoints: [
        "Implemented object pooling for enemies and projectiles",
        "Created LOD system for distant objects and effects",
        "Optimized texture compression and memory usage",
        "Built dynamic quality scaling based on device performance",
        "Achieved 60fps on low-end Android devices"
      ]
    }
  ]
}
,
{
  id: 3,
  title: "War Ground",
  description: "Offline third-person shooting game with dynamic combat.",
  longDescription: "Fast-paced TPS shooter with weapon inventory, missions, smart AI, and offline gameplay. Unlock guns, complete objectives, and fight enemy forces across challenging battlegrounds with responsive mobile controls and stunning visuals. As the sole developer, I built the entire game, including combat systems, inventory logic, AI, in-app purchases, rewarded ads, and publishing pipeline, all optimized for low to mid-range Android devices.",
  image: "/assets/Images/Projects/WarGround/ProjectIcon.jpg",
  category: "Shooter",
  technologies: ["Unity 3D", "C#", "Scriptable Objects", "Google Play Billing"],
  links: {
    demo: "",
    github: "",
    store: "https://play.google.com/store/apps/details?id=com.example.alphareturns",
    youtube: "https://www.youtube.com/embed/lT-4suX00Vs"
  },
  featured: true,
  developmentTime: "7 months",
  teamSize: "Solo Developer",
  downloads: "20K+",
  rating: "4.5/5",
  features: [
    "Immersive third-person shooter gunplay",
    "Smart AI with cover, flanking, and retreat logic",
    "Weapon inventory, unlocks, and upgrades",
    "Rewarded ads and in-app purchases",
    "Responsive mobile UI and controls",
    "Optimized for low to mid-range Android devices"
  ],
  screenshots: [
    "/assets/Images/Projects/WarGround/Screenshot_1.jpg",
    "/assets/Images/Projects/WarGround/Screenshot_2.jpg",
    "/assets/Images/Projects/WarGround/Screenshot_3.jpg", 
    "/assets/Images/Projects/WarGround/Screenshot_4.jpg",
    "/assets/Images/Projects/WarGround/Screenshot_5.jpg",
    "/assets/Images/Projects/WarGround/Screenshot_6.jpg",
    "/assets/Images/Projects/WarGround/Screenshot_7.jpg"
  ],
  contributions: [
    {
      id: "warground-combat",
      module: "Combat System",
      name: "Third-Person Shooter Mechanics",
      shortDescription: "Built immersive TPS combat system with weapon handling and cover mechanics.",
      fullDescription: "Developed a comprehensive third-person shooter combat system featuring realistic weapon physics, cover-based shooting mechanics, and dynamic crosshair systems. Implemented weapon recoil patterns, bullet physics, and hit detection optimized for mobile touch controls.",
      bulletPoints: [
        "Created realistic weapon physics and recoil patterns",
        "Implemented cover-based shooting mechanics",
        "Developed dynamic crosshair and aiming systems",
        "Built responsive mobile touch controls for shooting",
        "Optimized hit detection and bullet physics"
      ]
    },
    {
      id: "warground-ai",
      module: "AI System",
      name: "Smart Enemy AI with Tactical Behaviors",
      shortDescription: "Implemented advanced AI with cover usage, flanking, and tactical decision making.",
      fullDescription: "Created sophisticated enemy AI featuring tactical behaviors including cover seeking, flanking maneuvers, retreat logic, and coordinated team attacks. The AI system adapts to player behavior and provides challenging yet fair combat encounters.",
      bulletPoints: [
        "Developed cover-seeking and tactical positioning AI",
        "Implemented flanking and coordinated attack patterns",
        "Created dynamic retreat and regrouping behaviors",
        "Built adaptive AI difficulty based on player skill",
        "Optimized AI decision trees for mobile performance"
      ]
    },
    {
      id: "warground-inventory",
      module: "Progression System",
      name: "Weapon Inventory and Upgrade System",
      shortDescription: "Designed modular weapon system with unlocks, upgrades, and progression mechanics.",
      fullDescription: "Architected a comprehensive weapon progression system featuring unlockable weapons, upgrade trees, and stat customization. Integrated with monetization systems including rewarded ads and in-app purchases while maintaining balanced gameplay progression.",
      bulletPoints: [
        "Created modular weapon system with upgrade trees",
        "Implemented progression-based weapon unlocks",
        "Designed balanced stat customization system",
        "Integrated monetization with gameplay progression",
        "Built data persistence for player progression"
      ]
    }
  ]
}
,
{
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
}
,
{
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
}
,
{
  id: 6,
  title: "Roulette Wheel VR",
  description: "Multiplayer roulette game with gesture-based betting in VR.",
  longDescription: "Experience the thrill of live roulette in virtual reality. Place your bets with intuitive hand gestures, interact with a lifelike wheel, and enjoy multiplayer casino realism with voice chat, animated avatars, and physics-based chips—all in an immersive VR space. Developed core VR gameplay, hand-tracked betting gestures, multiplayer logic, and optimized for Oculus Quest performance.",
  image: "/assets/Images/Projects/RouletteWheelVR/ProjectIcon.jpg",
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
    "Physics-based chip and roulette wheel interactions",
    "Hand-tracked betting gestures and VR controller support",
    "Real-time multiplayer with voice chat and avatars",
    "Immersive casino environment and lighting",
    "Optimized for Oculus Quest hardware"
  ],
  screenshots: [
    // No screenshots available in the data
  ],
  contributions: [
    {
      id: "roulette-vr-physics",
      module: "Physics System",
      name: "Realistic Roulette Wheel Physics",
      shortDescription: "Implemented authentic roulette wheel physics with realistic ball movement and betting mechanics.",
      fullDescription: "Developed a sophisticated physics system for roulette wheel simulation featuring accurate ball physics, wheel rotation dynamics, and realistic betting chip interactions. The system provides authentic casino experience with proper randomization and fair gameplay mechanics.",
      bulletPoints: [
        "Created realistic roulette wheel rotation and ball physics",
        "Implemented authentic betting chip throwing and placement",
        "Developed fair randomization algorithms",
        "Built collision detection for ball and wheel interactions",
        "Optimized physics calculations for VR performance"
      ]
    },
    {
      id: "roulette-hand-tracking",
      module: "VR Interaction",
      name: "Hand-Tracked Betting System",
      shortDescription: "Created intuitive hand tracking for placing bets and interacting with casino elements.",
      fullDescription: "Developed comprehensive hand tracking system for natural casino interactions including chip placement, gesture recognition for betting actions, and tactile feedback. The system provides intuitive VR interactions that feel natural and responsive.",
      bulletPoints: [
        "Implemented gesture recognition for betting actions",
        "Created natural chip grabbing and placement mechanics",
        "Developed haptic feedback for tactile interactions",
        "Built hand tracking calibration and optimization",
        "Integrated controller fallback for accessibility"
      ]
    },
    {
      id: "roulette-multiplayer",
      module: "Networking",
      name: "Multiplayer Casino Experience",
      shortDescription: "Built real-time multiplayer system with voice chat and avatar interactions.",
      fullDescription: "Architected a robust multiplayer system supporting multiple players at roulette tables with real-time synchronization, voice communication, and avatar interactions. Implemented casino etiquette and social features to enhance the authentic casino atmosphere.",
      bulletPoints: [
        "Developed real-time multiplayer table synchronization",
        "Implemented voice chat and spatial audio",
        "Created avatar animation and interaction systems",
        "Built casino room management and matchmaking",
        "Optimized networking for low-latency VR gameplay"
      ]
    }
  ]
},
{
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
},{
  id: 8,
  title: "Arrow Twist",
  description: "Arcade reflex game with rotating targets and precision shooting.",
  longDescription: "Shoot arrows into spinning logs without hitting obstacles. Time your shots, dodge spikes, slash apples, and face off against bosses every few levels. Unlock special bows and arrows while testing your reflexes in this high-speed tap game. Built as a solo developer, I designed dynamic rotation mechanics, progression, monetization, and polished the game for responsive, satisfying play.",
  image: "/assets/Images/Projects/ArrowTwist/ProjectIcon.jpg",
  category: "Arcade",
  technologies: ["Unity 3D", "C#", "Scriptable Objects", "Unity Ads"],
  links: {
    demo: "",
    github: "",
    store: "",
    youtube: "https://www.youtube.com/embed/nqcuOXFJxGM"
  },
  featured: false,
  developmentTime: "4 months",
  teamSize: "Solo Developer",
  downloads: "10K+",
  rating: "4.6/5",
  features: [
    "Fast-paced tap-to-shoot mechanics",
    "Dynamic rotating target patterns",
    "Boss encounters and special rewards",
    "Unlockable bows, arrows, and skins",
    "Integrated rewarded ads and IAP",
    "One-handed portrait play and mobile optimization"
  ],
  screenshots: [
    "/assets/Images/Projects/ArrowTwist/Screenshot_1.png",
    "/assets/Images/Projects/ArrowTwist/Screenshot_2.png",
    "/assets/Images/Projects/ArrowTwist/Screenshot_3.png",
    "/assets/Images/Projects/ArrowTwist/Screenshot_4.png",
    "/assets/Images/Projects/ArrowTwist/Screenshot_5.png",
    "/assets/Images/Projects/ArrowTwist/Screenshot_6.png",
    "/assets/Images/Projects/ArrowTwist/Screenshot_7.png",
    "/assets/Images/Projects/ArrowTwist/Screenshot_8.png"
  ],
  contributions: [
    {
      id: "arrow-rotation-mechanics",
      module: "Core Gameplay",
      name: "Dynamic Rotation and Timing System",
      shortDescription: "Developed precise rotation mechanics and timing systems for challenging arcade gameplay.",
      fullDescription: "Created sophisticated rotation algorithms and timing mechanics that provide challenging yet fair gameplay. Implemented dynamic difficulty scaling, precision timing systems, and responsive controls optimized for one-handed mobile play.",
      bulletPoints: [
        "Developed dynamic rotation patterns and algorithms",
        "Implemented precision timing and collision detection",
        "Created adaptive difficulty scaling system",
        "Built responsive one-handed touch controls",
        "Optimized performance for smooth 60fps gameplay"
      ]
    },
    {
      id: "arrow-progression",
      module: "Progression System",
      name: "Boss Encounters and Unlockable Content",
      shortDescription: "Designed boss fight mechanics and progression system with unlockable bows and arrows.",
      fullDescription: "Architected a comprehensive progression system featuring challenging boss encounters, unlockable weapons, and cosmetic rewards. Balanced difficulty curves and reward systems to maintain player engagement while providing meaningful progression milestones.",
      bulletPoints: [
        "Designed challenging boss encounter mechanics",
        "Created unlockable bow and arrow progression system",
        "Implemented reward and achievement systems",
        "Built balanced difficulty and progression curves",
        "Developed cosmetic customization features"
      ]
    },
    {
      id: "arrow-monetization",
      module: "Business Systems",
      name: "Integrated Monetization Strategy",
      shortDescription: "Implemented balanced monetization with rewarded ads and IAP without disrupting gameplay flow.",
      fullDescription: "Designed and implemented a player-friendly monetization system combining rewarded video ads with optional in-app purchases. Ensured monetization elements enhance rather than disrupt the core gameplay experience while maintaining fair progression for all players.",
      bulletPoints: [
        "Integrated rewarded video ads with gameplay progression",
        "Designed optional IAP for cosmetics and convenience",
        "Maintained fair free-to-play progression balance",
        "Implemented non-intrusive ad placement strategy",
        "Created analytics tracking for monetization optimization"
      ]
    }
  ]
},
{
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
},
{
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
  screenshots: [
    // No screenshots available
  ],
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
},
{
  id: 11,
  title: "Hop Ball",
  description: "Endless arcade game with bouncing rhythm-based mechanics.",
  longDescription: "Control a bouncing ball as it hops across pillars in this visually vibrant and highly addictive arcade game. Swipe to guide the ball, maintain momentum, collect skins, and set high scores across dynamic and ever-changing environments. Developed full game loop, endless procedural generation, collectible skins, and integrated IAP and ads for a polished mobile experience.",
  image: "/assets/Images/Projects/HopBall/ProjectIcon.jpg",
  category: "Arcade",
  technologies: ["Unity 3D", "C#", "Unity Ads", "Scriptable Objects"],
  links: {
    demo: "",
    github: "",
    store: "https://play.google.com/store/apps/details?id=com.example.alphareturns",
    youtube: ""
  },
  featured: false,
  developmentTime: "4 months",
  teamSize: "Solo Developer",
  downloads: "15K+",
  rating: "4.5/5",
  features: [
    "Physics-based bouncing and swipe controls",
    "Endless procedural level generation",
    "Collectible ball and pillar skins",
    "Score combos, multipliers, and unlocks",
    "IAP and rewarded ads integration",
    "Optimized for casual play and mobile performance"
  ],
  screenshots: [
    "/assets/Images/Projects/HopBall/Screenshot_1.jpg",
    "/assets/Images/Projects/HopBall/Screenshot_2.jpg",
    "/assets/Images/Projects/HopBall/Screenshot_3.jpg",
    "/assets/Images/Projects/HopBall/Screenshot_4.jpg",
    "/assets/Images/Projects/HopBall/Screenshot_5.jpg",
    "/assets/Images/Projects/HopBall/Screenshot_6.jpg",
    "/assets/Images/Projects/HopBall/Screenshot_7.jpg",
    "/assets/Images/Projects/HopBall/Screenshot_8.jpg"
  ],
  contributions: [
    {
      id: "hopball-physics",
      module: "Physics System",
      name: "Bouncing Ball Physics and Controls",
      shortDescription: "Developed realistic ball physics with responsive swipe controls for addictive gameplay.",
      fullDescription: "Created a physics system that accurately simulates ball bouncing mechanics with momentum conservation and realistic collision responses. Implemented intuitive swipe controls that provide precise ball guidance while maintaining challenging gameplay.",
      bulletPoints: [
        "Developed realistic ball bouncing and momentum physics",
        "Implemented precise swipe-based control system",
        "Created responsive collision detection and reactions",
        "Built momentum conservation and trajectory prediction",
        "Optimized physics calculations for smooth mobile performance"
      ]
    },
    {
      id: "hopball-procedural",
      module: "Level Generation",
      name: "Endless Procedural Generation",
      shortDescription: "Architected procedural level generation system for infinite replayability.",
      fullDescription: "Designed and implemented a sophisticated procedural generation system that creates endless, varied level layouts while maintaining consistent difficulty progression and engaging gameplay patterns.",
      bulletPoints: [
        "Created algorithmic level generation for endless gameplay",
        "Implemented difficulty progression and balancing systems",
        "Designed varied pillar patterns and obstacle placement",
        "Built level validation and quality assurance systems",
        "Optimized generation performance for real-time creation"
      ]
    },
    {
      id: "hopball-progression",
      module: "Monetization",
      name: "Skin Collection and Monetization",
      shortDescription: "Developed collectible skin system with balanced monetization and progression rewards.",
      fullDescription: "Created an engaging skin collection system featuring unlockable balls and pillars through gameplay achievements and optional purchases. Designed balanced monetization that enhances rather than disrupts the core gameplay experience.",
      bulletPoints: [
        "Designed collectible ball and pillar skin systems",
        "Implemented achievement-based unlock progression",
        "Created balanced free-to-play monetization model",
        "Built reward systems and daily challenges",
        "Integrated analytics for monetization optimization"
      ]
    }
  ]
},
{
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
},
{
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
}

];

export const categories = ["All", "VR", "Shooter", "Puzzle", "Platformer", "Arcade", "Racing"];
