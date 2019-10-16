class CodeOne extends HTMLElement {
    constructor() {
        super();
        this.answer = 42;
    }

    connectedCallback() {
        this.innerHTML =
            "<h2>hello friend ${this.answer}</h2>";
        }
}