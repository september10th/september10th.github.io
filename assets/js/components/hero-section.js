class HeroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<section class="hero">
<div class="container">
<div class="hero-inner">

<div class="hero-content">
  <p class="hero-label">Independent App Collection</p>
  <h1 class="hero-title">Minimal tools<br />& experiments</h1>
  <p class="hero-description">
    Carefully crafted apps, interfaces and digital experiments with a focus on simplicity and clarity.
  </p>
  <div class="hero-actions">
    <a href="/apps/" class="button-primary">Explore Apps</a>
    <a href="/about/" class="button-secondary">About</a>
  </div>
</div>

<div class="hero-visual">
  <div class="hero-image-wrap">
    <img class="hero-image" src="https://picsum.photos/600/400" alt="Featured App" />
  </div>
</div>

</div>
</div>
</section>
        `
  }
}

customElements.define('hero-section', HeroSection)