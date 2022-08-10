import {input} from './io_utils.js'

function main(){
    const vetor = new Array(5)

    for(let i = 0; i < 5; i++){
        vetor[i] = Number(input(`Valor da posicao [${i}]: `))
    }

    const vetor_crescente = crescente(vetor)
    const vetor_decrescente = decrescente(vetor_crescente)

    console.log(`Vetor crescente: ${vetor_crescente}`)
    console.log(`Vetor decrescente: ${vetor_decrescente}`)
}

function crescente(vetor){
    let ordenar = 0
    let j 
    
    while(ordenar === 0){
        ordenar = 1
        for(let i in vetor){
            if(vetor[i] < vetor[i-1]){
                j = vetor[i]
                vetor[i] = vetor [i-1]
                vetor[i-1] = j
                ordenar = 0
            }
        }
    }
    
    return vetor
}

function decrescente(vetor){
    const decrescente = new Array(5)

    let num = vetor.length-1 
    
    for(let i = 0; i < vetor.length; i++){
        decrescente[i] = vetor[num]
        num--
    }

    return decrescente
}

main()