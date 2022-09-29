"use strict";
class Triangulo {
    constructor(l1, l2, l3) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
    ehTriangulo() {
        return this.l2 - this.l3 < this.l1 && this.l1 < this.l2 + this.l3;
    }
    ehIsoceles() {
        return this.l1 == this.l2 || this.l2 == this.l3 || this.l3 == this.l1;
    }
    ehEquilatero() {
        return this.l1 == this.l2 && this.l1 == this.l3;
    }
    ehEscaleno() {
        return this.l1 != this.l2 && this.l1 != this.l3 && this.l2 != this.l3;
    }
}
let trianguloIsoceles = new Triangulo(2, 2, 4);
let trianguloEscaleno = new Triangulo(2, 3, 4);
let trianguloEquilatero = new Triangulo(2, 2, 2);
let trianguloRegra = new Triangulo(5, 10, 9);
console.log(trianguloIsoceles.ehIsoceles());
console.log(trianguloEquilatero.ehEquilatero());
console.log(trianguloEscaleno.ehEscaleno());
console.log(trianguloRegra.ehTriangulo());
