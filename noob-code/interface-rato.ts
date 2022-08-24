interface rato{
    nome: string
    idade: number | string
    fugir(): void
}

class jerry implements rato{
    nome: string
    idade: number | string

    constructor(n: string, i:  number | string){
        this.nome = n
        this.idade = i
    }

    fugir(){
        console.log('Corre')
    }
}

let r = new jerry('jerry', '2 anos')

console.log(r.nome)
console.log(r.idade)
r.fugir()