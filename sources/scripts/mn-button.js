document.addEventListener('click', blur)

function blur(event) {
  const isMnButton = event.target.classList.contains('mn-button')
  if (isMnButton) {
    event.target.blur()
  }
}
