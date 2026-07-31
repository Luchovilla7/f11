export interface CareerSeason {
  age: number;
  seasonYear: string;
  num: number;
  club: string;
  clubCode: 'misiones' | 'barcelona' | 'berlin' | 'osaka' | 'seul';
  goals: number;
  games: number;
  assists: number;
  xG: number;
  xA: number;
  shotsPer90: number;
  keyPassesPer90: number;
  dribblesSuccessPct: number;
  rating: number;
  trophiesWon?: string[];
}

export interface TrophyItem {
  icon: string;
  name: string;
  year: string;
  category?: string;
}

export interface ClubPalmares {
  club: string;
  period: string;
  titles: number;
  clubCode: string;
  trophies: TrophyItem[];
}

export interface SeleccionSeason {
  year: number;
  event: string;
  goals: number | string;
  games: number | string;
  assists?: number;
  xG?: number;
  link?: string;
  isSpecial?: boolean;
}

export interface MatchScorer {
  name: string;
  minute: string;
  isVillalba?: boolean;
  isDebut?: boolean;
}

export interface MatchDetail {
  id: string;
  date: string;
  type: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  homeScorers: MatchScorer[];
  awayScorers: MatchScorer[];
  villalbaPerformance?: {
    minutesPlayed: number;
    goals: number;
    assists: number;
    shots: number;
    xG: number;
    rating: number;
    keyMoment: string;
  };
}

export interface ShotPoint {
  id: string;
  x: number; // 0-100% on pitch
  y: number; // 0-100% on pitch
  xG: number;
  result: 'goal' | 'saved' | 'woodwork' | 'missed';
  bodyPart: 'left_foot' | 'right_foot' | 'head';
  match: string;
  minute: number;
  distanceMeters: number;
}

export interface ProvincialPalmares {
  prov: string;
  titulos: number;
  years: number[];
}

export interface SudamericanoPalmares {
  region: string;
  pais: string;
  flag: string;
  titulos: number;
  years: number[];
}

export interface RadarAttribute {
  attribute: string;
  value: number;
  fullMark: number;
  benchmark: number; // Average elite winger benchmark
}
