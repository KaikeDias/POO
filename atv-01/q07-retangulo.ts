class Retangulo{
    lado1: number
    lado2: number

    constructor(l1: number, l2: number){
        this.lado1 = l1
        this.lado2 = l2
    }

    calcularArea(): number{
        return this.lado1 * this.lado2
    }

    calcularPerimetro(): number{
        return this.lado1 * 2 + this.lado2 * 2
    }
}

let retangulo = new Retangulo(7, 3)

console.log(retangulo.calcularPerimetro())