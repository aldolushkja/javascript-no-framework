import HelloService from "./HelloService.js"

class CodeOne extends HTMLElement {
    constructor() {
        super();
        this.answer = 42;
        this.hello = new HelloService;
        console.log(this.hello);
    }

    connectedCallback() {
        this.fetchFromServer();
        this.innerHTML = `
        <h2>hello friend ${this.answer} - ${this.getAttribute("message")} - ${hello.hello()}</h2>
        `;
    }

    async fetchFromServer() {
        const response = await fetch("message.json");
        const json = await response.json();
        const { hello } = this.hello;
        console.log(json)

    }
}

customElements.define("code-one", CodeOne);