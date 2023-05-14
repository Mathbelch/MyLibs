import pegaArquivo from "./index.js";
import chalk from 'chalk';

//Usano o objeto process, próprio do node, que permite obter o que foi inserido na linha de comando de chamada do código (argv - argumentos da linha de comando): 
const caminho = process.argv;
// Retorna informações referente aos comandos passados pelo terminal, como caminhos de arquivo, em formato de strings, ou mesmo strings, em formado de array:
   //console.log(caminho);
   //console.log(caminho[2]);

async function processaConteudo(caminho) {
   const resultado = await pegaArquivo(caminho[2]);
   console.log(chalk.yellow('lista de links'),resultado);
}

processaConteudo(caminho);
