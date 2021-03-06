import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { domInject, throttle } from '../helpers/decorators/index'
import { NegociacaoService } from '../services/index';
import { imprime } from '../helpers/index'

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negocicacoes = new Negociacoes()
    private _negociacoesView = new NegociacoesView('#negociacoesView')
    private _mensagemView = new MensagemView('#mensagemView')
    private _service = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negocicacoes)
    }

    adiciona(event: Event) {

        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (data.getDay() == DiaDaSemana.Sabado || data.getDay() == DiaDaSemana.Domingo) {
            this._mensagemView.update('Somente negociações em dias úteis');
            return
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negocicacoes.adiciona(negociacao)

        imprime(negociacao, this._negocicacoes);

        this._negociacoesView.update(this._negocicacoes)
        this._mensagemView.update('Negociação adicionada com sucesso')
    }

    @throttle()
    async importaDados() {
        try {
            const negociacoesParaImportar = await this._service
                .obterNegociacoes(res => {
                    if (res.ok) {
                        return res
                    } else {
                        throw new Error(res.statusText)
                    }
                });
            const negociacoesJaImportadas = this._negocicacoes.paraArray();
            negociacoesParaImportar
                .filter(negociacao =>
                    !negociacoesJaImportadas.some(jaImportada =>
                        negociacao.ehIgual(jaImportada)))
                .forEach(negociacao =>
                    this._negocicacoes.adiciona(negociacao));
            this._negociacoesView.update(this._negocicacoes);
        } catch (err) {
            this._mensagemView.update(err.message);
        }
    }

    private _EhDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo
    }

}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
}