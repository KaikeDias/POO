abstract class FiguraGeometrica {
    abstract calcularArea(): number
    
    abstract calcularPerimetro(): number
}

class Quadrado extends FiguraGeometrica {
    constructor(private lado: number){
        super()
    }

    calcularArea(): number {
        return this.lado**2
    }
    
    calcularPerimetro(): number {
        return this.lado*4
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number, private ladoEsquerdo: number, private ladoDireito: number){
        super()
    }

    calcularArea(): number {
        return this.base*this.altura
    }
    
    calcularPerimetro(): number {
        return this.ladoEsquerdo+this.ladoDireito+this.base
    }
}
