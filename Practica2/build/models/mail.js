"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailType = void 0;
var MailType;
(function (MailType) {
    MailType["Business"] = "Trabajo";
    MailType["Personal"] = "Personal";
})(MailType = exports.MailType || (exports.MailType = {}));
class Mail {
    constructor(type, address) {
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
exports.default = Mail;
//# sourceMappingURL=mail.js.map