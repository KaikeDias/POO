function saudacao(nome: string, pronome: string = 'Sr'): void{
    console.log(`Bom dia ${pronome}. ${nome}`)
}

let nome: string = 'Sávia'
let pronome: string = 'Sra'

saudacao(nome, pronome)