class Jogador{
    forca: number
    nivel: number
    pontosAtuais: number

    constructor(forca: number, nivel: number, pontosAtuais: number){
        this.forca = forca
        this.nivel = nivel
        this.pontosAtuais = pontosAtuais
    }

    calcularAtaque(): number{
        return this.forca * this.nivel
    }

    atacar(jogador: Jogador): void{
        if(jogador.estaVivo()){
            jogador.pontosAtuais -= this.calcularAtaque()
        }else{
            console.log('O jogador já está morto')
        }
    }

    estaVivo(): boolean{
        return this.pontosAtuais > 0
    }

    toString(): string{
        return `Força: ${this.forca} Nível: ${this.nivel} Pontos Atuais: ${this.pontosAtuais}`
    }
}

let jogador1: Jogador = new Jogador(10, 20, 1000)
let jogador2: Jogador = new Jogador(15, 20, 1250)

console.log(jogador1.calcularAtaque())
console.log(jogador2.calcularAtaque())

jogador1.atacar(jogador2)
jogador2.atacar(jogador1)

console.log(jogador1.toString())
console.log(jogador2.toString())
