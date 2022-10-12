export class Conta{

    constructor(private numero: string, private saldo: number){}

    get Numero(): string{
        return this.numero;
    }
    
    get Saldo(): number{
        return this.saldo;
    }

    public depositar(valor: number): void{
        this.saldo += valor
    }

    public sacar(valor: number): boolean{
        if(this.saldo - valor >= 0){
            this.saldo -= valor
            return true
        }

        return false
    }

    public transferencia(contaDestino: Conta, valor: number): void{
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

export class Banco{
    private contas: Conta[] = []

    inserir(c: Conta): void{
        let conta: Conta = this.consultar(c.Numero)

        if(conta == null){
            this.contas.push(c)
        }else{
            console.log("Já existe uma conta com esse numero")
        }
    }

    public consultar(numero: string): Conta{
        let contaProcurada!: Conta

        for(let c of this.contas){
            if(c.Numero == numero){
                contaProcurada = c
                break
            }
        }

        return contaProcurada
    }

    private consultarIndicie(numero: string): number{
        let indice = -1

        for(let i = 0; i < this.contas.length; i++){
            if(this.contas[i].Numero == numero){
                indice = i
                break
            }
        }

        return indice
    }

    public alterar(c: Conta): void{
        let indice = this.consultarIndicie(c.Numero)

        if(indice != -1){
            this.contas[indice] = c
        }
    }


    public depositar(numero: string, valor: number): void{
        let conta: Conta = this.consultar(numero)

        if(conta != null){
            conta.depositar(valor)
        }
    }

    public sacar(numero: string, valor: number): boolean{
        let conta: Conta = this.consultar(numero)

        if(conta != null){
            conta.sacar(valor)
            return true
        }

        return false
    }

    public transferir(numCredito: string, numDebito: string, valor: number): void{
        let conta1: Conta = this.consultar(numCredito)
        let conta2: Conta = this.consultar(numDebito)

        if(conta1 != null && conta2 != null){
            conta2.transferencia(conta1, valor)
        }
    }

    public QuantidadeContas(): number{
        return this.contas.length
    }

    public depositoTotal(): number{
        let soma = 0

        for(let i = 0; i < this.contas.length; i++){
            soma += this.contas[i].Saldo
        }

        return soma
    }

    public mediaSaldos(): number{
        return this.depositoTotal()/this.QuantidadeContas()
    }

    public excluirConta(numero: string): void{
        for(let i = 0; i < this.contas.length; i++){
            if(this.contas[i].Numero == numero){
                this.contas.splice(i, 1)
                break
            }
        }
    }
}
