import { Bird, Eagle, Penguin } from '../domain/models/bird-model'

describe('Bird', () => {
  test('Should Fly Bird', () => {
    const bird = new Bird({
      name: 'Bird',
      age: 30,
      origen: 'North America'
    })

    expect(bird.fly()).toEqual('Bird')
  })

  test('Sould Fly Eagle', () => {
    const eagle = new Eagle({
      name: 'Eagle',
      age: 30,
      origen: 'North America'
    })

    expect(eagle.fly()).toEqual('Eagle')
  })

  test('Souldn`t Fly Pinguin', () => {
    const penguin = new Penguin({
      name: 'Penguin',
      age: 30,
      origen: 'Antartic'
    })

    expect(penguin.fly()).toEqual(new Error('I can`t Fly'))
  })

  test('Sould walk and swin Pinguin', () => {
    const penguin = new Penguin({
      name: 'Penguin',
      age: 30,
      origen: 'Antartic'
    })

    expect(penguin.walk()).toBe('I can walk')
    expect(penguin.swim()).toBe('I can swim')
  })
})
