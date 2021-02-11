import { Vehicle } from '../entities/IVehicle';

export interface IVehicleRepository {
  findBy(id: number): Promise<Vehicle>
  save(vehicle: Vehicle): Promise<void>
}