export function logarTempoDeExecucao(emSegundos: boolean = false) {
   return function(
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
   ) {
      const metodoOriginal = descriptor.value;
      descriptor.value = function(...args: Array<any>) {
         let dividor = 1;
         let unidade = 'milisegundos';
         if (emSegundos) {
            dividor = 1000;
            unidade = 'segundos';
         }
         const t1 = performance.now();
         const retorno = metodoOriginal.apply(this, args);
         const t2 = performance.now();
         console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/dividor} ${unidade}.`);
         retorno;
      };
      return descriptor;
   }
}