class Veiculo{
    placa: string;
    ano: number;

    constructor(placa: string, ano: number){
        this.placa = placa;
        this.ano = ano;
    }
}

class Carro extends Veiculo{
    modelo: string;

    constructor(placa: string, ano: number, modelo: string){
        super(placa,ano);
        this.modelo = modelo;
    }
}

class CarroEletrico extends Carro{
    autonomiaBateria: number;

    constructor(placa: string, ano: number, modelo: string, autonomiaBateria: number){
        super(placa,ano,modelo);
        this.autonomiaBateria = autonomiaBateria;
    }
}

let carro: Carro = new Carro('ODV6421', 2013, 'S10');
let carroEletrico: CarroEletrico = new CarroEletrico('PHX2158', 2022, 'Corolla', 345);

console.log(carro.placa);
console.log(carro.ano);
console.log(carro.modelo);

console.log(carroEletrico.placa);
console.log(carroEletrico.ano);
console.log(carroEletrico.modelo);
console.log(carroEletrico.autonomiaBateria);
