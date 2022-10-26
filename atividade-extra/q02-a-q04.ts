class Pessoa {
    constructor(private _nome: string, private _sobrenome: string){}

    get nome(){
        return this._nome 
    }

    get sobrenome(){
        return this._sobrenome
    }

    get nomeCompleto(){
        return this._nome.concat(` ${this._sobrenome}`)
    }
}

class Funcionario extends Pessoa {
    constructor(_nome: string, _sobrenome: string, private _matricula: string, private _salario: number){
        super(_nome, _sobrenome)
    }

    get matricula(){
        return this._matricula
    }

    get salario(){
        return this._salario
    }

    calcularPrimeiraParcela(): number {
        if(this._salario >= 0){
            return this._salario * (60/100)
        }else{
            console.log('Valor Invalido de salario')
        }

        return 0;
    }
    
    calcularSegundaParcela(): number {
        if(this._salario >= 0){
            return this._salario * (40/100)
        }else{
            console.log('Valor Invalido de salario')
        }

        return 0;
    }
}

class Professor extends Funcionario {
    constructor(_nome: string, _sobrenome: string, _matricula: string, _salario: number, private _titulacao: string){
        super(_nome, _sobrenome, _matricula, _salario)
    }

    get titulacao() {
        return this._titulacao
    }

    calcularPrimeiraParcela(): number {
        if(this.salario >= 0){
            return this.salario
        }else{
            console.log('Valor Invalido de salario')
        }

        return 0;
    }

    calcularSegundaParcela(): number {
        return 0;
    }
}

let pessoa: Pessoa = new Pessoa('kaike', 'dias')
let funcionario: Funcionario = new Funcionario('Joao', 'Filho', '2022111TADS0231', 2000)
let professor: Professor = new Professor('Kelson', 'Filho', '2022111TADS0282', 15000, 'Professor Doutor')


console.log(pessoa.nomeCompleto)

console.log(funcionario.calcularPrimeiraParcela())
console.log(funcionario.calcularSegundaParcela())

console.log(professor.calcularPrimeiraParcela())
console.log(professor.calcularSegundaParcela())