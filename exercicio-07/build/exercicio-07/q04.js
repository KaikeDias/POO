"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var input = require('prompt-sync')();
const banco_1 = require("../exercicio-05/banco");
const fs = __importStar(require("fs"));
let b = new banco_1.Banco();
let opcao = '';
let continuar;
do {
    console.log('Bem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações 8 - Render Juros 9 - Ler arquivo de texto\n' +
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
        case '8':
            renderJuros();
            break;
        case '9':
            lerArquivoTexto();
            break;
    }
    continuar = input("\nPress <ENTER> to continue");
    console.clear();
} while (opcao != '0');
function inserir() {
    console.log("\nCadastrar conta\n");
    let numero = input('Digite o número da conta: ');
    let tipo = input('Tipo de conta (normal,poupanca,conta imposto): ');
    if (tipo == 'poupanca') {
        let taxaJuros = Number(input('Digite a taxa de juros: '));
        let conta;
        conta = new banco_1.Poupanca(numero, 0, taxaJuros);
        b.inserir(conta);
    }
    else if (tipo == 'normal') {
        let conta;
        conta = new banco_1.Conta(numero, 0);
        b.inserir(conta);
    }
    else if (tipo == 'conta imposto') {
        let taxaDesconto = Number(input('Digite a taxa de desconto: '));
        let conta;
        conta = new banco_1.ContaImposto(numero, 0, taxaDesconto);
        b.inserir(conta);
    }
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
function renderJuros() {
    console.log('\nRender Juros\n');
    let numero = input('Digite o numero da conta que vai render juros: ');
    b.renderJuros(numero);
}
function lerArquivoTexto() {
    let contas = fs.readFileSync('./../../contas.txt').toString().split('\n');
    for (let elemento of contas) {
        let dados = elemento.split(';');
        let [tipo, numero, saldo, taxa] = dados;
        if (tipo == 'Poupanca') {
            let conta = new banco_1.Poupanca(numero, Number(saldo), Number(taxa));
            b.inserir(conta);
        }
        else if (tipo == 'Imposto') {
            let conta = new banco_1.ContaImposto(numero, Number(saldo), Number(taxa));
            b.inserir(conta);
        }
        else if (tipo == 'Normal') {
            let conta = new banco_1.Conta(numero, Number(saldo));
            b.inserir(conta);
        }
    }
}
// function lerArquivoTexto(): void {
//     let contas: Array<String> = fs.readFileSync('./../../contas.txt').toString().split('\n');
//     for(let conta of contas) {
//         let objConta: Conta;
//         let dadosConta = conta.split('; ');
//         let [tipo, numeroConta, saldo, taxa]: string[] = dadosConta;
//         if (tipo == 'poupanca') {
//             objConta = new Poupanca(numeroConta, Number(saldo), Number(taxa));
//         } else if(tipo == 'I') {
//             objConta = new ContaImposto(numeroConta, Number(saldo), Number(taxa));
//         } else {
//             objConta = new Conta(numeroConta, Number(saldo));
//         }
//         b.inserir(objConta);
//     }
// }
