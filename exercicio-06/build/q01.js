"use strict";
class Calculadora {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    soma() {
        return this.operando1 + this.operando2;
    }
    subtracao() {
        return this.operando1 - this.operando2;
    }
}
let calculadora = new Calculadora(2, 1);
//console.log(calculadora.operando1); Aparece: Property 'operando1' is private and only accessible within class 'Calculadora'.
console.log(calculadora.soma());
console.log(calculadora.subtracao());
