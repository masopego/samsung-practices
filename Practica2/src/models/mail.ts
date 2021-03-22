export enum MailType {
  Business = "Trabajo",
  Personal = "Personal",
}

export default class Mail {
  type: MailType;
  address: string;

  constructor(type: MailType, address: string) {
    this.type = type;
    this.address = address;
  }

  show() {
    console.log(`
    Type: ${this.type},
    Number: ${this.address},
    `);
  }
}
