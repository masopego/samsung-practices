import Address from "./address";
import Mail from "./mail";
import Phone from "./phone";

export enum Genre {
  Man = "Hombre",
  Woman = "Mujer",
}

export type Color =
  | "Amarillo"
  | "Rojo"
  | "Azul"
  | "Verde"
  | "Blanco"
  | "Morado"
  | "Negro"
  | "Naranja"
  | "Rosa"
  | "Marrón";

export default class Contact {
  name: string;
  lastName: string;
  identityCard: string;
  birthday: Date;
  favouriteColor: Color;
  genre: Genre;
  addresses: Address[];
  mails: Mail[];
  phones: Phone[];
  notes: string;

  constructor(
    name: string,
    lastName: string,
    identityCard: string,
    birthday: Date,
    favouriteColor: Color,
    genre: Genre,
    addresses: Address[],
    mails: Mail[],
    phones: Phone[],
    notes: string
  ) {
    this.name = name;
    this.lastName = lastName;
    this.identityCard = identityCard;
    this.birthday = birthday;
    this.favouriteColor = favouriteColor;
    this.genre = genre;
    this.addresses = addresses;
    this.mails = mails;
    this.phones = phones;
    this.notes = notes;
  }
  age(): number {
    const today: Date = new Date();

    const numDays =
      (today.getTime() - this.birthday.getTime()) / (1000 * 60 * 60 * 24);

    const age = Math.floor(numDays / 365);
    return age;
  }

  modifyAddress(address: Address) {
    this.addresses = [address];
  }
  modifyPhone(phone: Phone) {
    this.phones = [phone];
  }

  modifyMail(mail: Mail) {
    this.mails = [mail];
  }

  show() {
    console.log(`
    Name: ${this.name},
    Lastname: ${this.lastName},
    IdentityCard: ${this.identityCard},
    Birthday: ${this.birthday.toDateString()},
    Age: ${this.age()},
    FavouriteColor: ${this.favouriteColor},
    Genre: ${this.genre},
    Notes: ${this.notes},
    `);

    console.log("Addresses");
    this.addresses.forEach((address) => address.show());

    console.log("Mails");
    this.mails.forEach((mail) => mail.show());

    console.log("Phones");

    this.phones.forEach((phone) => phone.show());

    console.log(` ------------------------ `);
  }
}
