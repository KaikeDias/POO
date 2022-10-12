"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const banco_1 = require("./../exercicio-05/banco");
let conta = new banco_1.Conta('1', 100);
//console.log(conta.numero); aparece: Property 'numero' is private and only accessible within class 'Conta'.
//console.log(conta.saldo); aparece: Property 'saldo' is private and only accessible within class 'Conta'.
console.log(conta.getNumero());
console.log(conta.getSaldo());
