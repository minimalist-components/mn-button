document.addEventListener('click', blur)
const buttons = document.querySelectorAll('button.mn-button')

Array
  .from(buttons)
  .forEach(button => {
    if (button.closest('form') && !button.getAttribute('type')) {
      button.setAttribute('type', 'button')
    }
  })

function blur(event) {
  const isMnButton = event.target.classList.contains('mn-button')
  if (isMnButton) {
    event.target.blur()
  }
}
