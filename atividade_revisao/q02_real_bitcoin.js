import {input} from './io_utils.js'

function main(){
    const real = Number(input('Valor em reais: '))

    const bitcoin = real / 118870.01 //cotação do bitcoin no momento que fiz a questao

    console.log(`R$${real} equivale a ${bitcoin.toFixed(8)} bitcoins`)
}

main()