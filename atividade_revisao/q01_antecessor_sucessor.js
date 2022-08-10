import {input} from './io_utils.js'

function main(){
    const numero = Number(input('Numero: '))

    const antecessor = Math.trunc(numero)
    const sucessor = Math.trunc(numero) + 1

    console.log(`Antecessor: ${antecessor}`)
    console.log(`Sucessor: ${sucessor}`)
}

main()