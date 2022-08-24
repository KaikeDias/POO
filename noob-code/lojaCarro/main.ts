import carro from "./carro";
import cliente from "./cliente";
import compraCarro from "./compraCarro";
import funcionario from "./funcionario";

let car = new carro("Logan", 1999, 10000)

let Cliente = new cliente("Kaike", 5000)

let Funcionario = new funcionario("Joao")

let compra = new compraCarro(Cliente, Funcionario, car)

compra.detalharCompra()