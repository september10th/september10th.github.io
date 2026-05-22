class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<footer class="site-footer">
<div class="container">
<p class="footer-text">© 2026 luoyu.space. All rights reserved.</p>
</div>
</footer>
        `
    }
}

customElements.define('site-footer', SiteFooter)
