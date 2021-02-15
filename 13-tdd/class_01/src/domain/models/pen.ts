export class Pen {
  constructor (private readonly message: string) {}

  write (): string {
    return this.message
  }
}
