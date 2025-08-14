class KleberProductCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      const badge = this.getAttribute("badge") || "";
      const icon = this.getAttribute("icon") || "🤖";
      const title = this.getAttribute("title") || "Producto IA";
      const category = this.getAttribute("category") || "";
      const description = this.getAttribute("description") || "";
      const rating = this.getAttribute("rating") || "";
      const stars = this.getAttribute("stars") || "";
      const features = (this.getAttribute("features") || "")
        .split(";")
        .map(f => `<li><span class="product-feature-dot"></span>${f.trim()}</li>`)
        .join("");
      const price = this.getAttribute("price") || "$0";
      const period = this.getAttribute("period") || "";
      const buttonText = this.getAttribute("button-text") || "Probar Ahora";
  
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./main.css">
        <div class="product-card">
          ${badge ? `<div class="popular-badge">${badge}</div>` : ""}
          <div class="product-header">
            <div class="product-icon">${icon}</div>
            <div class="product-info">
              <h4>${title}</h4>
              ${category ? `<span class="product-category-badge">${category}</span>` : ""}
            </div>
          </div>
          <p class="product-description">${description}</p>
          <div class="product-rating">
            <div class="product-stars">
              <span class="product-star">${stars}</span>
            </div>
            <span class="product-rating-number">${rating}</span>
          </div>
          <ul class="product-features">
            ${features}
          </ul>
          <div class="product-footer">
            <span class="price">${price}${period}</span>
            <a href="#" class="cta-button primary">${buttonText}</a>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define("kleber-product-card", KleberProductCard);
  