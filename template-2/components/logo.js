class KleberLogo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = ` 
            <link rel="stylesheet" href="./main.css">           
            <div class="logo-container">
                    <span class="logo-text">kleber</span>
                    <div class="logo-squares">
                        <div class="square square-a">A</div>
                        <div class="square square-i">I</div>
                    </div>
            </div>
        `;
  }
}

customElements.define("kleber-logo", KleberLogo);
