class KleberLoading extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
        const title = this.getAttribute("title") || "Loading";
      this.shadowRoot.innerHTML = ` 
                <link rel="stylesheet" href="./main.css">           
                <div class="blog-load-more-section">
                    <button class="blog-load-more-btn">${title}</button>
                </div>
          `;
    }
  }
  
  customElements.define("kleber-loading", KleberLoading);
  