class MnButton extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.setCSSClass()
    this.setBlurAfterClick()
    return self
  }

  setCSSClass() {
    this.classList.add('mn-button')
  }

  setBlurAfterClick() {
    this.addEventListener('click', event => event.target.blur())
  }
}

window.customElements.define('mn-button', MnButton)
