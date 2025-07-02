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
  title: "Poker VR",
  description: "Multiplayer VR poker game with realistic physics and hand tracking.",
  longDescription: "Step into a virtual casino and experience real-time multiplayer poker with fully immersive hand-tracked gestures, avatar interactions, and lifelike physics. Built for Oculus Quest, Poker VR delivers the feel of live poker from the comfort of your home. Developed core gameplay, multiplayer logic, realistic physics, and gesture-based interactions as part of the VR team.",
  image: "src/assets/Images/Projects/PokerVR/ProjectIcon.jpg",
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
  ]
},
{
  id: 2,
  title: "Zombie Fever",
  description: "Shoot, survive, and escape the zombie apocalypse!",
  longDescription: "Step into a post-apocalyptic world overrun by the undead. Armed with powerful weapons and quick reflexes, fight your way through zombie-infested streets to reach the last research center. Survive intense shootouts, use power-ups, rescue hostages, and stay alive in King of the Hill or Horde modes. Shoot, run, and survive—this is humanity's last stand. As the sole Unity developer, I spearheaded the entire game lifecycle, implemented core systems, optimized performance for Android, and managed Play Store release and updates.",
  image: "src/assets/Images/Projects/ZombieFever/ProjectIcon.jpg",
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
    "src/assets/Images/Projects/ZombieFever/Screenshot_1.jpg",
    "src/assets/Images/Projects/ZombieFever/Screenshot_2.jpg",
    "src/assets/Images/Projects/ZombieFever/Screenshot_3.jpg", 
    "src/assets/Images/Projects/ZombieFever/Screenshot_4.jpg",
    "src/assets/Images/Projects/ZombieFever/Screenshot_5.jpg",
    "src/assets/Images/Projects/ZombieFever/Screenshot_6.jpg"
  ]
}
,
{
  id: 3,
  title: "War Ground",
  description: "Offline third-person shooting game with dynamic combat.",
  longDescription: "Fast-paced TPS shooter with weapon inventory, missions, smart AI, and offline gameplay. Unlock guns, complete objectives, and fight enemy forces across challenging battlegrounds with responsive mobile controls and stunning visuals. As the sole developer, I built the entire game, including combat systems, inventory logic, AI, in-app purchases, rewarded ads, and publishing pipeline, all optimized for low to mid-range Android devices.",
  image: "src/assets/Images/Projects/WarGround/ProjectIcon.jpg",
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
    "src/assets/Images/Projects/WarGround/Screenshot_1.jpg",
    "src/assets/Images/Projects/WarGround/Screenshot_2.jpg",
    "src/assets/Images/Projects/WarGround/Screenshot_3.jpg", 
    "src/assets/Images/Projects/WarGround/Screenshot_4.jpg",
    "src/assets/Images/Projects/WarGround/Screenshot_5.jpg",
    "src/assets/Images/Projects/WarGround/Screenshot_6.jpg",
    "src/assets/Images/Projects/WarGround/Screenshot_7.jpg"
  ]
}
,
{
  id: 4,
  title: "Word Coach",
  description: "Relaxing crossword word puzzle game with 6,000+ levels.",
  longDescription: "Swipe, solve, and sharpen your vocabulary with 6,000+ crossword puzzles. Enjoy a relaxing and immersive word journey across beautifully designed worlds filled with daily challenges, brain boosters, and vocabulary training. As the sole Unity developer, I implemented modular crossword and word-connect logic, adaptive level systems, hint mechanics, engaging visuals, and managed deployment and updates.",
  image: "src/assets/Images/Projects/WordCoach/ProjectIcon.jpg",
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
    "src/assets/Images/Projects/WordCoach/Screenshot_1.jpg",
    "src/assets/Images/Projects/WordCoach/Screenshot_2.jpg",
    "src/assets/Images/Projects/WordCoach/Screenshot_3.jpg", 
    "src/assets/Images/Projects/WordCoach/Screenshot_4.jpg",
    "src/assets/Images/Projects/WordCoach/Screenshot_5.jpg",
    "src/assets/Images/Projects/WordCoach/Screenshot_6.jpg",
    "src/assets/Images/Projects/WordCoach/Screenshot_7.jpg",
    "src/assets/Images/Projects/WordCoach/Screenshot_8.jpg"
  ]
}
,
{
  id: 5,
  title: "World of Rabin",
  description: "A logical 2D platformer with minimalist puzzle design.",
  longDescription: "Navigate a mystical realm filled with logical platforming challenges. Help two friends escape from the depths of Rabin by solving increasingly complex puzzles across beautifully crafted stages. As the sole Unity 2D developer, I handled every aspect including game architecture, core mechanics, level design, minimal UI/UX, visuals, sound, optimization, and deployment to Play Store.",
  image: "src/assets/Images/Projects/WorldOfRabin/ProjectIcon.jpg",
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
    "src/assets/Images/Projects/WorldOfRabin/Screenshot_1.jpg",
    "src/assets/Images/Projects/WorldOfRabin/Screenshot_2.jpg",
    "src/assets/Images/Projects/WorldOfRabin/Screenshot_3.jpg", 
    "src/assets/Images/Projects/WorldOfRabin/Screenshot_4.jpg",
    "src/assets/Images/Projects/WorldOfRabin/Screenshot_5.jpg",
    "src/assets/Images/Projects/WorldOfRabin/Screenshot_6.jpg"
  ]
}
,
{
  id: 6,
  title: "Roulette Wheel VR",
  description: "Multiplayer roulette game with gesture-based betting in VR.",
  longDescription: "Experience the thrill of live roulette in virtual reality. Place your bets with intuitive hand gestures, interact with a lifelike wheel, and enjoy multiplayer casino realism with voice chat, animated avatars, and physics-based chips—all in an immersive VR space. Developed core VR gameplay, hand-tracked betting gestures, multiplayer logic, and optimized for Oculus Quest performance.",
  image: "src/assets/Images/Projects/RouletteWheelVR/ProjectIcon.jpg",
  category: "VR Casino",
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
  ]
},
{
  id: 7,
  title: "Alpha Returns",
  description: "Web3 multiplayer PvP shooter with tokenized assets and crypto rewards.",
  longDescription: "Alpha Returns is a cutting-edge multiplayer PvP shooter that blends traditional FPS action with a full Web3 NFT economy. Built in Unity, it features scalable multiplayer with Photon, blockchain-backed inventory and NFT asset rewards, real-time analytics, hybrid economy (IAP + tokens), and high-end mobile optimization. As Lead Unity Developer, I architected the project, implemented gameplay, Web3 systems, technical standards, and led a cross-functional team from prototype to release.",
  image: "src/assets/Images/Projects/AlphaReturns/ProjectIcon.jpg",
  category: "Shooter / Web3",
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
    "src/assets/Images/Projects/AlphaReturns/Environment_Selection.jpeg",
    "src/assets/Images/Projects/AlphaReturns/First_person.png",
    "src/assets/Images/Projects/AlphaReturns/iap.jpeg",
    "src/assets/Images/Projects/AlphaReturns/main_menu_2.jpeg",
    "src/assets/Images/Projects/AlphaReturns/main_menu.jpeg",
    "src/assets/Images/Projects/AlphaReturns/missions.jpeg",
    "src/assets/Images/Projects/AlphaReturns/multiple_Environments.jpg",
    "src/assets/Images/Projects/AlphaReturns/shop.jpeg",
    "src/assets/Images/Projects/AlphaReturns/Spin_Wheel.png",
    "src/assets/Images/Projects/AlphaReturns/third_person.png",
    "src/assets/Images/Projects/AlphaReturns/weapon_selection.jpeg",
    "src/assets/Images/Projects/AlphaReturns/Weapons_Showcase.webp.png"
  ]
},{
  id: 8,
  title: "Arrow Twist",
  description: "Arcade reflex game with rotating targets and precision shooting.",
  longDescription: "Shoot arrows into spinning logs without hitting obstacles. Time your shots, dodge spikes, slash apples, and face off against bosses every few levels. Unlock special bows and arrows while testing your reflexes in this high-speed tap game. Built as a solo developer, I designed dynamic rotation mechanics, progression, monetization, and polished the game for responsive, satisfying play.",
  image: "src/assets/Images/Projects/ArrowTwist/ProjectIcon.jpg",
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
    "src/assets/Images/Projects/ArrowTwist/Screenshot_1.png",
    "src/assets/Images/Projects/ArrowTwist/Screenshot_2.png",
    "src/assets/Images/Projects/ArrowTwist/Screenshot_3.png",
    "src/assets/Images/Projects/ArrowTwist/Screenshot_4.png",
    "src/assets/Images/Projects/ArrowTwist/Screenshot_5.png",
    "src/assets/Images/Projects/ArrowTwist/Screenshot_6.png",
    "src/assets/Images/Projects/ArrowTwist/Screenshot_7.png",
    "src/assets/Images/Projects/ArrowTwist/Screenshot_8.png"
  ]
},
{
  id: 9,
  title: "Car Drift Racing",
  description: "Realistic mobile drift racing with fine-tuned car physics.",
  longDescription: "Master the art of drifting in this fast-paced mobile racer. Perform smooth drifts, unlock high-performance cars, and race across visually diverse tracks. Designed and built for precise handling, rewarding style-based gameplay, and seamless upgrades and monetization. Led the full project, implementing custom drift physics, track design, monetization, and optimization for smooth play on all Android devices.",
  image: "src/assets/Images/Projects/CarDriftRacing/ProjectIcon.jpg",
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
    "src/assets/Images/Projects/CarDriftRacing/Screenshot_1.jpg",
    "src/assets/Images/Projects/CarDriftRacing/Screenshot_2.jpg",
    "src/assets/Images/Projects/CarDriftRacing/Screenshot_3.jpg",
    "src/assets/Images/Projects/CarDriftRacing/Screenshot_4.jpg",
    "src/assets/Images/Projects/CarDriftRacing/Screenshot_5.jpg",
    "src/assets/Images/Projects/CarDriftRacing/Screenshot_6.jpg",
    "src/assets/Images/Projects/CarDriftRacing/Screenshot_7.jpg"
  ]
},
{
  id: 10,
  title: "Fortune Funnel VR",
  description: "Physics-based VR puzzle game with funnels, gravity, and haptic feedback.",
  longDescription: "Solve dynamic physics puzzles by guiding objects through interactive funnels, ramps, and traps in VR. Fortune Funnel VR blends tactile object handling with puzzle-solving in a uniquely satisfying, immersive environment built for Oculus Quest. Developed and optimized full VR puzzle gameplay, including gesture-based object handling, real-time physics, modular level design, and immersive feedback systems.",
  image: "src/assets/Images/Projects/FortuneFunnelVR/ProjectIcon.jpg",
  category: "VR Puzzle",
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
  ]
},
{
  id: 11,
  title: "Hop Ball",
  description: "Endless arcade game with bouncing rhythm-based mechanics.",
  longDescription: "Control a bouncing ball as it hops across pillars in this visually vibrant and highly addictive arcade game. Swipe to guide the ball, maintain momentum, collect skins, and set high scores across dynamic and ever-changing environments. Developed full game loop, endless procedural generation, collectible skins, and integrated IAP and ads for a polished mobile experience.",
  image: "src/assets/Images/Projects/HopBall/ProjectIcon.jpg",
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
    "src/assets/Images/Projects/HopBall/Screenshot_1.jpg",
    "src/assets/Images/Projects/HopBall/Screenshot_2.jpg",
    "src/assets/Images/Projects/HopBall/Screenshot_3.jpg",
    "src/assets/Images/Projects/HopBall/Screenshot_4.jpg",
    "src/assets/Images/Projects/HopBall/Screenshot_5.jpg",
    "src/assets/Images/Projects/HopBall/Screenshot_6.jpg",
    "src/assets/Images/Projects/HopBall/Screenshot_7.jpg",
    "src/assets/Images/Projects/HopBall/Screenshot_8.jpg"
  ]
},
{
  id: 12,
  title: "Nut Color Sort",
  description: "Satisfying puzzle game to sort nuts by color and type.",
  longDescription: "Relax and challenge your brain in this colorful sorting puzzle. Tap to move nuts across branches and organize them by type. Plan your moves carefully and unwind with smooth visuals and satisfying animations across hundreds of handcrafted levels. Developed end-to-end with stack and color-match mechanics, modular level system, monetization, and polished UX.",
  image: "src/assets/Images/Projects/NutColorSort/ProjectIcon.jpg",
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
    "src/assets/Images/Projects/NutColorSort/Screenshot_1.jpg",
    "src/assets/Images/Projects/NutColorSort/Screenshot_2.jpg",
    "src/assets/Images/Projects/NutColorSort/Screenshot_3.jpg",
    "src/assets/Images/Projects/NutColorSort/Screenshot_4.jpg",
    "src/assets/Images/Projects/NutColorSort/Screenshot_5.jpg",
    "src/assets/Images/Projects/NutColorSort/Screenshot_6.jpg"
  ]
},
{
  id: 13,
  title: "Offroad Driving",
  description: "Realistic off-road driving game with dynamic terrain physics.",
  longDescription: "Experience extreme terrain driving with realistic vehicle physics and immersive environments. Choose from a range of vehicles and conquer hills, mud, water, and rough roads. Explore open landscapes and push your off-road skills to the limit. Led all development, including dynamic physics, vehicle systems, environments, progression, monetization, and mobile optimization.",
  image: "src/assets/Images/Projects/OffroadDriving/ProjectIcon.jpg",
  category: "Simulation",
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
    "src/assets/Images/Projects/OffroadDriving/Screenshot_1.jpg",
    "src/assets/Images/Projects/OffroadDriving/Screenshot_2.jpg",
    "src/assets/Images/Projects/OffroadDriving/Screenshot_3.jpg",
    "src/assets/Images/Projects/OffroadDriving/Screenshot_4.jpg",
    "src/assets/Images/Projects/OffroadDriving/Screenshot_5.jpg",
    "src/assets/Images/Projects/OffroadDriving/Screenshot_6.jpg"
  ]
}

];

export const categories = ["All", "RPG", "Action", "Puzzle", "Racing", "VR", "Mobile"];
