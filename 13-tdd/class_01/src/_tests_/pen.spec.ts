import { Pen } from '../domain/models/pen'

describe('Pen', () => {
  test('Write', () => {
    const pen = new Pen('Hola Mundo')
    expect(pen.write()).toBe('Hola Mundo')
  })
})
