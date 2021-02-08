import { FoodHelper } from '../helpers/food-model-helper'

export class FoodModel {
  constructor (private readonly foodHelper: FoodHelper) {}

  getName (): string {
    return this.foodHelper.name
  }

  getDescription (): string {
    return this.foodHelper.description
  }

  getPrice (): number {
    return this.foodHelper.price
  }

  getInventory (): number {
    return this.foodHelper.inventory
  }

  getFood (): any {
    return Object.assign(this, this.foodHelper)
  }
}
