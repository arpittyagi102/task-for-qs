interface Ranking {
  id: number;
  universityId: number;
  year: number;
  rank: number;
  university?: University;
}

interface University {
  id: number;
  name: string;
  country: string;
  logoUrl: string;
  description: string;
  rankings?: Ranking[];
}

export { Ranking, University }
