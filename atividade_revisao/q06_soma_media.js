import {input} from './io_utils.js'

function main(){
    let numero = Number(input('Numero: '))
    const vetor = []

    const i = numero
    let soma = 0
    let cont = 0

    while(numero !== -1){
        vetor[cont] = numero
        soma += numero
        cont++

        numero = Number(input('Numero: '))
    }

    const media = soma / cont

    let variancia = 0

    for(let j = 0; j < vetor.length; j++){
        variancia += (media - vetor[j]) * (media - vetor[j])
    }

    const desvio_padrao = Math.sqrt(variancia/vetor.length)

    console.log(`Soma: ${soma}`)
    console.log(`Media: ${media}`)
    console.log(`Desvio padrão: ${desvio_padrao}`)
}

main()