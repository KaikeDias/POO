class Triangulo{
    l1: number
    l2: number
    l3: number

    constructor(l1: number, l2: number, l3: number){
        this.l1 = l1
        this.l2 = l2
        this.l3 = l3
    }

    ehTriangulo(): boolean{
        return this.l2 - this.l3 < this.l1 && this.l1 < this.l2 + this.l3
    }
    
    ehIsoceles():boolean{
        return this.l1 == this.l2 || this.l2 == this.l3 || this.l3 == this.l1
    }
    
    ehEquilatero():boolean{
        return this.l1 == this.l2 && this.l1 == this.l3
    }
    
    ehEscaleno():boolean{
        return this.l1 != this.l2 && this.l1 != this.l3 && this.l2 != this.l3
    }
}

let trianguloIsoceles: Triangulo = new Triangulo(2, 2, 4)
let trianguloEscaleno: Triangulo = new Triangulo(2, 3, 4)
let trianguloEquilatero: Triangulo = new Triangulo(2,2,2)
let trianguloRegra: Triangulo = new Triangulo(5,10,9)

console.log(trianguloIsoceles.ehIsoceles())
console.log(trianguloEquilatero.ehEquilatero())
console.log(trianguloEscaleno.ehEscaleno())
console.log(trianguloRegra.ehTriangulo())