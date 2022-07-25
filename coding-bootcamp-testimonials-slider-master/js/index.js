document.querySelectorAll(".caroussel").forEach(caroussel => {
  const items = caroussel.querySelectorAll(".caroussel__item")

  const buttons = caroussel.querySelectorAll(".caroussel__button")

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach(item => item.classList.remove("caroussel__item--selected"))
      buttons.forEach(button => button.classList.remove("caroussel__button--selected"))

      items[i].classList.add("caroussel__item--selected")
      button.classList.add("caroussel__button--selected")
    })
  })
  items[0].classList.add("caroussel__item--selected")
  buttons[0].classList.add("caroussel__button--selected")
})
