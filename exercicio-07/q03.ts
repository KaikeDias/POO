import {Calculadora} from './q02'

class CalculadoraCientifica extends Calculadora{
    constructor(_operando1: number, _operando2: number){
        super(_operando1,_operando2);
    }

    public exponenciar(): number{
        return Math.pow(this.operando1,this.operando2);
    }
}

let calculadoraCientifica: CalculadoraCientifica = new CalculadoraCientifica(2,3);
console.log(calculadoraCientifica.exponenciar());

//Foi necessario implementar o metodo get na classe Calculadora para poder acessar os operandos na classe CalculadoraCientifica