"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const phone_1 = require("./phone");
class MobilePhone extends phone_1.default {
    constructor(number) {
        super(number);
    }
    type() {
        return "mobile";
    }
}
exports.default = MobilePhone;
//# sourceMappingURL=mobile-phone.js.map