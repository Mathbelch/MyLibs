import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form){
   form.addEventListener('submit', event => {
      event.preventDefault(); // Para o submit não recarregar a página.
      controller.adiciona();
   });
} else {
   throw Error('Não foi possível inicializar aplicação. Verifique a existência do form.')
};


