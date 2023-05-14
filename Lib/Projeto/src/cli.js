import pegaArquivo from "./index.js";
import chalk from 'chalk';
import fs from 'fs';

//Usano o objeto process, próprio do node, que permite obter o que foi inserido na linha de comando de chamada do código (argv - argumentos da linha de comando): 
const caminho = process.argv;
// Retorna informações referente aos comandos passados pelo terminal, como caminhos de arquivo, em formato de strings, ou mesmo strings, em formado de array:
   //console.log(caminho);
   //console.log(caminho[2]);

// Vamos usar a biblioteca fs. A função lstatSync() permite iteragir com o argumento específicado. Caso o argumento passado na linha de comando seja um caminho de arquivo  (isFile() = true) iremos chamar a função pegaArquivo direto com o caminho do arquivo; Caso o argumento seja uma pasta (isDirectory() = true), vamos usar o readdir() que retorna um array com os nomes dos arquivos na pasta.
async function processaConteudo(argumentos) {
   const caminho = argumentos[2];
   if (fs.lstatSync(caminho).isFile()) {
      const resultado = await pegaArquivo(caminho);
      imprimeLista(resultado);
   } else if (fs.lstatSync(caminho).isDirectory()) {
      const arquivos = await fs.promises.readdir(caminho);
      arquivos.forEach(async (nomeDeArquivo) => {
         const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
         imprimeLista(lista);
      })
   }

   function imprimeLista(resultado) {
      console.log(chalk.yellow('Listas de Links: '), resultado);
   }

   
}

processaConteudo(caminho);
