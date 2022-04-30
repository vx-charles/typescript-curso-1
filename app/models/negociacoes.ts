import { Negociacao } from './negociacao.js';

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    // lista1(): ReadonlyArray<Negociacao> {} a mesma coisa.
    lista(): readonly Negociacao[] { // evita de criar novas listas ou de mudá-las quando o tipo de método é "readonly".
        // [...this.negociacoes] cria uma lista vazia na memória ou um novo array e adiciona cada negociação. Spread Operator - pega cada item desse array individualmente e coloca na nova lista ou novo array.
        return this.negociacoes;
    }
}
