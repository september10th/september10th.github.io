class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<header class="site-header">
<div class="container header-inner">
<a href="/" class="site-logo">September 10th</a>
<nav class="site-nav">
<a href="/apps/" data-nav="apps">Apps</a>
<a href="/news/" data-nav="news">News</a>
<a href="/about/" data-nav="about">About</a>

<button class="lang-switch">中</button>
<button class="theme-switch">☽</button>
</nav>
</div>
</header>
        `
    }
}

customElements.define('site-header', SiteHeader)
