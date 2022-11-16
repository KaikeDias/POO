import {AplicacaoError} from './q01'

export class ValorInvalidoError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}