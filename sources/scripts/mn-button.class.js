class MnButton extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.classList.add('mn-button')
    return self
  }
}

window.customElements.define('mn-button', MnButton)
