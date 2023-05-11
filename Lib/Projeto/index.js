import fs from 'fs';
import chalk from 'chalk';

// Recebe um erro como parâmetro e 'lança' no terminalf um novo objeto Error do JS com o erro recebido, destacando o código de erro e inserindo uma mensagem:
function trataErro(erro) {
   throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
};

// Se der tudo certo com a função readfile, o conteúdo será exibido no console. Se houver algum erro, a condicional chama a função trataErro passando o erro gerado como parâmetro:

   // Método síncrono:
/*function pegaArquivo(caminhoArquivo) {
   const encoding = 'UTF-8';
   fs.readFile(caminhoArquivo, encoding, (erro, conteudo) => {
      if (erro) {
         trataErro(erro);
      };
      console.log(chalk.green(conteudo));
   }) 
};*/

   //Método assíncrono usando o then e catch: passamos a promessa de radfile que, quando resolvida, retornará o que está dentro de then. Caso de algum erro, o catch chamará a função trataErro passando  o erro que foi gerado:
function pegaArquivo(caminhoArquivo) {
   const encoding = 'utf-8';
   fs.promises
   .readFile(caminhoArquivo, encoding)
   .then((conteudo) => console.log(chalk.green(conteudo)))
   .catch(trataErro);
}; 

   


pegaArquivo('./arquivos/texto.md');