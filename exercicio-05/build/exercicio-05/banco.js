"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = exports.ContaImposto = exports.Poupanca = exports.Conta = void 0;
const q01_1 = require("../exercicio-08/q01");
const q04_1 = require("../exercicio-08/q04");
const q06_1 = require("../exercicio-08/q06");
class Conta {
    constructor(numero, saldoInicial) {
        this.numero = numero;
        this._saldo = 0;
        this.depositar(saldoInicial);
    }
    get Numero() {
        return this.numero;
    }
    get Saldo() {
        return this._saldo;
    }
    _validarValor(valor) {
        if (valor > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    depositar(valor) {
        if (this._validarValor(valor)) {
            this._saldo += valor;
        }
        else {
            throw new q04_1.ValorInvalidoError('Valor inválido');
        }
    }
    sacar(valor) {
        if (this._validarValor(valor)) {
            if (this._saldo - valor >= 0) {
                this._saldo -= valor;
            }
            else {
                throw new q01_1.SaldoInsuficienteError('Saldo insuficiente');
            }
        }
        else {
            throw new q04_1.ValorInvalidoError('Valor inválido');
        }
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
        try {
            console.log("Já existe uma conta com esse numero");
        }
        catch (e) {
            if (e instanceof q01_1.ContaInexistenteError) {
                this.contas.push(c);
            }
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
        if (contaProcurada.Numero != numero) {
            throw new q01_1.ContaInexistenteError('Conta inexistente');
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
        if (indice == -1) {
            throw new q01_1.ContaInexistenteError('Conta inexistente');
        }
        return indice;
    }
    alterar(c) {
        let indice = this.consultarIndicie(c.Numero);
        this.contas[indice] = c;
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        conta.depositar(valor);
    }
    sacar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta instanceof ContaImposto) {
            conta.debitar(valor);
        }
        else {
            conta.sacar(valor);
        }
    }
    transferir(numCredito, numDebito, valor) {
        let conta1 = this.consultar(numCredito);
        let conta2 = this.consultar(numDebito);
        conta2.transferencia(conta1, valor);
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
        else {
            throw new q06_1.PoupancaInvalida('A conta não é do tipo Poupança');
        }
    }
}
exports.Banco = Banco;
