import {Conta, Tributavel} from './q10'

class AuditoriaInterna implements Tributavel {
    private lista: Tributavel[] = []

    adicionar(tributavel: Tributavel): void {
        this.lista.push(tributavel)
    }
    
    calculaTributos(): number {
        let soma = 0

        for(let elemento of this.lista) {
            soma += elemento.calculaTributos()
        }

        return soma
    }

}

class ContaCorrente1 extends Conta implements Tributavel {
    constructor(nome: string, saldo: number) {
        super(nome,saldo)
    }

    calculaTributos(): number {
        return this.saldo*0.1
    }
}

class SeguroDeVida1 implements Tributavel {
    calculaTributos(): number {
        return 50
    }
}

let contaCorrente1: ContaCorrente1 = new ContaCorrente1('Kaike', 500)
let contaCorrente2: ContaCorrente1 = new ContaCorrente1('Luiz', 800)
let seguro1: SeguroDeVida1 = new SeguroDeVida1()

let auditoria: AuditoriaInterna = new AuditoriaInterna()
auditoria.adicionar(contaCorrente1)
auditoria.adicionar(contaCorrente2)
auditoria.adicionar(seguro1)

console.log(auditoria.calculaTributos())