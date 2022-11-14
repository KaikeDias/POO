"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q10_1 = require("./q10");
class AuditoriaInterna {
    constructor() {
        this.lista = [];
    }
    adicionar(tributavel) {
        this.lista.push(tributavel);
    }
    calculaTributos() {
        let soma = 0;
        for (let elemento of this.lista) {
            soma += elemento.calculaTributos();
        }
        return soma;
    }
}
class ContaCorrente1 extends q10_1.Conta {
    constructor(nome, saldo) {
        super(nome, saldo);
    }
    calculaTributos() {
        return this.saldo * 0.1;
    }
}
class SeguroDeVida1 {
    calculaTributos() {
        return 50;
    }
}
let contaCorrente1 = new ContaCorrente1('Kaike', 500);
let contaCorrente2 = new ContaCorrente1('Luiz', 800);
let seguro1 = new SeguroDeVida1();
let auditoria = new AuditoriaInterna();
auditoria.adicionar(contaCorrente1);
auditoria.adicionar(contaCorrente2);
auditoria.adicionar(seguro1);
console.log(auditoria.calculaTributos());
