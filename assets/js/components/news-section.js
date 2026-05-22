import { news } from '../data/news.js'

class NewsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="news-section">
<div class="container">

<div class="section-header">
<h2>Latest News</h2>
<p>Updates and releases.</p>
</div>

<div class="news-list">
${news.map(item => `
    <a class="news-item" href="${item.url}">
    <div class="news-date">${item.date}</div>
    <div class="news-title">${item.title}</div>
    </a>
`).join('')}
</div>

</div>
</section>
    `
    }
}

customElements.define('news-section', NewsSection)