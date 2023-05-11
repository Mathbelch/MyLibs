import fs from 'fs';
import chalk from 'chalk';

// Texto de teste:
const teste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

function extraiLinks(texto) {
   const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
   const capturas = regex.exec(texto);
   console.log(capturas)
}
extraiLinks(teste);
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
/*function pegaArquivo(caminhoArquivo) {
   const encoding = 'utf-8';
   fs.promises
   .readFile(caminhoArquivo, encoding)
   .then((conteudo) => console.log(chalk.green(conteudo)))
   .catch(trataErro);
}; */

   //Método assíncrono usando o async/await e tratamento de erro com try/catch:
async function pegaArquivo(caminhoArquivo) {
   try {
      const encoding = 'utf-8';
      const conteudo = await fs.promises.readFile(caminhoArquivo, encoding)
      console.log(chalk.green(conteudo))
   } catch (erro) {
      trataErro(erro)
   } finally {
      console.log(chalk.yellow('Operação concluída'));
   }
};

   
// \[[^[\]]*?\] --> Regex para pegar tudo que estiver entre colchetes exceto por outros colchetes, indicativo de link em markdown!

//(http://nome.nome) -> Regex para pegar o link!

// \[([^[\]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\) -> Regex completa, separando os retornos em grupos, um grupo contendo o título do link e outro contendo o link propriamente dito.

//pegaArquivo('./arquivos/texto.md');