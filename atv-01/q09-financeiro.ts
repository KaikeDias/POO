class situacaoFinanceira{
    valorCredito: number
    valorDebito: number

    constructor(valor1: number, valor2: number){
        this.valorCredito = valor1
        this.valorDebito = valor2
    }

    saldo(): number{
        return this.valorCredito - this.valorDebito
    }
}

let pessoa = new situacaoFinanceira(125, 200)

console.log(pessoa.saldo())