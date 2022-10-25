"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q02_1 = require("./q02");
class CalculadoraCientifica extends q02_1.Calculadora {
    constructor(_operando1, _operando2) {
        super(_operando1, _operando2);
    }
    exponenciar() {
        return Math.pow(this.operando1, this.operando2);
    }
}
let calculadoraCientifica = new CalculadoraCientifica(2, 3);
console.log(calculadoraCientifica.exponenciar());
//Foi necessario implementar o metodo get na classe Calculadora para poder acessar os operandos na classe CalculadoraCientifica
