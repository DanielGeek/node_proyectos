export class RegisterVehicle {
  handle (httpRequest: any): any {
    if (httpRequest.body.name === undefined) {
      return {
        statusCode: 400,
        body: new Error('error in the: name')
      }
    }
    if (httpRequest.body.model === undefined) {
      return {
        statusCode: 400,
        body: new Error('error in the: model')
      }
    }
  }
}
