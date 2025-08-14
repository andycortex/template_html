class KleberFaq extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      const question = this.getAttribute("question") || "FAQ Question";
      const answer = this.getAttribute("answer") || "FAQ Answer";
  
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./main.css">
        <div class="pricing-faq-item">
          <h4>${question}</h4>
          <p>${answer}</p>
        </div>
      `;
    }
  }
  
  customElements.define("kleber-faq", KleberFaq);
  