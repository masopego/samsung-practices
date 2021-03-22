import Contact from "./models/contact";
import ContactBookInterface from "./contact-book-interface";
import Address from "./models/address";
import Phone from "./models/phone";
import Mail from "./models/mail";

export default class ContactBook implements ContactBookInterface {
  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  addContact(contact: Contact): ContactBook {
    this.contacts.push(contact);
    return this;
  }

  updateContact(
    identifyCard: string,
    address: Address,
    phone: Phone,
    mail: Mail
  ): ContactBook {
    const contactFind = this.contacts.find(
      (contact) => contact.identityCard === identifyCard
    );
    if (!contactFind) {
      console.log("Contacto no encontrado");
      return this;
    }

    contactFind.addAddress(address);
    contactFind.addPhone(phone);
    contactFind.addMail(mail);

    return this;
  }

  showContacts(): void {
    this.contacts.forEach((contact) => contact.show());
  }
}
