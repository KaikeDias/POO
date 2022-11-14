interface FiguraGeometrica1 {
    calcularArea(): number;
}

interface IComparavel {
    comparar(figura: FiguraGeometrica1): number;
}

class Square implements FiguraGeometrica1,IComparavel {
    constructor(private lado: number) {}
    
    comparar(figura: FiguraGeometrica1): number {
        if(this.calcularArea() == figura.calcularArea()){
            return 0
        }else if(this.calcularArea() > figura.calcularArea()){
            return 1
        }else {
            return -1
        }
    }

    calcularArea(): number {
        return this.lado **2
    }
}

let quadrado: Square = new Square(2)
let quadrado2: Square = new Square(3)

console.log(`Area do quadrado: ${quadrado.calcularArea()}`)
console.log(quadrado.comparar(quadrado2))