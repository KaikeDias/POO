"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = exports.Conta = void 0;
class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (this.saldo - valor >= 0) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }
    transferencia(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
exports.Conta = Conta;
class Banco {
    constructor() {
        this.contas = [];
    }
    inserir(c) {
        let conta = this.consultar(c.numero);
        if (conta == null) {
            this.contas.push(c);
        }
        else {
            console.log("Já existe uma conta com esse numero");
        }
    }
    consultar(numero) {
        let contaProcurada;
        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }
    consultarIndicie(numero) {
        let indice = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    alterar(c) {
        let indice = this.consultarIndicie(c.numero);
        if (indice != -1) {
            this.contas[indice] = c;
        }
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
    sacar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
            return true;
        }
        return false;
    }
    transferir(numCredito, numDebito, valor) {
        let conta1 = this.consultar(numCredito);
        let conta2 = this.consultar(numDebito);
        if (conta1 != null && conta2 != null) {
            conta2.transferencia(conta1, valor);
        }
    }
    QuantidadeContas() {
        return this.contas.length;
    }
    depositoTotal() {
        let soma = 0;
        for (let i = 0; i < this.contas.length; i++) {
            soma += this.contas[i].saldo;
        }
        return soma;
    }
    mediaSaldos() {
        return this.depositoTotal() / this.QuantidadeContas();
    }
    excluirConta(numero) {
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                this.contas.splice(i, 1);
                break;
            }
        }
    }
}
exports.Banco = Banco;
