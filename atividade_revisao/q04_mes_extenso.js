import {input} from './io_utils.js'

function main(){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    const num = Number(input('Digite um numero entre 1 e 12 referente aos meses: '))

    console.log(`O numero ${num} equivale ao mes ${meses[num-1]} que possui ${dias[num-1]} dias`)
}

main()