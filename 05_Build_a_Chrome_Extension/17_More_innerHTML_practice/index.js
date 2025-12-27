
const container = document.getElementById("container")

container.innerHTML = "<button>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

container.innerHTML += '<p id="thank-you-message" style="display:none;">Thank you for buying!</p>'