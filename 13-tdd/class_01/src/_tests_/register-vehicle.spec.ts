import { RegisterVehicle } from '../controllers/register-vehicle'
// pruebas para saber si no existe una propiedad
describe('RegisterVehicle', () => {
  test('the name does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        model: 'DXT',
        year: 2020,
        color: 'color'
        // name: 'Nissan',
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the: name'))
  })

  test('the model does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        year: 2020,
        color: 'color'
        // model: 'DXT',
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the: model'))
  })

  test('the year does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        color: 'color'
        // year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the: year'))
  })

  test('the color does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        year: 2020
        // color: 'color'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the: color'))
  })
})
