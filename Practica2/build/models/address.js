"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(street, number, floor, letter, postalCode, city, region) {
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
exports.default = Address;
//# sourceMappingURL=address.js.map