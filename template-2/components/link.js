class KleberLink extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
        const label = this.getAttribute("label") || "label";
        const text = this.getAttribute("text") || "";
      this.shadowRoot.innerHTML = ` 
                <link rel="stylesheet" href="./login.css">           
                <div class="signup-link">
                    <p>${text} <a href="#">${label}</a></p>
                </div>
          `;
    }
  }
  
  customElements.define("kleber-link", KleberLink);
  