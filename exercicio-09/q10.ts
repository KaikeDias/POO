export class Conta {
    constructor(private _nome: string, private _saldo: number){}
    
    public get nome(): string {
        return this._nome
    }

    public setNome(novoNome: string): void{
        this._nome = novoNome
    }
    
    public get saldo(): number {
        return this._saldo
    }
    
    public setSaldo(novoSaldo: number): void{
        this._saldo = novoSaldo
    }
}

export interface Tributavel {
    calculaTributos(): number
}

class ContaCorrente extends Conta implements Tributavel {
    constructor(nome: string, saldo: number) {
        super(nome,saldo)
    }

    calculaTributos(): number {
        return this.saldo*0.1
    }
}

class SeguroDeVida implements Tributavel {
    calculaTributos(): number {
        return 50
    }
}

let contaCorrente: ContaCorrente = new ContaCorrente('Kaike', 500)
let seguro: SeguroDeVida = new SeguroDeVida()

// console.log(contaCorrente.nome)
// contaCorrente.setNome('Kaike Dias')
// console.log(contaCorrente.saldo)
// contaCorrente.setSaldo(800)
// console.log(contaCorrente.calculaTributos())
// console.log(seguro.calculaTributos())
