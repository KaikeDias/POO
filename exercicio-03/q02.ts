function ehPrimo(valor: number): boolean{
    let divisores: number = 0

    for(let i: number = 1; i <= valor; i++){
        if(valor % i == 0){
            divisores++
        }
    }

    if(divisores == 2){
        return true
    }else{
        return false
    }
}

let valor: number = 2

console.log(ehPrimo(valor))