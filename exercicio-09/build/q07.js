"use strict";
class Square {
    constructor(lado) {
        this.lado = lado;
    }
    comparar(figura) {
        if (this.calcularArea() == figura.calcularArea()) {
            return 0;
        }
        else if (this.calcularArea() > figura.calcularArea()) {
            return 1;
        }
        else {
            return -1;
        }
    }
    calcularArea() {
        return this.lado ** 2;
    }
}
let quadrado = new Square(2);
let quadrado2 = new Square(3);
console.log(`Area do quadrado: ${quadrado.calcularArea()}`);
console.log(quadrado.comparar(quadrado2));
