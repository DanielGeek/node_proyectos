import { ISoccerPlay, ITeam } from '../interfaces/ITeam'

export class Team implements ITeam, ISoccerPlay {
  position (name: string, tShirt: number, skills: any[]): any[] {
    return [
      name, tShirt, skills
    ]
  }

  attacker (name: string): string {
    name = 'attacker'
    return name
  }
}
