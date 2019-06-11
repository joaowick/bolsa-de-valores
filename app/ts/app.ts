import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();
//teste
$('.form').submit(controller.adiciona.bind(controller));
$('#botao-importa').click(controller.importaDados.bind(controller))