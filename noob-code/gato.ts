abstract class gato{
    nome: string
    cor: string

    constructor(n: string, c: string){
        this.nome = n
        this.cor = c
    }

    miar(){
        console.log("Miau")
    }
}

class tom extends gato{
    idade: number

    constructor(n: string, c: string, i: number){
        super(n,c)
        this.idade = i
    }
}

let g = new tom("Tom", "Cinza", 2)

console.log(g.nome)
console.log(g.cor)
console.log(g.idade)
g.miar()