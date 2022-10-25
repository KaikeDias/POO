"use strict";
class Veiculo {
    constructor(placa, ano) {
        this.placa = placa;
        this.ano = ano;
    }
}
class Carro extends Veiculo {
    constructor(placa, ano, modelo) {
        super(placa, ano);
        this.modelo = modelo;
    }
}
class CarroEletrico extends Carro {
    constructor(placa, ano, modelo, autonomiaBateria) {
        super(placa, ano, modelo);
        this.autonomiaBateria = autonomiaBateria;
    }
}
let carro = new Carro('ODV6421', 2013, 'S10');
let carroEletrico = new CarroEletrico('PHX2158', 2022, 'Corolla', 345);
console.log(carro.placa);
console.log(carro.ano);
console.log(carro.modelo);
console.log(carroEletrico.placa);
console.log(carroEletrico.ano);
console.log(carroEletrico.modelo);
console.log(carroEletrico.autonomiaBateria);
