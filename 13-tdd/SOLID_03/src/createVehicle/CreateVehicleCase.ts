import { Vehicle } from '../entities/IVehicle';
import { IVehicleRepository } from '../repositories/IVehicleRepository';
import { CreateVehicleDTO } from './CreateVehicleDTO';

export class CreateVehicle {
  constructor(private vehicleRepository: IVehicleRepository) {

  }

  async execute(data: CreateVehicleDTO) {
    const vehicleExist = await this.vehicleRepository.findBy(data.id)

    if (vehicleExist) {
      throw new Error('Vehicle exist in data base')
    }

    const vehicle = new Vehicle(data)
    await this.vehicleRepository.save(vehicle)
  }
}