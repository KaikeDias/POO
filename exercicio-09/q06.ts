abstract class Funcionario {
    constructor(protected salario: number){}
    
    abstract getBonificacao(): number 
}

class Gerente extends Funcionario {
    getBonificacao(): number {
        return this.salario * 1.4
    }
}

class Diretor extends Funcionario {
    getBonificacao(): number {
        return this.salario * 1.6
    }
}

class Presidente extends Funcionario {
    getBonificacao(): number {
        return this.salario + 1000
    }
}
