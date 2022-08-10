import {input} from './io_utils.js'

function main(){
    const n1 = Number(input('Primeiro valor: '))
    const n2 = Number(input('Segundo valor: '))

    const maior = maior_valor(n1,n2)
    const menor = menor_valor(n1,n2)
    
    let cont = 0

    for(let i = menor; i < maior - 1; i++){ 
        cont++
    }

    console.log(`Existem ${cont} numeros entre ${n1} e ${n2}`)
}

function maior_valor(n1,n2){
    let maior = n1

    if(n2 > n1){
        maior = n2
    }

    return maior
}

function menor_valor(n1,n2){
    let menor = n1

    if(n2 < n1){
        menor = n2
    }

    return menor
}

main()