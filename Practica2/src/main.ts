import ContactBook from "./contact-book";
import Contact, { Genre } from "./models/contact";
import Mail, { MailType } from "./models/mail";
import Address from "./models/address";
import MobilePhone from "./models/mobile-phone";
import FixedPhone from "./models/fixed-phone";

const contact1 = new Contact(
  "Olga",
  "Ramirez",
  "12345708E",
  new Date("08/20/1989"),
  "Amarillo",
  Genre.Woman,
  [
    new Address(
      "Paseo de la Castellana",
      200,
      "3º",
      "A",
      28022,
      "Madrid",
      "Madrid"
    ),
  ],
  [new Mail(MailType.Personal, "olga.ramirez@gmail.com")],
  [new MobilePhone(616356343), new FixedPhone(91213213)],
  "Estudiante de psicología"
);
const contact2 = new Contact(
  "Pepe",
  "Pérez",
  "90736487K",
  new Date("02/29/1992"),
  "Rojo",
  Genre.Man,
  [
    new Address(
      "Plaza de España",
      1,
      "7º",
      "8",
      50781,
      "Aranda del Duero",
      "Burgos"
    ),
  ],
  [new Mail(MailType.Business, "profesordemates@gmail.com")],
  [new MobilePhone(789671759)],
  "El profesor de mates :)"
);
const contact3 = new Contact(
  "Sergio",
  "Garriguez",
  "83746157F",
  new Date("07/14/2000"),
  "Blanco",
  Genre.Man,
  [new Address("Calle Colombia", 35, "1º", "B", 45890, "Madrid", "Madrid")],
  [new Mail(MailType.Personal, "sergi.garriguez@hotmail.com")],
  [new MobilePhone(671548245)],
  "Compi de yoga"
);

const contactBook = new ContactBook();
contactBook.addContact(contact1);
contactBook.addContact(contact2);
contactBook.addContact(contact3);

contactBook.showContacts();

contactBook.updateContact(
  "83746157F",
  new Address("Calle nueva", 35, "1º", "B", 45890, "Madrid", "Madrid"),
  new FixedPhone(90623432423),
  new Mail(MailType.Personal, "nuevo@hotmail.com")
);

contactBook.showContacts();
