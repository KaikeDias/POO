class Saudacao{
    texto: string
    destinatario: string

    constructor(texto: string, destinatario: string){
        this.texto = texto
        this.destinatario = destinatario
    }

    obterSaudacao(): void{
        console.log(`${this.texto}, ${this.destinatario}`)
    }
}

let saudacao: Saudacao = new Saudacao('Bom dia', 'Kaike')

saudacao.obterSaudacao()