class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negocicacoes: Negociacoes = new Negociacoes()

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseInt(this._inputValor.value)
        );

        this._negocicacoes.adiciona(negociacao)

        this._negocicacoes.paraArray().length = 0

        // this._negocicacoes.paraArray().forEach(negociacao => {
        //     console.log(negociacao.data)
        //     console.log(negociacao.quantidade)
        //     console.log(negociacao.valor)
        // })
    }
}