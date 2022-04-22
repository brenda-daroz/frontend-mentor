export function check(input) {
    const inputType = input.dataset.type

    if (checkers[inputType]) {
        checkers[inputType](input)
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalido")
        input.parentElement.querySelector(".input-error-message").innerHTML = ""
    } else {
        input.parentElement.classList.add("input-container--invalido")
        input.parentElement.querySelector(".input-error-message").innerHTML = showErrorMessage(inputType, input)

    }
}

const errorTypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const errorMessages = {
    name: {
        valueMissing: "Mandatory field."
    },
    email: {
        valueMissing: "Mandatory field.",
        typeMismatch: "Invalid email"
    },
    password: {
        valueMissing: "Mandatory field.",
        patternMismatch: "Password must contain an upper and lower case, a number and no special symbol."
    },
    dateOfBirth: {
        valueMissing: "Mandatory field.",
        customError: "You must be at least 18 years old to register."
    },

    postalCode: {
        valueMissing: "Mandatory field.",
        patternMismatch: "Postal code must contain 5 digits",
        customError: "Invalid postal code."
    },

    street: {
        valueMissing: "Mandatory field.",
    },

    number: {
        valueMissing: "Mandatory field.",
    },

    city: {
        valueMissing: "Mandatory field.",
    },

    state: {
        valueMissing: "Mandatory field.",
    }

}

const checkers = {
    dateOfBirth: input => checkDateOfBirth(input),
    postalCode: input => retrievePostalCode(input)
}

function showErrorMessage(inputType, input) {
    let message = ""
    errorTypes.forEach(error => {
        if (input.validity[error]) {
            message = errorMessages[inputType][error]
        }
    });
    return message
}
function checkDateOfBirth(input) {
    const dateInput = new Date(input.value)
    let message = ""
    if (!biggerThan18(dateInput)) {

        message = "You must be at least 18 years old to register."
    }


    input.setCustomValidity(message)
}

function biggerThan18(date) {
    const currentDate = new Date()
    const datePlus18 = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate())

    return datePlus18 <= currentDate

}

function retrievePostalCode(input) {
    const postalCode = input.value.replace("/\D/g", '')
    const url = `https://viacep.com.br/ws/${postalCode}/json/`
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            "content-type": "application/json;charset=utf-8"
        }
    }

    if (!input.validity.patternMismatch && !input.validity.valueMissing) {
        fetch(url, options).then(
            response => response.json()
        ).then(
            data => {
                if (data.erro) {
                    input.setCustomValidity("Invalid postal code")
                    return
                }
                input.setCustomValidity('')
                fillAddress(data)
                return
            }
        )
    }
}

function fillAddress(data) {
    const street = document.querySelector('[data-type="street"]')
    const city = document.querySelector('[data-type="city"]')
    const state = document.querySelector('[data-type="state"]')

    street.value = data.logradouro
    city.value = data.localidade
    state.value = data.uf
}