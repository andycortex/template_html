export function initHamburger(shadowRoot) {
  const toggleBtn = shadowRoot.querySelector(".menu-toggle");
  const nav = shadowRoot.querySelector(".nav");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}
