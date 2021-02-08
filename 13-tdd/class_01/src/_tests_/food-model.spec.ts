import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  it('Class Food', () => {
    const foodModel = new FoodModel({
      name: 'Platano',
      description: 'Fruta con potasio',
      price: 1,
      inventory: 50
    })

    expect(foodModel.getFood()).toEqual(foodModel)
    expect(foodModel.getName()).toEqual('Platano')
    expect(foodModel.getDescription()).toEqual('Fruta con potasio')
    expect(foodModel.getPrice()).toBe(1)
    expect(foodModel.getInventory()).toBe(50)
  })
})
