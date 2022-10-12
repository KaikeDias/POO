class Calculadora{
    private operando1: number;
    private operando2: number;
    
    constructor(operando1: number, operando2: number){
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    public soma(): number{
        return this.operando1 + this.operando2
    }

    public subtracao(): number{
        return this.operando1 -  this.operando2
    }
}

let calculadora: Calculadora = new Calculadora(2,1);

//console.log(calculadora.operando1); Aparece: Property 'operando1' is private and only accessible within class 'Calculadora'.

console.log(calculadora.soma());
console.log(calculadora.subtracao());