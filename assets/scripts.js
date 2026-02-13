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
