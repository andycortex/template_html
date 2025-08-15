class KleberInput extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
        const label = this.getAttribute("label") || "label";
        const type = this.getAttribute("type") || "text";
        const id = this.getAttribute("id") || "id-field";
        const name = this.getAttribute("name") || "name-field";
        const placeholder = this.getAttribute("placeholder") || "Fill this field";

      this.shadowRoot.innerHTML = ` 
                <link rel="stylesheet" href="./login.css">           
                <div class="form-group">
                    <label for="${id}">${label}</label>
                    <input type="${type}" id="${id}" name="${name}" placeholder="${placeholder}" required>
                </div>
          `;
    }
  }
  
  customElements.define("kleber-input", KleberInput);
  