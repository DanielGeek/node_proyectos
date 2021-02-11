import { Team } from '../models/team-model'

describe('Team class', () => {
  it('Position', () => {
    const team = new Team()
    const position = {
      name: 'KAKA',
      tShirt: 10,
      skills: ['Kick hard', 'Run fast', 'Jump high']
    }
    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['KAKA', 10, ['Kick hard', 'Run fast', 'Jump high']])
  })

  it('Soccer Play', () => {
    const soccerPlay = new Team()

    expect(soccerPlay.attacker('')).toBe('attacker')
  })
})
