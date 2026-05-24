class AppSecHero extends HTMLElement {
  connectedCallback() {
    const appicon = this.getAttribute('app-icon')
    // const platform = this.getAttribute('platform')
    const title = this.getAttribute('title')
    const description = this.getAttribute('description')
    const image = this.getAttribute('image')

    const btn_first_icon = this.getAttribute('app-btn-first-icon')
    const btn_first_text = this.getAttribute('app-btn-first-text')

    const d_g_category_icon = this.getAttribute('d_g_category_icon')
    const d_g_category_name = this.getAttribute('d_g_category_name')
    const d_g_category_value = this.getAttribute('d_g_category_value')

    const d_g_platform_icon = this.getAttribute('d_g_platform_icon')
    const d_g_platform_name = this.getAttribute('d_g_platform_name')
    const d_g_platform_value = this.getAttribute('d_g_platform_value')

    const d_g_langs_icon = this.getAttribute('d_g_langs_icon')
    const d_g_langs_name = this.getAttribute('d_g_langs_name')
    const d_g_langs_value = this.getAttribute('d_g_langs_value')

    const d_g_ver_icon = this.getAttribute('d_g_ver_icon')
    const d_g_ver_name = this.getAttribute('d_g_ver_name')
    const d_g_ver_value = this.getAttribute('d_g_ver_value')

    const d_g_date_icon = this.getAttribute('d_g_date_icon')
    const d_g_date_name = this.getAttribute('d_g_date_name')
    const d_g_date_value = this.getAttribute('d_g_date_value')


    this.innerHTML = `
      <section class="app-hero">
        <div class="container app-hero-inner">
          <div class="app-hero-content">

            <div class="app-meta">
              <img class="app-detail-icon" src="${appicon}" alt="" />
              <div class="app-meta-text">
                <h1 class="app-title">${title}</h1>
                <p class="app-description">${description}</p>
              </div>
            </div>

            <div class="app-actions">
              <a class="app-btn" href="#">
                <img class="" src="${btn_first_icon}" alt="" />
                <span class="">${btn_first_text}</span>
              </a>
            </div>

            <div class="app-details-grid">
              <div class="app-detail-item">
                <div class="app-detail-item-name-gp">
                  <img class="app-detail-item-icon" src="${d_g_category_icon}" />
                  <span class="app-detail-item-name">${d_g_category_name}</span>
                </div>
                <div class="app-detail-item-value">${d_g_category_value}</div>
              </div>

              <div class="app-detail-item">
                <div class="app-detail-item-name-gp">
                  <img class="app-detail-item-icon" src="${d_g_platform_icon}" />
                  <span class="app-detail-item-name">${d_g_platform_name}</span>
                </div>
                <div class="app-detail-item-value">${d_g_platform_value}</div>
              </div>

              <div class="app-detail-item">
                <div class="app-detail-item-name-gp">
                  <img class="app-detail-item-icon" src="${d_g_langs_icon}" />
                  <span class="app-detail-item-name">${d_g_langs_name}</span>
                </div>
                <div class="app-detail-item-value">${d_g_langs_value}</div>
              </div>

              <div class="app-detail-item">
                <div class="app-detail-item-name-gp">
                  <img class="app-detail-item-icon" src="${d_g_ver_icon}" />
                  <span class="app-detail-item-name">${d_g_ver_name}</span>
                </div>
                <div class="app-detail-item-value">${d_g_ver_value}</div>
              </div>

              <div class="app-detail-item">
                <div class="app-detail-item-name-gp">
                  <img class="app-detail-item-icon" src="${d_g_date_icon}" />
                  <span class="app-detail-item-name">${d_g_date_name}</span>
                </div>
                <div class="app-detail-item-value">${d_g_date_value}</div>
              </div>
            </div>

          </div>

          <div class="app-hero-image-wrap">
            <img class="app-hero-image" src="${image}" alt="" />
          </div>

        </div>
      </section>
    `
  }
}

customElements.define('app-sec-hero', AppSecHero)
