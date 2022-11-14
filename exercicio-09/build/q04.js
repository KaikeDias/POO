"use strict";
class FiguraGeometrica {
}
class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado ** 2;
    }
    calcularPerimetro() {
        return this.lado * 4;
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(base, altura, ladoEsquerdo, ladoDireito) {
        super();
        this.base = base;
        this.altura = altura;
        this.ladoEsquerdo = ladoEsquerdo;
        this.ladoDireito = ladoDireito;
    }
    calcularArea() {
        return this.base * this.altura;
    }
    calcularPerimetro() {
        return this.ladoEsquerdo + this.ladoDireito + this.base;
    }
}
