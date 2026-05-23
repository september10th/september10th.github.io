import { aboutItems } from '../data/about.js'

class AboutSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="about-section">
  <div class="about-background"></div>

  <div class="container">

    <div class="about-head section-header">
      <h2 class="">About</h2>
      <p class="">Designed with clarity and care.</p>
    </div>

    <div class="about-features">
${aboutItems.map(item => `
    <div class="about-feature">
      <img class="about-icon" src="${item.icon}" />
      <div class="about-title">${item.title}</div>
      <div class="about-desc">${item.desc}</div>
    </div>
    `).join('')}
    </div>

  </div>

</section>
    `
    }
}

customElements.define('about-section', AboutSection)