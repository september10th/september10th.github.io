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
  <img class="app-icon" src="${app.icon}" />
  <div class="app-card-title">${app.title}</div>
  <div class="app-card-desc">${app.desc}</div>
  <div class="app-tags">
  ${app.tags.map(tag => `
    <div class="app-tag">${tag}</div>
    `).join('')}
  </div>
</a>
`).join('')}
</div>

</div>
</section>
    `
    }
}

customElements.define('apps-section', AppsSection)