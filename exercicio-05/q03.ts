var input = require('prompt-sync')()
import {Conta, Banco, Poupanca} from './banco'

let b: Banco = new Banco()
let opcao: string = ''
let continuar: string

do{
    console.log('Bem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
    '4 - Depositar 5 - Excluir 6 - Transferir\n' +
    '7 – Totalizações' +
    '0 - Sair\n');
    opcao = input("Opção: ");

    switch(opcao){
        case '1': 
            inserir()
            break

        case '2':
            consultar()
            break

        case '3':
            sacar()
            break
        case '4':
            depositar()
            break
        case '5':
            excluir()
            break
        case '6':
            transferir()
            break
        case '7':
            totalizacoes()
            break
    }

    continuar = input("\nPress <ENTER> to continue")
    console.clear()
}while(opcao != '0')

function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta: ');
    let conta: Conta;
    conta = new Conta(numero, 0);
    b.inserir(conta);
}

function consultar(): void{
    console.log("\nConsultar Conta\n")
    let numero: string = input('Digite o numero da conta: ')
    console.log(b.consultar(numero))
}

function sacar(): void{
    console.log("\nSacar\n")
    let numero: string = input('Digite o numero da conta: ')
    let valor: number = Number(input('Valor que deseja sacar: '))
    b.sacar(numero, valor)
}

function depositar(): void{
    console.log("\nDepositar\n")
    let numero: string = input('Digite o numero da conta: ')
    let valor: number = Number(input('Valor que deseja depositar: '))
    b.depositar(numero, valor)
}

function excluir(): void{
    console.log("\nExcluir\n")
    let numero: string = input('Digite o numero da conta: ')
    b.excluirConta(numero)
}

function transferir(): void{
    console.log("\nTransferir\n")
    let numero: string = input('Digite o numero da conta que vai transferir: ')
    let numero2: string = input('Digite o numero da conta destino: ')
    let valor: number = Number(input('Valor que deseja transferir: '))
    b.transferir(numero2, numero, valor)
}

function totalizacoes(): void{
    console.log("\nTotalizações\n")
    console.log(b.depositoTotal())
}