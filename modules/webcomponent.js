class webComponent extends HTMLLIElement {
    constructor() {
        super();
        this.finished = false;
    }

    connectedCallback() {
        // Configuración propiedad finished
        this.finished = true;
    }

    get finished() {
        return this._finished;
    }

    set finished(value) {
        this._finished = value;
    }

}