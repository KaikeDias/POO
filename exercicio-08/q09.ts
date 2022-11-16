import { AplicacaoError } from "./q01";

var input = require('prompt-sync')()

export class InputError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export function lerNumero(message: string): number {
    let numero = Number(input(message))

    if(isNaN(numero)) {
        throw new InputError('O valor digitado não é um número')
    }else {
        return numero;
    }
}

export function validarOpcao(opcao: string): void{
    if(opcao != '1' && opcao != '2' && opcao != '3' && opcao != '4' && opcao != '5' && opcao != '6' && opcao != '7' && opcao != '0') {
        throw new InputError('Opção inexistente!');
    }
}