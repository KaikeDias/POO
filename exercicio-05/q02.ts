class Postagem{
    id: number
    texto: string
    qtdCurtidas: number

    constructor(id: number, texto: string, qtdCurtidas: number){
        this.id = id
        this.texto = texto
        this.qtdCurtidas = qtdCurtidas
    }

    curtir(): void{
        this.qtdCurtidas++
    }

    toString(): string{
        return `Id: ${this.id}, Texto: ${this.texto}, Quantidade de curtidas: ${this.qtdCurtidas}`
    }
}

class MicroBlog{
    postagens: Postagem[] = []

    inserirPostagem(post: Postagem){
        this.postagens.push(post)
    }

    postagemMaisCurtida(): Array<Postagem>{
        let post = this.postagens.reduce((maiorPostagem, postagemAtual) => 
        postagemAtual.qtdCurtidas > maiorPostagem.qtdCurtidas ? 
        maiorPostagem = postagemAtual : 
        maiorPostagem = maiorPostagem)

        return [post]
    }

    curtir(id: number): void{
        this.postagens[id].curtir()
    }

    toString(): string{
        let text: string = ''

        this.postagens.forEach((postagem) => text += `${postagem.toString()}\n`)

        return text
    }

    excluirPostagem(id: number): void{
        for(let i = 0; i < this.postagens.length; i++){
            if(this.postagens[i].id == id){
                this.postagens.splice(i, 1)
                break
            }
        }
    }
}

let blog: MicroBlog = new MicroBlog()

blog.inserirPostagem(new Postagem(1, 'abc', 10))
blog.inserirPostagem(new Postagem(2, 'def', 20))
blog.inserirPostagem(new Postagem(3, 'xyz', 15))
blog.excluirPostagem(2)

console.log(blog.toString())







