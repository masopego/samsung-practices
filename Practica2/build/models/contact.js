"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genre = void 0;
var Genre;
(function (Genre) {
    Genre["Man"] = "Hombre";
    Genre["Woman"] = "Mujer";
})(Genre = exports.Genre || (exports.Genre = {}));
class Contact {
    constructor(name, lastName, identityCard, birthday, favouriteColor, genre, addresses, mails, phones, notes) {
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
    age() {
        const today = new Date();
        const numDays = (today.getTime() - this.birthday.getTime()) / (1000 * 60 * 60 * 24);
        const age = Math.floor(numDays / 365);
        return age;
    }
    modifyAddress(address) {
        this.addresses = [address];
    }
    modifyPhone(phone) {
        this.phones = [phone];
    }
    modifyMail(mail) {
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
exports.default = Contact;
//# sourceMappingURL=contact.js.map