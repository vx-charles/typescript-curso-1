export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number { // o "get" é como se fosse uma propriedade de class, ele te dá o acesso aos atributos privados caso vc queira exibir em tela.
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
}