import chalk from 'chalk'

function extraiLinks(arrLinks) {
   return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}


async function checaStatus(listaURLs) {
   const arrStatus = await Promise.all(
      listaURLs.map(async (url) => {
         try {
            const response = await fetch(url, { method: 'HEAD'});
            return `${response.status} - ${response.statusText}`;
         } catch(erro) {
            return manejaErros(erro);
         }
        
      })
   )
   return arrStatus;
}

export default async function listaValidada(listaDeLinks) {
   const links =  extraiLinks(listaDeLinks);
   const status = await checaStatus(links);
   return listaDeLinks.map((objeto, indice) => ({
      ...objeto,
      status: status[indice]
   }));
}

function manejaErros(erro) {
   if (erro = erro.cause.code === 'ENOTFOUND') {
      return 'Link não encontrado';
   } else {
      return 'Ocorreu algum erro';
   }
}