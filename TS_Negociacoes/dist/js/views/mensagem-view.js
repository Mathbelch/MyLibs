export class MensagemView {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    template(model) {
        return `
         <p class = "alert-info">${model}</p>
      `;
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
