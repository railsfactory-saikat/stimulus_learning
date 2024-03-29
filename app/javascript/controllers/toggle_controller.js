import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["content", "coloredContent"]
  static values = { colorProp: String }
  static classes = ["redBackground", "blueBackground"]

  toggle() {
    this.contentTarget.hidden = !this.contentTarget.hidden
  }

  toggleColor() {
    if(this.colorPropValue === "red") {
      this.coloredContentTarget.classList.add(this.blueBackgroundClass)
      this.coloredContentTarget.classList.remove(this.redBackgroundClass)
      this.colorPropValue = "blue"
    }
    else {
      this.coloredContentTarget.classList.add(this.redBackgroundClass)
      this.coloredContentTarget.classList.remove(this.blueBackgroundClass)
      this.colorPropValue = "red"
    }
  }
}
