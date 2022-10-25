"use strict";
class Produto {
    constructor(_id, _descricao, _qtdProdutos, _valorUnitario) {
        this._id = _id;
        this._descricao = _descricao;
        this._qtdProdutos = _qtdProdutos;
        this._valorUnitario = _valorUnitario;
    }
    get id() {
        return this._id;
    }
    repor(valor) {
        this._qtdProdutos += valor;
    }
    darBaixa(valor) {
        this._qtdProdutos -= valor;
    }
}
class ProdutoPerecivel extends Produto {
    constructor(_id, _descricao, _qtdProdutos, _valorUnitario, dtValidade) {
        super(_id, _descricao, _qtdProdutos, _valorUnitario);
        this.dtValidade = dtValidade;
    }
    ehValido() {
        let data = new Date();
        return data.getTime() <= this.dtValidade.getTime();
    }
    repor(valor) {
        if (this.ehValido()) {
            super.repor(valor);
        }
    }
    darBaixa(valor) {
        if (this.ehValido()) {
            super.darBaixa(valor);
        }
    }
}
class Estoque {
    constructor() {
        this.produtos = [];
    }
    inserir(p) {
        let produto = this.consultar(p.id);
        if (produto == null) {
            this.produtos.push(p);
        }
        else {
            console.log("Esse produto ja existe");
        }
    }
    consultar(id) {
        let produtoProcurado;
        for (let produto of this.produtos) {
            if (produto.id == id) {
                produtoProcurado = produto;
                break;
            }
        }
        return produtoProcurado;
    }
    excluir(id) {
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id == id) {
                this.produtos.splice(i, 1);
                break;
            }
        }
    }
    repor(id, valor) {
        let produto = this.consultar(id);
        if (produto != null) {
            produto.repor(valor);
        }
    }
    darBaixa(id, valor) {
        let produto = this.consultar(id);
        if (produto != null) {
            produto.repor(valor);
        }
    }
    listarPereciveisVencidos() {
        for (let produto of this.produtos) {
            if (produto instanceof ProdutoPerecivel) {
                if (!(produto.ehValido())) {
                    console.log(produto);
                }
            }
        }
    }
}
let produto = new Produto('1', 'Agua', 0, 2.25);
let produtoPerecivel1 = new ProdutoPerecivel('2', 'Carne', 0, 20, new Date("2022-12-26"));
let produtoPerecivel2 = new ProdutoPerecivel('3', 'Maça', 0, 3, new Date("2022-09-20"));
let produtoPerecivel3 = new ProdutoPerecivel('4', 'Laranja', 0, 3, new Date("2022-05-10"));
let estoque = new Estoque();
estoque.inserir(produto);
estoque.inserir(produtoPerecivel1);
estoque.inserir(produtoPerecivel2);
estoque.inserir(produtoPerecivel3);
estoque.repor('1', 10);
estoque.repor('2', 20);
estoque.repor('3', 15);
estoque.repor('4', 25);
console.log(estoque.listarPereciveisVencidos());
