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
                    <h1 class="hero-title">Lorem ipsum dolor sit amet</h1>
                    <a href="#" class="btn-preorder">Pre-order</a>
                </div>
                
                <div class="diagram-container">
                    <video src="./assets/videos/video.mp4" autoplay muted loop playsinline></video>
                </div>
                
                <div class="hero-section">
                    <h1 class="hero-title">Quis nostrud adipiscing elit</h1>
                    <a href="#" class="btn-talk">Talk to us</a>
                </div>
            </div>
        `;
    }
}

customElements.define('kleber-hero', KleberHero);