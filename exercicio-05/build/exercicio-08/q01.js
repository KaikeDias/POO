"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaInexistenteError = exports.SaldoInsuficienteError = exports.AplicacaoError = void 0;
class AplicacaoError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.AplicacaoError = AplicacaoError;
class SaldoInsuficienteError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.SaldoInsuficienteError = SaldoInsuficienteError;
class ContaInexistenteError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.ContaInexistenteError = ContaInexistenteError;
