document.addEventListener('click', blur)
const buttons = document.querySelectorAll('button.mn-button')

Array
  .from(buttons)
  .forEach(button => {
    const buttonInsideAForm = button.closest('form')
    const hasAttributeType = !button.getAttribute('type')

    if (buttonInsideAForm && hasAttributeType) {
      button.setAttribute('type', 'button')
    }
  })

function blur(event) {
  const isMnButton = event.target.classList.contains('mn-button')
  if (isMnButton) {
    event.target.blur()
  }
}
