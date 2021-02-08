export class MissingFormalParameter extends Error {
  constructor (public name: string) {
    super(`Error In The Parameter: ${name}`)
  }
}
