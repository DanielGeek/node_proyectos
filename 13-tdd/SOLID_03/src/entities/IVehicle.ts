export class Vehicle {
  public id: number
  public name: string
  public description: string

  constructor(props: Vehicle) {
    Object.assign(this, props)
  }
}
