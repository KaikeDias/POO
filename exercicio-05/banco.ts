import {ContaExistenteError, ContaInexistenteError, SaldoInsuficienteError} from '../exercicio-08/q01'
import {ValorInvalidoError} from '../exercicio-08/q04'
import {PoupancaInvalida} from '../exercicio-08/q06'


export class Conta{
    private _saldo: number = 0
    constructor(private numero: string, saldoInicial: number){
        this.depositar(saldoInicial)
    }

    get Numero(): string{
        return this.numero;
    }
    
    get Saldo(): number{
        return this._saldo;
    }
    
    private _validarValor(valor: number): boolean {
        if(valor >= 0) {
            return true
        }else {
            return false
        }
    }

    public depositar(valor: number): void{
        if(this._validarValor(valor)) {
            this._saldo += valor;
        }else {
            throw new ValorInvalidoError('Valor inválido');
        }
    }
    
    public sacar(valor: number){
        if(this._validarValor(valor)) {
            if(this._saldo - valor >= 0){
                this._saldo -= valor
            }else {
                throw new SaldoInsuficienteError('Saldo insuficiente');
            }
        }else {
            throw new ValorInvalidoError('Valor inválido');
        }
    }

    public transferencia(contaDestino: Conta, valor: number): void{
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

}

export class Poupanca extends Conta{
    private _taxaJuros: number;

    constructor(numero: string, saldo: number, _taxaJuros: number){
        super(numero,saldo);
        this._taxaJuros = _taxaJuros;
    }

    public renderJuros(): void{
        this.depositar(this.Saldo * (this._taxaJuros/100));
    }

    get taxaJuros(): number{
        return this._taxaJuros;
    }
}

export class ContaImposto extends Conta{
    private _taxaDesconto: number;

    constructor(numero: string, saldo: number, _taxaDesconto: number){
        super(numero, saldo);
        this._taxaDesconto = _taxaDesconto;
    }

    get taxaDesconto(): number{
        return this._taxaDesconto
    }

    debitar(valor: number): void{
        let total = valor + valor * (this._taxaDesconto / 100);
        super.sacar(total);
    }
}

export class Banco{
    private contas: Conta[] = []

    inserir(c: Conta): void{
        try {
            let conta: Conta = this.consultar(c.Numero)
            throw new ContaExistenteError('A conta ja existe')
        } catch (e: any) {
            if(e instanceof ContaInexistenteError) {
                this.contas.push(c)
            }else {
                console.log(e.message)
            }
        }
    }

    public consultar(numero: string): Conta{
        let contaProcurada!: Conta

        for(let c of this.contas){
            if(c.Numero == numero){
                contaProcurada = c
                return contaProcurada;
            }
        }

        throw new ContaInexistenteError('Conta inexistente');    
    }

    private consultarIndicie(numero: string): number{
        let indice = -1

        for(let i = 0; i < this.contas.length; i++){
            if(this.contas[i].Numero == numero){
                indice = i
                break
            }
        }

        if(indice == -1) {
            throw new ContaInexistenteError('Conta inexistente');
        }

        return indice
    }

    public alterar(c: Conta): void{
        let indice = this.consultarIndicie(c.Numero)

        this.contas[indice] = c
    }


    public depositar(numero: string, valor: number): void{
        let conta: Conta = this.consultar(numero)

        conta.depositar(valor)
    }

    public sacar(numero: string, valor: number): void{
        let conta: Conta = this.consultar(numero)

        if(conta instanceof ContaImposto){
            conta.debitar(valor);
        }else{
            conta.sacar(valor);
        }
    }

    public transferir(numCredito: string, numDebito: string, valor: number): void{
        let conta1: Conta = this.consultar(numCredito)
        let conta2: Conta = this.consultar(numDebito)

        conta2.transferencia(conta1, valor)
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

    public renderJuros(numero: string): void{
        let conta: Conta = this.consultar(numero);

        if(conta instanceof Poupanca){
            conta.renderJuros();
        }else {
            throw new PoupancaInvalida('A conta não é do tipo Poupança');
        }
    }
}