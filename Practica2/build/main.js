"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contact_book_1 = require("./contact-book");
const contact_1 = require("./models/contact");
const mail_1 = require("./models/mail");
const address_1 = require("./models/address");
const mobile_phone_1 = require("./models/mobile-phone");
const fixed_phone_1 = require("./models/fixed-phone");
const contact1 = new contact_1.default("Olga", "Ramirez", "12345708E", new Date("08/20/1989"), "Amarillo", contact_1.Genre.Woman, [
    new address_1.default("Paseo de la Castellana", 200, "3º", "A", 28022, "Madrid", "Madrid"),
], [new mail_1.default(mail_1.MailType.Personal, "olga.ramirez@gmail.com")], [new mobile_phone_1.default(616356343), new fixed_phone_1.default(91213213)], "Estudiante de psicología");
const contact2 = new contact_1.default("Pepe", "Pérez", "90736487K", new Date("02/29/1992"), "Rojo", contact_1.Genre.Man, [
    new address_1.default("Plaza de España", 1, "7º", "8", 50781, "Aranda del Duero", "Burgos"),
], [new mail_1.default(mail_1.MailType.Business, "profesordemates@gmail.com")], [new mobile_phone_1.default(789671759)], "El profesor de mates :)");
const contact3 = new contact_1.default("Sergio", "Garriguez", "83746157F", new Date("07/14/2000"), "Blanco", contact_1.Genre.Man, [new address_1.default("Calle Colombia", 35, "1º", "B", 45890, "Madrid", "Madrid")], [new mail_1.default(mail_1.MailType.Personal, "sergi.garriguez@hotmail.com")], [new mobile_phone_1.default(671548245)], "Compi de yoga");
const contactBook = new contact_book_1.default();
contactBook.addContact(contact1);
contactBook.addContact(contact2);
contactBook.addContact(contact3);
contactBook.showContacts();
contactBook.updateContact("83746157F", new address_1.default("Calle nueva", 35, "1º", "B", 45890, "Madrid", "Madrid"), new fixed_phone_1.default(90623432423), new mail_1.default(mail_1.MailType.Personal, "nuevo@hotmail.com"));
contactBook.showContacts();
//# sourceMappingURL=main.js.map