import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  it('Class Food', () => {
    const foodModel = new FoodModel('Platano', 'Fruta con potacion', 20)

    expect(foodModel.getName()).toEqual('Platano')
    expect(foodModel.getDescription()).toEqual('Fruta con potacion')
    expect(foodModel.getPrice()).toEqual(20)
  })
})
