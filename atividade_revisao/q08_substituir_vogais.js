import {input} from './io_utils.js'

function main(){
    const frase = 'áéíóú' //Nao coloquei pro usuario digitar pois o terminal nao aceita letras acentuadas

    const nova_frase = substituir(frase)

    console.log(nova_frase)
}

function substituir(frase){
    let nova_frase = ''
    const acentuadas = "ÄÅÁÂÀÃäáâàãÉÊËÈéêëèÍÎÏÌíîïìÖÓÔÒÕöóôòõÜÚÛüúûùÇç"
    const nao_acentuadas = "AAAAAAaaaaaEEEEeeeeIIIIiiiiOOOOOoooooUUUuuuuCc"
    
    let troca 

    for(let letra of frase){
        troca = false
        
        for(let i = 0; i < acentuadas.length; i++){
            if(letra === acentuadas[i]){
                nova_frase += nao_acentuadas[i]
                troca = true
            }
        }

        if(troca === false){
            nova_frase += letra
        }
    }

    return nova_frase
}

main()