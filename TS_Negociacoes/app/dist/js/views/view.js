export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existem no DOM. Verifique o seletor!`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
