
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

// Import all individual game files
import { pokerVR } from './games/pokerVR';
import { zombieFever } from './games/zombieFever';
import { warGround } from './games/warGround';
import { wordCoach } from './games/wordCoach';
import { worldOfRabin } from './games/worldOfRabin';
import { rouletteWheelVR } from './games/rouletteWheelVR';
import { alphaReturns } from './games/alphaReturns';
import { arrowTwist } from './games/arrowTwist';
import { carDriftRacing } from './games/carDriftRacing';
import { fortuneFunnelVR } from './games/fortuneFunnelVR';
import { hopBall } from './games/hopBall';
import { nutColorSort } from './games/nutColorSort';
import { offroadDriving } from './games/offroadDriving';

// Export all games as a consolidated array
export const games: Game[] = [
  pokerVR,
  zombieFever,
  warGround,
  wordCoach,
  worldOfRabin,
  rouletteWheelVR,
  alphaReturns,
  arrowTwist,
  carDriftRacing,
  fortuneFunnelVR,
  hopBall,
  nutColorSort,
  offroadDriving
];

export const categories = ["All", "VR", "Shooter", "Puzzle", "Platformer", "Arcade", "Racing"];
