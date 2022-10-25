"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(_operando1, _operando2) {
        this._operando1 = _operando1;
        this._operando2 = _operando2;
    }
    get operando1() {
        return this._operando1;
    }
    get operando2() {
        return this._operando2;
    }
    soma() {
        return this._operando1 + this._operando2;
    }
}
exports.Calculadora = Calculadora;
let calculadora = new Calculadora(1, 2);
console.log(calculadora.soma());
