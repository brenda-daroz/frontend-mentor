const button = document.getElementById("button")

const getApi = async () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      showMessage(data)
    })
}

function showMessage (data) {
  const advice =
  `<h1 class="title">Advice #${data.slip.id}</h1>
  <p class="advice">"${data.slip.advice}"</p>`
  document.getElementById("content").innerHTML = advice
}

window.onload = getApi
button.addEventListener("click", getApi)
