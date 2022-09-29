class Equipamento{
    ligado: boolean = false

    liga(): void{
        if(!this.ligado){
            this.ligado = true
        }
    }

    desliga(): void{
        if(this.ligado){
            this.ligado = false
        }
    }

    inverte(): void{
        if(this.ligado){
            this.ligado = false
        }else{
            this.ligado = true
        }
    }

    estaLigado(): boolean{
        return this.ligado
    }
}

let lampada: Equipamento = new Equipamento()

lampada.liga()

console.log(lampada.estaLigado())

lampada.desliga()
console.log(lampada.estaLigado())

