class HeroSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="hero">
<div class="container hero-inner">

<div class="hero-content">
<p class="hero-label">
Independent App Collection
</p>

<h1 class="hero-title">
Minimal tools & experiments
</h1>

<p class="hero-desciption">
Carefully crafted apps, interfaces and ideas.
</p>
<a href="/apps/" class="button-primary">Explore</a>

</div>

</div>
</section>
        `
    }
}

customElements.define('hero-section', HeroSection)