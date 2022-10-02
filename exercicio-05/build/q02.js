"use strict";
class Postagem {
    constructor(id, texto, qtdCurtidas) {
        this.id = id;
        this.texto = texto;
        this.qtdCurtidas = qtdCurtidas;
    }
    curtir() {
        this.qtdCurtidas++;
    }
    toString() {
        return `Id: ${this.id}, Texto: ${this.texto}, Quantidade de curtidas: ${this.qtdCurtidas}`;
    }
}
class MicroBlog {
    constructor() {
        this.postagens = [];
    }
    inserirPostagem(post) {
        this.postagens.push(post);
    }
    postagemMaisCurtida() {
        let post = this.postagens.reduce((maiorPostagem, postagemAtual) => postagemAtual.qtdCurtidas > maiorPostagem.qtdCurtidas ?
            maiorPostagem = postagemAtual :
            maiorPostagem = maiorPostagem);
        return [post];
    }
    curtir(id) {
        this.postagens[id].curtir();
    }
    toString() {
        let text = '';
        this.postagens.forEach((postagem) => text += `${postagem.toString()}\n`);
        return text;
    }
    excluirPostagem(id) {
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                this.postagens.splice(i, 1);
                break;
            }
        }
    }
}
let blog = new MicroBlog();
blog.inserirPostagem(new Postagem(1, 'abc', 10));
blog.inserirPostagem(new Postagem(2, 'def', 20));
blog.inserirPostagem(new Postagem(3, 'xyz', 15));
blog.excluirPostagem(2);
console.log(blog.toString());
