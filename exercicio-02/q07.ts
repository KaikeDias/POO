class Payment {
    name: string
    time: number
    language: string

    constructor(name: string, time: number, language: string){
        this.name = name
        this.time = time
        this.language = language
    }

    text(){
        console.log(`${this.name}`)
        console.log(`My payment time is ${this.time}`)
        console.log(`and`)
        console.log(`my preffered language is ${this.language}`)
    }
}


let payment: Payment = new Payment('Ely', 120.56, 'TypeScript') 

payment.text()