class KleberHero extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./main.css">     
            <div class="hero">
            <div class="hero-section">
                <kleber-logo></kleber-logo>
                <h1 class="hero-title">Lorem ipsum dolor sit amet</h1>
                <div class="hero-group-button">
                    <a href="#" class="cta-button pre-order">Pre-order</a>
                    <a href="#" class="cta-button talk-button">Talk to us</a>
                </div>
               
            </div>
            <div class="diagram-container">
                <video src="./assets/videos/video.mp4" autoplay muted loop playsinline></video>
            </div>
        </div>
        `;
    }
}

customElements.define('kleber-hero', KleberHero);