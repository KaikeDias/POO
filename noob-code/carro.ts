class carro{
    private cor: string
    private ano: number
    private valor: number
    
    constructor(c: string, a: number, v: number){
        this.cor = c
        this.ano = a
        this.valor = v
    }

    public getValor(){
        return this.valor
    }

    public setValor(valor: number){
        this.valor = valor
    }

    public getInfo(){
        console.log(`Cor: ${this.cor}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`Valor: ${this.getValor()}`)
    }
}

let c = new carro("preto", 2020, 20000)

c.getInfo()