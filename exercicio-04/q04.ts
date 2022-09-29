class Pessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

class Conta {
    numero: string;
    saldo: number;
    cliente: Pessoa;

    constructor(numero: string, saldo: number, cliente: Pessoa) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    get nomeCliente() {
        return this.cliente.nome;
    }

    transferencia(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    equals(conta: Conta): boolean {
        return (this.numero == conta.numero && 
                this.cliente.nome == conta.cliente.nome);
    }
}

class Banco {
    contas: Conta[] = [];

    inserir(conta: Conta): void {}
    alterar(conta: Conta): void {}
    excluir(numero: string): void{}

    sacar(numero: string, valor: number): void {}
    depositar(numero: string, valor: number): void {}
    transfeir(numeroOrigem: string, numeroDestino: String, valor: number): void {}
}

let pessoa1: Pessoa = new Pessoa("Kaike")
let pessoa2: Pessoa = new Pessoa("Romero")

let c1: Conta = new Conta("1",100, pessoa1);
let c2: Conta = new Conta("2",100, pessoa2);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);

c1.transferencia(c2,50);

console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());