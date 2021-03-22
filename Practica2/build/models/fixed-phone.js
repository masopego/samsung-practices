"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const phone_1 = require("./phone");
class FixedPhone extends phone_1.default {
    constructor(number) {
        super(number);
    }
    type() {
        return "fixed";
    }
}
exports.default = FixedPhone;
//# sourceMappingURL=fixed-phone.js.map