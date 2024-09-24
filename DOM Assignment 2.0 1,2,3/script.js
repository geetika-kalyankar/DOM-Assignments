// adding a new list (assignment 1)
const ul = document.querySelector("ul")
const li = document.createElement("li")
li.innerHTML = "Hire me"
ul.appendChild(li)

// Change the placeholder name (assignment 2)
const input = document.querySelector("input")
input.placeholder = "Search My Project"

// changing th span tag (assignment 3)
const span = document.querySelector(".head")
span.innerText = "iNeuron Intellegence Pvt Ltd"

// changing the image (assignment 4)
const image = document.querySelector("img")
image.src  = "photo.png"

// adding a button (assignment 5)
const btnDiv = document.querySelector(".hero-right-section-btns")
const newBtn = document.createElement("button")
newBtn.innerHTML = "Support Me"
btnDiv.appendChild(newBtn)