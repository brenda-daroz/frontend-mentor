const element = {
  numberOfPeople: document.getElementById("input-people"),
  billAmount: document.getElementById("input-bill"),
  reset: document.getElementById("btn-reset"),
  result: document.getElementById("result-value"),
  tipElement: document.getElementById("tip-value"),
  customTip: document.getElementById("btn-tip-custom"),
  tips: document.getElementsByName("tip"),
  inputFields: document.querySelectorAll(".input"),
  defaultTip: document.getElementById("btn-tip-5")
}

function botandoOrdemNaCasa (bill, people, tip) {
  if (bill > 0 && people > 0) {
    const totalPerPerson = calculateBill(bill, people)
    element.result.innerText = `$${totalPerPerson}`
    const tipPerPerson = calculateTip(totalPerPerson, tip)
    element.tipElement.innerText = `$${tipPerPerson}`
  } else {
    console.error("tem que ser maior do que zero")
  }
}

function variableChanged () {
  const tipPerc = parseFloat(selectedRadioButton("tip").value)
  if (element.billAmount.value === "" || element.numberOfPeople.value === "") {
    console.error("nao pode estar vazio")
  } else {
    const parsedBill = parseInt(element.billAmount.value)
    const parsedNumberOfPeople = parseInt(element.numberOfPeople.value)
    botandoOrdemNaCasa(parsedBill, parsedNumberOfPeople, tipPerc)
  }
}

function tipPercChanged () {
  element.customTip.classList.remove("custom-tip-focus")
  variableChanged()
}

function billAmountChanged () {
  variableChanged()
}

function numPeopleChanged () {
  variableChanged()
}

function selectedRadioButton (name) {
  const radios = Array.from(document.getElementsByName(name))
  // console.log(radios)
  return radios.find((radio) => radio.checked)
}

function calculateBill (value, people) {
  const result = (value / people).toFixed(2)
  return result
}

function calculateTip (result, tip) {
  const tipPerc = tip / 100
  const tipPerPerson = (result * tipPerc).toFixed(2)
  return tipPerPerson
}

function clearInputField (e) {
  const element = e.target
  console.log(element)
  if (element.value === "0" || element.value === "1") {
    element.value = ""
  }
}

function resetFields () {
  element.billAmount.value = ""
  element.numberOfPeople.value = "1"
  element.result.innerHTML = "$0.00"
  element.tipElement.innerHTML = "$0.00"
  element.customTip.value = ""
  element.defaultTip.checked = true
}

element.customTip.addEventListener("input", () => {
//   element.customTip.checked = true
  variableChanged()
})

element.reset.addEventListener("click", resetFields)

element.customTip.addEventListener("blur", () => {
  if (element.customTip.value === "") {
    element.customTip.classList.remove("custom-tip-focus")
  }
})
element.inputFields.forEach(inputField => {
  inputField.addEventListener("focus", clearInputField)
})
element.numberOfPeople.addEventListener("input", numPeopleChanged)
element.billAmount.addEventListener("input", billAmountChanged)
element.tips.forEach(tip => {
  tip.addEventListener("change", tipPercChanged)
})
element.customTip.addEventListener("focus", () => {
  element.customTip.classList.add("custom-tip-focus")
  const lastRadioChecked = selectedRadioButton("tip")
  if (lastRadioChecked) {
    lastRadioChecked.checked = false
  }
})
