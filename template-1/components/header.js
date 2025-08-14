class KleberHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = ` 
            <link rel="stylesheet" href="./main.css">       
            <header class="header">
                <button class="menu-toggle" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                  <div class="container-nav">
                    <a href="#" class="logo">
                        <div class="logo-icon">
                            <img src="./assets/images/logo.png" width="36" alt="cubos">
                        </div>
                        Kleber
                    </a>
                    
                    <nav class="nav">
                        <a href="#product">Product</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#blog">Blog</a>
                        
                    </nav>
                  </div>
                  <kleber-sign-in></kleber-sign-in>

            </header>
        `;
        const toggleBtn = this.shadowRoot.querySelector(".menu-toggle");
        const nav = this.shadowRoot.querySelector(".nav");
    
        toggleBtn.addEventListener("click", () => {
          nav.classList.toggle("open");
        });
  }
}

customElements.define("kleber-header", KleberHeader);
