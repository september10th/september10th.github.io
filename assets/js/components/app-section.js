import { apps } from '../data/apps.js'

class AppsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="apps-section">
<div class="container">

<div class="section-header">
  <h2>Apps</h2>
  <p>Small tools, experiments, ideas.</p>
</div>

<div class="apps-grid">
${apps.map(app => `
<a class="app-card" href="${app.url}">
<div class="app-card-title">${app.title}</div>
<div class="app-card-desc">${app.desc}</div>
</a>
`).join('')}
</div>

</div>
</section>
    `
    }
}

customElements.define('apps-section', AppsSection)