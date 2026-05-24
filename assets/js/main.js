import './components/site-header.js'
import './components/site-footer.js'
import './components/hero-section.js'

import './components/apps-section.js'
import './components/about-section.js'
import './components/news-section.js'

import '/apps/components/app-sec-hero.js'
import '/apps/components/app-sec-screenshot.js'
// import './components/app-sec-title.js'


// Navbar 选中高亮
function setupActiveNav() {
  const page = document.body.dataset.page

  const activelink = document.querySelector(
    `[data-nav="${page}"]`
  )

  if (activelink) {
    activelink.classList.add('active')
  }
}

setupActiveNav()

