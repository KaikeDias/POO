export default class animal{
    tipo: string
    nome: string
    idade: number

    constructor(t: string, n: string, i: number){
        this.nome = n
        this.tipo = t
        this.idade = i
    }

    public comunicar(): void{
        console.log("Olá sou da classe mãe")
    }
}

class cachorro extends animal{
    raca: string

    constructor(t: string, n: string, i: number, r: string){
        super(t,n,i)
        this.raca = r
    }

    public comunicar(){
        console.log("Olá sou da classe filha cachorro")
    }
}

class pessoa extends animal{
    cor: string

    constructor(t: string, n: string, i: number, c: string){
        super(t, n, i)

        this.cor = c
    }

    public comunicar(){
        console.log("Olá sou da classe filha pessoa")
    }
}

let c1 = new cachorro("cachorro", "bob", 2, "poodle")
c1.comunicar()

let p1 = new pessoa("humano", "marley", 25, "negro")
p1.comunicar()
