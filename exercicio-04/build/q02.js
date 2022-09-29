"use strict";
class Hotel {
    constructor(quantReservas) {
        this.quantReservas = quantReservas;
    }
    adicionarReserva() {
        this.quantReservas++;
    }
}
let hotel = new Hotel(2);
console.log(hotel.quantReservas);
