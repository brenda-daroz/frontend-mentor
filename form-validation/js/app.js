import {
    check
} from "/frontend-mentor/form-validation/js/validation.js";

const inputs = document.querySelectorAll("input")
inputs.forEach(input => {
    input.addEventListener('blur', (e) => {
        check(e.target)
    })
})