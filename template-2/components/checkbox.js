class KleberCheckbox extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
        const type = this.getAttribute('type') || "checkbox";
        const id = this.getAttribute('name') || "id-field";
        const name = this.getAttribute('name') || "name-field";
        const label = this.getAttribute('label') || 'label'
      this.shadowRoot.innerHTML = ` 
                <link rel="stylesheet" href="./login.css"> 
                <div class="form-options">
                    <label class="checkbox-container">
                        <input type="${type}" id="${id}" name="${name}">
                        <span class="checkmark"></span>
                            ${label}
                    </label>
                    <kleber-link label="Forgot password?"></kleber-link>
                </div>
          `;
    }
  }
  
  customElements.define("kleber-checkbox", KleberCheckbox);
  