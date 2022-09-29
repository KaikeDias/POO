"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
class Conta {
    constructor(numero, saldo, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    get nomeCliente() {
        return this.cliente.nome;
    }
    transferencia(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    equals(conta) {
        return (this.numero == conta.numero &&
            this.cliente.nome == conta.cliente.nome);
    }
}
class Banco {
    constructor() {
        this.contas = [];
    }
    inserir(conta) { }
    alterar(conta) { }
    excluir(numero) { }
    sacar(numero, valor) { }
    depositar(numero, valor) { }
    transfeir(numeroOrigem, numeroDestino, valor) { }
}
let pessoa1 = new Pessoa("Kaike");
let pessoa2 = new Pessoa("Romero");
let c1 = new Conta("1", 100, pessoa1);
let c2 = new Conta("2", 100, pessoa2);
let c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferencia(c2, 50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
