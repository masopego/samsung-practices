"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactBook {
    constructor() {
        this.contacts = [];
    }
    addContact(contact) {
        this.contacts.push(contact);
        return this;
    }
    updateContact(identifyCard, address, phone, mail) {
        const contactFind = this.contacts.find((contact) => contact.identityCard === identifyCard);
        if (!contactFind) {
            console.log("Contacto no encontrado");
            return this;
        }
        contactFind.modifyAddress(address);
        contactFind.modifyPhone(phone);
        contactFind.modifyMail(mail);
        return this;
    }
    showContacts() {
        this.contacts.forEach((contact) => contact.show());
    }
}
exports.default = ContactBook;
//# sourceMappingURL=contact-book.js.map