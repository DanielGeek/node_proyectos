export interface ISoccerPlay {
  attacker: (name: string) => any
}

export interface ITeam {
  position: (name: string, tShirt: number, skills: any[]) => any
}
