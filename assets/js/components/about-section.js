import { aboutItems } from '../data/about.js'

class AboutSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="about-section">
<div class="container">

<div class="about-head">
<h2>About</h2>
<p>Small notes about this site.</p>
</div>

<div class="about-grid">
${aboutItems.map(item => `
    <div class="about-item">
    <div class="about-icon">◼︎</div>
    <div>
    <div class="about-title">${item.title}</div>
    <div class="about-desc">${item.desc}</div>
    </div>
    </div>
    `).join('')}
</div>

</div>
</section>
    `
    }
}

customElements.define('about-section', AboutSection)