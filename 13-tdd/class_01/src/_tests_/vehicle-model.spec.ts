import { VehicleModel } from '../domain/models/vehicle-model'
import { VehicleHelper } from '../helpers/vehicle-model-helper'

describe('Classes', () => {
  it('Class VehicleModel', () => {
    const vehicleModel = new VehicleModel({
      name: 'Nissan',
      model: 'DXT',
      year: 2020,
      price: 25,
      inventory: true
    })

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DXT')
    expect(vehicleModel.getYear()).toBe(2020)
    expect(vehicleModel.getPrice()).toBe(25)
    expect(vehicleModel.getInventory()).toBe(true)
  })

  it('Vehicle Helper', () => {
    const vehicleHelper = new VehicleHelper()

    expect(vehicleHelper).toEqual(vehicleHelper)
  })
})
