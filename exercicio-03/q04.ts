const array = [1,2,3,4,5]
let saida: string = ''

array.forEach((numero: number) => {
    saida += `${numero}-`
})

console.log(saida)