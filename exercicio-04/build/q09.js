"use strict";
class Jogador {
    constructor(forca, nivel, pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    calcularAtaque() {
        return this.forca * this.nivel;
    }
    atacar(jogador) {
        if (jogador.estaVivo()) {
            jogador.pontosAtuais -= this.calcularAtaque();
        }
        else {
            console.log('O jogador já está morto');
        }
    }
    estaVivo() {
        return this.pontosAtuais > 0;
    }
    toString() {
        return `Força: ${this.forca} Nível: ${this.nivel} Pontos Atuais: ${this.pontosAtuais}`;
    }
}
let jogador1 = new Jogador(10, 20, 1000);
let jogador2 = new Jogador(15, 20, 1250);
console.log(jogador1.calcularAtaque());
console.log(jogador2.calcularAtaque());
jogador1.atacar(jogador2);
jogador2.atacar(jogador1);
console.log(jogador1.toString());
console.log(jogador2.toString());
