class KleberArticle extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      const icon = this.getAttribute("icon") || "📄";
      const category = this.getAttribute("category") || "General";
      const title = this.getAttribute("title") || "Untitled";
      const content = this.getAttribute("content") || "";
      const author = this.getAttribute("author") || "Anonymous";
      const date = this.getAttribute("date") || "";
      const readTime = this.getAttribute("read-time") || "";
  
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./main.css">           
        <article class="blog-card">
          <div class="blog-card-image">
            <div class="blog-image-placeholder">
              <div class="blog-placeholder-icon">${icon}</div>
            </div>
            <span class="blog-category">${category}</span>
          </div>
          <div class="blog-card-content">
            <h2>${title}</h2>
            <p>${content}</p>
            <div class="blog-card-meta">
              <span class="blog-author">${author}</span>
              <span class="date">${date}</span>
              <span class="read-time">${readTime}</span>
            </div>
          </div>
        </article>
      `;
    }
  }
  
  customElements.define("kleber-article", KleberArticle);
  