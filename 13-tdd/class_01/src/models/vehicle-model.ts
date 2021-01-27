import { VehicleHelper } from '../helpers/vehicle-model-helper'

export class VehicleModel {
  constructor (private readonly vehicle: VehicleHelper) { }

  getName (): string {
    return this.vehicle.name
  }

  getModel (): string {
    return this.vehicle.model
  }

  getYear (): number {
    return this.vehicle.year
  }

  getPrice (): number {
    return this.vehicle.price
  }

  getInventory (): boolean {
    return this.vehicle.inventory
  }
}
