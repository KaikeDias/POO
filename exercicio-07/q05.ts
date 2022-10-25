class Produto {
    constructor(private _id: string, private _descricao: string, private _qtdProdutos: number, private _valorUnitario: number){}

    get id(){
        return this._id
    }

    repor(valor: number): void { 
        this._qtdProdutos += valor
    }
    
    darBaixa(valor: number): void { 
        this._qtdProdutos -= valor
    }
    
}

class ProdutoPerecivel extends Produto {
    constructor(_id: string, _descricao: string, _qtdProdutos: number, _valorUnitario: number, private dtValidade: Date){
        super(_id, _descricao, _qtdProdutos, _valorUnitario)
    }

    ehValido(): boolean {
        let data: Date = new Date()

        return data.getTime() <= this.dtValidade.getTime()
    }

    repor(valor: number): void {
        if(this.ehValido()){
            super.repor(valor)
        }
    }

    darBaixa(valor: number): void {
        if(this.ehValido()){
            super.darBaixa(valor)
        }
    }
}

class Estoque {
    produtos: Produto[] = []

    inserir(p: Produto): void{
        let produto: Produto = this.consultar(p.id)

        if(produto == null){
            this.produtos.push(p)
        }else{
            console.log("Esse produto ja existe")
        }
    }

    consultar(id: string): Produto{
        let produtoProcurado!: Produto
        
        for(let produto of this.produtos){
            if(produto.id == id){
                produtoProcurado = produto
                break
            }
        }

        return produtoProcurado
    }

    excluir(id: string): void{
        for(let i = 0; i < this.produtos.length; i++){
            if(this.produtos[i].id == id){
                this.produtos.splice(i, 1)
                break
            }
        }
    }

    repor(id: string, valor: number): void{
        let produto: Produto = this.consultar(id)

        if(produto != null){
            produto.repor(valor)
        }
    }

    darBaixa(id: string, valor: number): void{
        let produto: Produto = this.consultar(id)
        
        if(produto != null){
            produto.repor(valor)
        }
    }

    listarPereciveisVencidos(): void {
        for(let produto of this.produtos){
            if(produto instanceof ProdutoPerecivel){
                if(!(produto.ehValido())){
                    console.log(produto)
                }
            }
        }
    }
}

let produto: Produto = new Produto('1', 'Agua', 0, 2.25)
let produtoPerecivel1: ProdutoPerecivel = new ProdutoPerecivel('2', 'Carne', 0, 20, new Date("2022-12-26"))
let produtoPerecivel2: ProdutoPerecivel = new ProdutoPerecivel('3', 'Maça', 0, 3, new Date("2022-09-20"))
let produtoPerecivel3: ProdutoPerecivel = new ProdutoPerecivel('4', 'Laranja', 0, 3, new Date("2022-05-10"))

let estoque: Estoque = new Estoque()
estoque.inserir(produto)
estoque.inserir(produtoPerecivel1)
estoque.inserir(produtoPerecivel2)
estoque.inserir(produtoPerecivel3)

estoque.repor('1', 10)
estoque.repor('2', 20)
estoque.repor('3', 15)
estoque.repor('4', 25)

console.log(estoque.listarPereciveisVencidos())
