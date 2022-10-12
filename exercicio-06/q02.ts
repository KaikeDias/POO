class Hora{
    constructor(private horas: number, private minutos: number, private segundos: number){
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    get Hora(): number{
        return this.horas;
    }

    get Minuto(): number{
        return this.minutos;
    }

    get Segundo(): number{
        return this.segundos;
    }

    public horaFormatada(): string{
        return `${this.horas}:${this.minutos}:${this.segundos}`;
    }
}

let hora: Hora = new Hora(15,39,50);

console.log(hora.Hora);
console.log(hora.Minuto);
console.log(hora.Segundo);
console.log(hora.horaFormatada());