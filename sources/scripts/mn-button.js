document.addEventListener('click', blur)

function blur(e) {
  const isMnButton = e.target.classList.contains('mn-button')
  if (isMnButton) {
    e.target.blur()
  }
}
