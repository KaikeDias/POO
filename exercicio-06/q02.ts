class Hora{
    private horas: number;
    private minutos: number;
    private segundos: number;

    constructor(horas: number, minutos: number, segundos: number){
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    public getHora(): number{
        return this.horas;
    }

    public getMinuto(): number{
        return this.minutos;
    }

    public getSegundo(): number{
        return this.segundos;
    }

    public horaFormatada(): string{
        return `${this.horas}:${this.minutos}:${this.segundos}`;
    }
}

let hora: Hora = new Hora(15,39,50);

console.log(hora.getHora());
console.log(hora.getMinuto());
console.log(hora.getSegundo());
console.log(hora.horaFormatada());