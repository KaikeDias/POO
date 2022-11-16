"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorInvalidoError = void 0;
const q01_1 = require("./q01");
class ValorInvalidoError extends q01_1.AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.ValorInvalidoError = ValorInvalidoError;
