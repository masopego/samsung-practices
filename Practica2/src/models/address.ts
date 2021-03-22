export default class Address {
  street: string;
  number: number;
  floor: string;
  letter: string;
  postalCode: number;
  city: string;
  region: string;

  constructor(
    street: string,
    number: number,
    floor: string,
    letter: string,
    postalCode: number,
    city: string,
    region: string
  ) {
    this.street = street;
    this.number = number;
    this.floor = floor;
    this.letter = letter;
    this.postalCode = postalCode;
    this.city = city;
    this.region = region;
  }

  show() {
    console.log(`
    street:  ${this.street},
    number: ${this.number},
    floor: ${this.floor},
    letter: ${this.letter},
    postalCode: ${this.postalCode},
    city: ${this.city},
    region: ${this.region}
    `);
  }
}
