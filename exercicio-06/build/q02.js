"use strict";
class Hora {
    constructor(horas, minutos, segundos) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    getHora() {
        return this.horas;
    }
    getMinuto() {
        return this.minutos;
    }
    getSegundo() {
        return this.segundos;
    }
    horaFormatada() {
        return `${this.horas}:${this.minutos}:${this.segundos}`;
    }
}
let hora = new Hora(15, 39, 50);
console.log(hora.getHora());
console.log(hora.getMinuto());
console.log(hora.getSegundo());
console.log(hora.horaFormatada());
