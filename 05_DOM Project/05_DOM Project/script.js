const parent = document.querySelector(".recipe-gallery")
const div = document.createElement("div")
const img = './img/recipe-7.jpg';
div.setAttribute("class", "card")
div.innerHTML = `<a href="#" class="recipe-text">
                        <img src="${img}" class="recipe-img " />
                        <h5 class="recipe-name">Pasta</h5>
                        <p class="recipe-disp">Prep : 15min | Cook : 5min</p>
                    </a>`
parent.appendChild(div)

const parentBtn = document.querySelector(".parent-btn")
const a = document.createElement("a")
a.className = "btn"
a.href = "index.html"
a.innerHTML = "Pro Subscription"
parentBtn.appendChild(a)

