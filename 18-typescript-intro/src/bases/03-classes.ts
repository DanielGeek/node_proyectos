export class Pokemon {

  // public id: number;
  // public name: string;

  get imageUrl(): string {
    return `https://pokemon.com/${ this.id }.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    // public imageUrl: string
  ) {}

  scream() {
    console.log(`${ this.name.toUpperCase() }!!!`);
    this.speak();
  }

  speak() {
    console.log(`${ this.name }, ${ this.name }`);
  }

  // constructor( id: number, name: string ) {
  //   this.id = id;
  //   this.name = name;
  //   console.log('called constructor');
  // }
}

export const charmander = new Pokemon( 4, 'Charmander' );

// charmander.id = 10;
// charmander.name = 'Mew';
console.log(charmander.imageUrl);

charmander.scream();
// charmander.speak();