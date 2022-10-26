"use strict";
class Pessoa {
    constructor(_nome, _sobrenome) {
        this._nome = _nome;
        this._sobrenome = _sobrenome;
    }
    get nome() {
        return this._nome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    get nomeCompleto() {
        return this._nome.concat(` ${this._sobrenome}`);
    }
}
class Funcionario extends Pessoa {
    constructor(_nome, _sobrenome, _matricula, _salario) {
        super(_nome, _sobrenome);
        this._matricula = _matricula;
        this._salario = _salario;
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
    calcularPrimeiraParcela() {
        if (this._salario >= 0) {
            return this._salario * (60 / 100);
        }
        else {
            console.log('Valor Invalido de salario');
        }
        return 0;
    }
    calcularSegundaParcela() {
        if (this._salario >= 0) {
            return this._salario * (40 / 100);
        }
        else {
            console.log('Valor Invalido de salario');
        }
        return 0;
    }
}
class Professor extends Funcionario {
    constructor(_nome, _sobrenome, _matricula, _salario, _titulacao) {
        super(_nome, _sobrenome, _matricula, _salario);
        this._titulacao = _titulacao;
    }
    get titulacao() {
        return this._titulacao;
    }
    calcularPrimeiraParcela() {
        if (this.salario >= 0) {
            return this.salario;
        }
        else {
            console.log('Valor Invalido de salario');
        }
        return 0;
    }
    calcularSegundaParcela() {
        return 0;
    }
}
let pessoa = new Pessoa('kaike', 'dias');
let funcionario = new Funcionario('Joao', 'Filho', '2022111TADS0231', 2000);
let professor = new Professor('Kelson', 'Filho', '2022111TADS0282', 15000, 'Professor Doutor');
console.log(pessoa.nomeCompleto);
console.log(funcionario.calcularPrimeiraParcela());
console.log(funcionario.calcularSegundaParcela());
console.log(professor.calcularPrimeiraParcela());
console.log(professor.calcularSegundaParcela());
