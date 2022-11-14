"use strict";
class Funcionario {
    constructor(salario) {
        this.salario = salario;
    }
}
class Gerente extends Funcionario {
    getBonificacao() {
        return this.salario * 1.4;
    }
}
class Diretor extends Funcionario {
    getBonificacao() {
        return this.salario * 1.6;
    }
}
class Presidente extends Funcionario {
    getBonificacao() {
        return this.salario + 1000;
    }
}
