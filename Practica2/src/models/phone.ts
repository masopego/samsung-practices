export default abstract class Phone {
  number: number;

  constructor(number: number) {
    this.number = number;
  }

  abstract type(): string;

  show() {
    console.log(`
    Type: ${this.type()},
    Number: ${this.number},
    `);
  }
}
