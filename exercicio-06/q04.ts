import { Conta } from './../exercicio-05/banco';

let conta: Conta = new Conta('1', 100);

//console.log(conta.numero); aparece: Property 'numero' is private and only accessible within class 'Conta'.
//console.log(conta.saldo); aparece: Property 'saldo' is private and only accessible within class 'Conta'.

console.log(conta.getNumero());
console.log(conta.getSaldo());