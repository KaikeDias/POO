"use strict";
class Pessoa1 {
    constructor(nome) {
        this.nome = nome;
    }
}
class Conta1 {
    constructor(numero, saldo, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }
    sacar(valor) {
        if (this.saldo - valor > 0) {
            this.saldo = this.saldo - valor;
            return true;
        }
        return false;
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
        if (this.sacar(valor)) {
            this.sacar(valor);
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
    equals(conta) {
        return (this.numero == conta.numero &&
            this.cliente.nome == conta.cliente.nome);
    }
}
let pessoa_1 = new Pessoa1("Kaike");
let pessoa_2 = new Pessoa1("Romero");
let conta1 = new Conta1('1', 100, pessoa_1);
let conta2 = new Conta1('2', 100, pessoa_2);
console.log(conta1.sacar(10)); //true
console.log(conta1.sacar(200)); //false
console.log(conta1.transferencia(conta2, 10)); //true
console.log(conta1.transferencia(conta2, 100)); //false
console.log(conta1.consultarSaldo());
console.log(conta2.consultarSaldo());
