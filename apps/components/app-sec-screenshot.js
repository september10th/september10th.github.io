class AppSecScreenshot extends HTMLElement {
  connectedCallback() {
    const photo1 = this.getAttribute('photo_1')
    const photo2 = this.getAttribute('photo_2')
    const photo3 = this.getAttribute('photo_3')
    const photo4 = this.getAttribute('photo_4')
    const photo5 = this.getAttribute('photo_5')

    this.innerHTML = `
    <section class="app-sec-screenshot">
    <div class="container app-sec-screenshot-inner">

    <div class="app-sec-screenshot-title">Screenshots</div>

    <div class="app-sec-screenshot-photos">
    </div>

    </div>
    </section>
    `
  }
}

customElements.define('app-sec-screenshot', AppSecScreenshot)
