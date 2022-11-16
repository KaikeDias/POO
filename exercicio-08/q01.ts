export class AplicacaoError extends Error{
    constructor(message: string) {
        super(message);
    }
}

export class SaldoInsuficienteError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

export class ContaInexistenteError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

export class ContaExistenteError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}
