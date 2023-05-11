import fs from 'fs';
import chalk from 'chalk';

// Recebe um erro como parâmetro e 'lança' no terminalf um novo objeto Error do JS com o erro recebido, destacando o código de erro e inserindo uma mensagem:
function trataErro(erro) {
   throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
};

// Se der tudo certo com a função readfile, o conteúdo será exibido no console. Se houver algum erro, a condicional chama a função trataErro passando o erro gerado como parâmetro:
function pegaArquivo(caminhoArquivo) {
   const encoding = 'UTF-8';
   fs.readFile(caminhoArquivo, encoding, (erro, conteudo) => {
      if (erro) {
         trataErro(erro);
      };
      console.log(chalk.green(conteudo));
   }) 
};

pegaArquivo('./arquivos/texto.md');