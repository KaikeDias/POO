import {input} from './io_utils.js'

function main(){
    const v = Number(input('Valor em reais: '))
    const t = Number(input('Taxa de juros: '))

    const vetor = valores_finais(v,t)

    console.log(vetor)
}

function valores_finais(v,t){
    const vetor = new Array(12)

    let valor_taxado = v + v * (t/100)

    for(let i = 0; i < 12; i++){
        vetor[i] = valor_taxado

        valor_taxado = valor_taxado + valor_taxado * (t/100)
    }

    return vetor
}   

main()