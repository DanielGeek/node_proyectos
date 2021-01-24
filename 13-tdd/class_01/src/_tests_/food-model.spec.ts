import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  it('Class Food', () => {
    const foodModel = new FoodModel('Platano', 'Fruta con potasio', 1)

    expect(foodModel.getName()).toEqual('Platano')
    expect(foodModel.getDescription()).toEqual('Fruta con potasio')
    expect(foodModel.getPrice()).toBe(1)
  })
})
