"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Phone {
    constructor(number) {
        this.number = number;
    }
    show() {
        console.log(`
    Type: ${this.type()},
    Number: ${this.number},
    `);
    }
}
exports.default = Phone;
//# sourceMappingURL=phone.js.map