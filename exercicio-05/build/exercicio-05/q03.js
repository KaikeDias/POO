"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input = require('prompt-sync')();
const banco_1 = require("./banco");
let b = new banco_1.Banco();
let opcao = '';
let continuar;
do {
    console.log('Bem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações' +
        '0 - Sair\n');
    opcao = input("Opção: ");
    switch (opcao) {
        case '1':
            inserir();
            break;
        case '2':
            consultar();
            break;
        case '3':
            sacar();
            break;
        case '4':
            depositar();
            break;
        case '5':
            excluir();
            break;
        case '6':
            transferir();
            break;
        case '7':
            totalizacoes();
            break;
    }
    continuar = input("\nPress <ENTER> to continue");
    console.clear();
} while (opcao != '0');
function inserir() {
    console.log("\nCadastrar conta\n");
    let numero = input('Digite o número da conta: ');
    let conta;
    conta = new banco_1.Conta(numero, 0);
    b.inserir(conta);
}
function consultar() {
    console.log("\nConsultar Conta\n");
    let numero = input('Digite o numero da conta: ');
    console.log(b.consultar(numero));
}
function sacar() {
    console.log("\nSacar\n");
    let numero = input('Digite o numero da conta: ');
    let valor = Number(input('Valor que deseja sacar: '));
    b.sacar(numero, valor);
}
function depositar() {
    console.log("\nDepositar\n");
    let numero = input('Digite o numero da conta: ');
    let valor = Number(input('Valor que deseja depositar: '));
    b.depositar(numero, valor);
}
function excluir() {
    console.log("\nExcluir\n");
    let numero = input('Digite o numero da conta: ');
    b.excluirConta(numero);
}
function transferir() {
    console.log("\nTransferir\n");
    let numero = input('Digite o numero da conta que vai transferir: ');
    let numero2 = input('Digite o numero da conta destino: ');
    let valor = Number(input('Valor que deseja transferir: '));
    b.transferir(numero2, numero, valor);
}
function totalizacoes() {
    console.log("\nTotalizações\n");
    console.log(b.depositoTotal());
}
