"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(_nome, _saldo) {
        this._nome = _nome;
        this._saldo = _saldo;
    }
    get nome() {
        return this._nome;
    }
    setNome(novoNome) {
        this._nome = novoNome;
    }
    get saldo() {
        return this._saldo;
    }
    setSaldo(novoSaldo) {
        this._saldo = novoSaldo;
    }
}
exports.Conta = Conta;
class ContaCorrente extends Conta {
    constructor(nome, saldo) {
        super(nome, saldo);
    }
    calculaTributos() {
        return this.saldo * 0.1;
    }
}
class SeguroDeVida {
    calculaTributos() {
        return 50;
    }
}
let contaCorrente = new ContaCorrente('Kaike', 500);
let seguro = new SeguroDeVida();
// console.log(contaCorrente.nome)
// contaCorrente.setNome('Kaike Dias')
// console.log(contaCorrente.saldo)
// contaCorrente.setSaldo(800)
// console.log(contaCorrente.calculaTributos())
// console.log(seguro.calculaTributos())
