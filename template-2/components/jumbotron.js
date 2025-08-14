class KleberJumbotron extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const title = this.getAttribute("title");
    const description = this.getAttribute("description");
    this.shadowRoot.innerHTML = ` 
              <link rel="stylesheet" href="./main.css">           
                <section class="container-hero-section">
                    <div class="container-hero-content">
                    <h1>${title}</h1>
                    <p>${description}</p>
                    </div>
                </section>
          `;
  }
}

customElements.define("kleber-jumbotron", KleberJumbotron);
