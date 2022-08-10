import {input} from './io_utils.js'

function main(){
    const n1 = Number(input('Primeiro valor: '))
    const n2 = Number(input('Segundo valor: '))
    const n3 = Number(input('Terceiro valor: '))

    const maior = maior_valor(n1,n2,n3)
    const menor = menor_valor(n1,n2,n3)

    console.log(`Maior: ${maior}`)
    console.log(`Menor: ${menor}`)
}

function maior_valor(n1,n2,n3){
    let maior

    if(n1 > n2 && n1 > n3){
        maior = n1
    }else if(n2 > n1 && n2 > n3){
        maior = n2
    }else if(n3 > n1 && n3 > n2){
        maior = n3
    }

    return maior
}

function menor_valor(n1,n2,n3){
    let menor

    if(n1 < n2 && n1 < n3){
        menor = n1
    }else if(n2 < n1 && n2 < n3){
        menor = n2
    }else if(n3 < n1 && n3 < n2){
        menor = n3
    }

    return menor
}

main()