"use strict";
class Equipamento {
    constructor() {
        this.ligado = false;
    }
    liga() {
        if (!this.ligado) {
            this.ligado = true;
        }
    }
    desliga() {
        if (this.ligado) {
            this.ligado = false;
        }
    }
    inverte() {
        if (this.ligado) {
            this.ligado = false;
        }
        else {
            this.ligado = true;
        }
    }
    estaLigado() {
        return this.ligado;
    }
}
let lampada = new Equipamento();
lampada.liga();
console.log(lampada.estaLigado());
lampada.desliga();
console.log(lampada.estaLigado());
