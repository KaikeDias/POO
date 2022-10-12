import { Banco, Conta } from './banco';

let b: Banco = new Banco()
b.inserir(new Conta('1', 100))
b.inserir(new Conta('2', 50))

b.transferir('1', '2', 50)
b.depositar('2', 500)

console.log(b.consultar('1').Saldo)
console.log(b.consultar('2').Saldo)
console.log(b.QuantidadeContas())
console.log(b.depositoTotal())
console.log(b.mediaSaldos())
