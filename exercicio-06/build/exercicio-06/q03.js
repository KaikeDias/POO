"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const banco_1 = require("../exercicio-05/banco");
let banco = new banco_1.Banco();
banco.inserir(new banco_1.Conta('1', 100));
//console.log(banco.contas) -> aparece: Property 'contas' is private and only accessible within class 'Banco'.
