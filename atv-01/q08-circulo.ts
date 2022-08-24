class Circulo{
    raio: number

    constructor(r: number){
        this.raio = r
    }

    calcularArea(): number{
        return this.raio**2 * 3.14
    }

    calcularPerimetro(): number{
        return 2 * 3.14 * this.raio
    }
}

let circulo = new Circulo(4)

console.log(circulo.calcularArea().toFixed(2))
console.log(circulo.calcularPerimetro().toFixed(2))