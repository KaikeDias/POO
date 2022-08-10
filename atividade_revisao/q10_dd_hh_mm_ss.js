import {input} from './io_utils.js'

function main(){
    const ms = Number(input('Valor em milissegundos: '))/1000

    const [dias, horas, minutos, segundos] = converter(ms)

    console.log(`${dias} dia(s) ${horas}, hora(s) ${minutos}, minuto(s) e ${segundos} segundo(s)`)
}

function converter(ms){

    const dias = Math.trunc(ms/86400)
    let resto = ms % 86400
    const horas = Math.trunc(resto/3600)
    resto = resto % 3600
    const minutos = Math.trunc(resto/60)
    resto = resto % 60
    const segundos = resto

    return [dias, horas, minutos, segundos]
}

main()