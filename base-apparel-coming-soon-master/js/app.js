var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var email = document.getElementById("email");
const submitForm = document.getElementById("submit-form")
const error = document.getElementById("error")


submitForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (regexEmail.test(email.value)) {
        submitForm.reset()
        error.classList.add("hide")
        submitForm.classList.remove("submit-form-error")
    } else {
        error.classList.remove("hide")
        submitForm.classList.add("submit-form-error")

    }
})


