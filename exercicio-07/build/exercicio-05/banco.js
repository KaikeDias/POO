"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = exports.ContaImposto = exports.Poupanca = exports.Conta = void 0;
class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    get Numero() {
        return this.numero;
    }
    get Saldo() {
        return this.saldo;
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
class Poupanca extends Conta {
    constructor(numero, saldo, _taxaJuros) {
        super(numero, saldo);
        this._taxaJuros = _taxaJuros;
    }
    renderJuros() {
        this.depositar(this.Saldo * (this._taxaJuros / 100));
    }
    get taxaJuros() {
        return this._taxaJuros;
    }
}
exports.Poupanca = Poupanca;
class ContaImposto extends Conta {
    constructor(numero, saldo, _taxaDesconto) {
        super(numero, saldo);
        this._taxaDesconto = _taxaDesconto;
    }
    get taxaDesconto() {
        return this._taxaDesconto;
    }
    debitar(valor) {
        let total = valor + valor * (this._taxaDesconto / 100);
        super.sacar(total);
    }
}
exports.ContaImposto = ContaImposto;
class Banco {
    constructor() {
        this.contas = [];
    }
    inserir(c) {
        let conta = this.consultar(c.Numero);
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
            if (c.Numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }
    consultarIndicie(numero) {
        let indice = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].Numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    alterar(c) {
        let indice = this.consultarIndicie(c.Numero);
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
            if (conta instanceof ContaImposto) {
                conta.debitar(valor);
            }
            else {
                conta.sacar(valor);
            }
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
            soma += this.contas[i].Saldo;
        }
        return soma;
    }
    mediaSaldos() {
        return this.depositoTotal() / this.QuantidadeContas();
    }
    excluirConta(numero) {
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].Numero == numero) {
                this.contas.splice(i, 1);
                break;
            }
        }
    }
    renderJuros(numero) {
        let conta = this.consultar(numero);
        if (conta instanceof Poupanca) {
            conta.renderJuros();
        }
    }
}
exports.Banco = Banco;
