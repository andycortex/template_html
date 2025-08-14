class KleberCardPricing extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      const title = this.getAttribute("title") || "Plan";
      const description = this.getAttribute("description") || "";
      const currency = this.getAttribute("currency") || "$";
      const price = this.getAttribute("price") || "0";
      const period = this.getAttribute("period") || "/month";
      const features = (this.getAttribute("features") || "")
        .split(";")
        .map(f => `<li>✓ ${f.trim()}</li>`)
        .join("");
      const buttonText = this.getAttribute("button-text") || "Get Started";
      const popularClass = this.hasAttribute("popular") ? "popular" : "";
  
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./main.css">
        <div class="pricing-card ${popularClass}">
          <div class="pricing-card-header">
            <h3>${title}</h3>
            <p class="pricing-plan-description">${description}</p>
          </div>
          <div class="pricing-price-section">
            <div class="pricing-price">
              <span class="pricing-currency">${currency}</span>
              <span class="pricing-amount pricing-monthly">${price}</span>
              <span class="pricing-period">${period}</span>
            </div>
          </div>
          <ul class="pricing-features-list">
            ${features}
          </ul>
          <button class="cta-button primary">${buttonText}</button>
        </div>
      `;
    }
  }
  
  customElements.define("kleber-card-pricing", KleberCardPricing);
  