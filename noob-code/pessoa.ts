export default class pessoa {
    constructor(n: string, i: number){
        this.nome = n;
        this.idade = i;
    }

    nome: string;
    idade: number;
}

let p1 = new pessoa("kaike", 18)

console.log(`Nome: ${p1.nome}`)
console.log(`Idade: ${p1.idade}`)