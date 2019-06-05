class NegociacaoController {
    constructor() {
        this._negocicacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negocicacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseInt(this._inputValor.value));
        this._negocicacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negocicacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}
