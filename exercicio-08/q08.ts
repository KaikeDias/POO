var input = require('prompt-sync')()
import {Conta, Banco, Poupanca, ContaImposto} from '../exercicio-05/banco'
import * as fs from 'fs'
import { lerNumero, validarOpcao } from './q09'

let b: Banco = new Banco()
let opcao: string = ''
let continuar: string

do{
    console.log('Bem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
    '4 - Depositar 5 - Excluir 6 - Transferir\n' +
    '7 – Totalizações 8 - Render Juros 9 - Ler arquivo de texto\n' +
    '0 - Sair\n');
    opcao = input("Opção: ");
    validarOpcao(opcao)

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
        case '8':
            renderJuros()
            break
        case '9':
            lerArquivoTexto()
            break
    }

    continuar = input("\nPress <ENTER> to continue")
    console.clear()
}while(opcao != '0')

function inserir(): void {
    console.log("\nCadastrar conta\n");
    try {
        let numero: string = input('Digite o número da conta: ');
        let tipo: string = input('Tipo de conta (normal,poupanca,conta imposto): ')
        if(tipo == 'poupanca'){
            let taxaJuros: number = lerNumero('Digite a taxa de juros: ')
            let conta: Poupanca;
            conta = new Poupanca(numero, 0, taxaJuros);
            b.inserir(conta);
        }else if(tipo == 'normal'){
            let conta: Conta;
            conta = new Conta(numero, 0);
            b.inserir(conta);
        }else if(tipo == 'conta imposto'){
            let taxaDesconto: number = lerNumero('Digite a taxa de desconto: ')
            let conta: ContaImposto;
            conta = new ContaImposto(numero, 0, taxaDesconto);
            b.inserir(conta);
        }
    } catch (error: any) {
        console.log(error.message)
    }
}

function consultar(): void{
    console.log("\nConsultar Conta\n")
    try {
        let numero: string = input('Digite o numero da conta: ')
        console.log(b.consultar(numero))
    } catch (error: any) {
        console.log(error.message)
    }
}

function sacar(): void{
    console.log("\nSacar\n")
    try {
        let numero: string = input('Digite o numero da conta: ')
        let valor: number = lerNumero('Valor que deseja sacar: ')
        b.sacar(numero, valor)
    } catch (error: any) {
        console.log(error.message)
    }
}

function depositar(): void{
    console.log("\nDepositar\n")
    try {
        let numero: string = input('Digite o numero da conta: ')
        let valor: number = lerNumero('Valor que deseja depositar: ')
        b.depositar(numero, valor)
    } catch (error: any) {
        console.log(error.message)
    }
}

function excluir(): void{
    console.log("\nExcluir\n")
    try {
        let numero: string = input('Digite o numero da conta: ')
        b.excluirConta(numero)
    } catch (error: any) {
        console.log(error.message)
    }
}

function transferir(): void{
    console.log("\nTransferir\n")
    try {
        let numero: string = input('Digite o numero da conta que vai transferir: ')
        let numero2: string = input('Digite o numero da conta destino: ')
        let valor: number = lerNumero('Valor que deseja transferir: ')
        b.transferir(numero2, numero, valor)
    } catch (error: any) {
        console.log(error.message)
    }
}

function totalizacoes(): void{
    console.log("\nTotalizações\n")
    try {
        console.log(b.depositoTotal())
    } catch (error: any) {
        console.log(error.message)
    }
}

function renderJuros(): void{
    console.log('\nRender Juros\n')
    try {
        let numero: string = input('Digite o numero da conta que vai render juros: ')
        b.renderJuros(numero);
    } catch (error: any) {
        console.log(error.message)
    }
}

function lerArquivoTexto(): void{
    try {
        let contas: Array<string> = fs.readFileSync('./../../contas.txt').toString().split('\n')

        for(let elemento of contas){
            let dados = elemento.split(';')

            let [tipo, numero, saldo, taxa]: string[] = dados

            if(tipo == 'Poupanca'){
                let conta: Poupanca = new Poupanca(numero, Number(saldo), Number(taxa))
                b.inserir(conta)
            }else if(tipo == 'Imposto'){
                let conta: ContaImposto = new ContaImposto(numero, Number(saldo), Number(taxa))
                b.inserir(conta)
            }else if(tipo == 'Normal'){
                let conta: Conta = new Conta(numero, Number(saldo))
                b.inserir(conta)
            }
        }
    } catch (error: any) {
        console.log(error.message)
    }
}