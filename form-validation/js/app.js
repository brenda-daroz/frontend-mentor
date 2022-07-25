import { check } from "./validation.js"

const inputs = document.querySelectorAll("input")

inputs.forEach(input => {
  input.addEventListener("blur", (e) => {
    check(e.target)
  })
})
