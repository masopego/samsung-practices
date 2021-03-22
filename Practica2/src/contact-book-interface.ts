import ContactBook from "./contact-book";
import Address from "./models/address";
import Contact from "./models/contact";
import Mail from "./models/mail";
import Phone from "./models/phone";

export default interface ContactBookInterface {
  addContact(contact: Contact): ContactBook;
  updateContact(
    identifyCard: string,
    address: Address,
    phone: Phone,
    mail: Mail
  ): ContactBook;
  showContacts(): void;
}
