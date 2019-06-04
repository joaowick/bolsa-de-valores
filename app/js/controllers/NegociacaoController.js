class NegociacaoController {
    constructor() {
        this._negocicacoes = new Negociacoes();
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseInt(this._inputValor.value));
        this._negocicacoes.adiciona(negociacao);
        this._negocicacoes.paraArray().length = 0;
        // this._negocicacoes.paraArray().forEach(negociacao => {
        //     console.log(negociacao.data)
        //     console.log(negociacao.quantidade)
        //     console.log(negociacao.valor)
        // })
    }
}
