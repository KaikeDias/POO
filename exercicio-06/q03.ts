import {Banco, Conta} from '../exercicio-05/banco'

let banco: Banco = new Banco()

banco.inserir(new Conta('1', 100))

//console.log(banco.contas) -> aparece: Property 'contas' is private and only accessible within class 'Banco'.