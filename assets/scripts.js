// Enable Bootstrap tooltips for elements with data-toggle="tooltip"
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Subtle motion system
document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll('.reveal')
  if (revealItems.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    revealItems.forEach((el) => {
      const delay = el.getAttribute('data-reveal-delay')
      if (delay) {
        el.style.setProperty('--reveal-delay', `${delay}ms`)
      }
      observer.observe(el)
    })
  }
})

// Mobile sidebar toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-menu-toggle')
  const backdrop = document.querySelector('.mobile-menu-backdrop')
  const body = document.body

  if (!toggle) return

  const setExpanded = (isOpen) => {
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
  }

  const closeMenu = () => {
    body.classList.remove('menu-open')
    setExpanded(false)
  }

  const openMenu = () => {
    body.classList.add('menu-open')
    setExpanded(true)
  }

  toggle.addEventListener('click', () => {
    const isOpen = body.classList.contains('menu-open')
    if (isOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  })

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu)
  }

  document.querySelectorAll('.sidebar a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 980) {
        closeMenu()
      }
    })
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
      closeMenu()
    }
  })
})
