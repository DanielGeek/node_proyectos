export interface ISoccerPlay {
  attacker: (name: string) => void
}

export interface ITeam {
  position: (name: string, tShirt: number, skills: any[]) => void
}
