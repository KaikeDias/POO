"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarOpcao = exports.lerNumero = exports.InputError = void 0;
const q01_1 = require("./q01");
var input = require('prompt-sync')();
class InputError extends q01_1.AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.InputError = InputError;
function lerNumero(message) {
    let numero = Number(input(message));
    if (isNaN(numero)) {
        throw new InputError('O valor digitado não é um número');
    }
    else {
        return numero;
    }
}
exports.lerNumero = lerNumero;
function validarOpcao(opcao) {
    if (opcao != '1' && opcao != '2' && opcao != '3' && opcao != '4' && opcao != '5' && opcao != '6' && opcao != '7' && opcao != '0') {
        throw new InputError('Opção inexistente!');
    }
}
exports.validarOpcao = validarOpcao;
