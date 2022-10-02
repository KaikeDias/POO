export class Conta{
    numero: string
    saldo: number

    constructor(numero: string, saldo: number){
        this.numero = numero
        this.saldo = saldo
    }

    depositar(valor: number): void{
        this.saldo += valor
    }

    sacar(valor: number): boolean{
        if(this.saldo - valor >= 0){
            this.saldo -= valor
            return true
        }

        return false
    }

    transferencia(contaDestino: Conta, valor: number): void{
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

export class Banco{
    contas: Conta[] = []

    inserir(c: Conta): void{
        let conta: Conta = this.consultar(c.numero)

        if(conta == null){
            this.contas.push(c)
        }else{
            console.log("Já existe uma conta com esse numero")
        }
    }

    consultar(numero: string): Conta{
        let contaProcurada!: Conta

        for(let c of this.contas){
            if(c.numero == numero){
                contaProcurada = c
                break
            }
        }

        return contaProcurada
    }

    consultarIndicie(numero: string): number{
        let indice = -1

        for(let i = 0; i < this.contas.length; i++){
            if(this.contas[i].numero == numero){
                indice = i
                break
            }
        }

        return indice
    }

    alterar(c: Conta): void{
        let indice = this.consultarIndicie(c.numero)

        if(indice != -1){
            this.contas[indice] = c
        }
    }


    depositar(numero: string, valor: number): void{
        let conta: Conta = this.consultar(numero)

        if(conta != null){
            conta.depositar(valor)
        }
    }

    sacar(numero: string, valor: number): boolean{
        let conta: Conta = this.consultar(numero)

        if(conta != null){
            conta.sacar(valor)
            return true
        }

        return false
    }

    transferir(numCredito: string, numDebito: string, valor: number): void{
        let conta1: Conta = this.consultar(numCredito)
        let conta2: Conta = this.consultar(numDebito)

        if(conta1 != null && conta2 != null){
            conta2.transferencia(conta1, valor)
        }
    }

    QuantidadeContas(): number{
        return this.contas.length
    }

    depositoTotal(): number{
        let soma = 0

        for(let i = 0; i < this.contas.length; i++){
            soma += this.contas[i].saldo
        }

        return soma
    }

    mediaSaldos(): number{
        return this.depositoTotal()/this.QuantidadeContas()
    }

    excluirConta(numero: string): void{
        for(let i = 0; i < this.contas.length; i++){
            if(this.contas[i].numero == numero){
                this.contas.splice(i, 1)
                break
            }
        }
    }
}
