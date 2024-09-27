const barbarian = document.querySelector(".clash-card__unit-stats--barbarian");
const archer = document.querySelector(".clash-card__unit-stats--archer");
const giant = document.querySelector(".clash-card__unit-stats--giant");
const goblin = document.querySelector(".clash-card__unit-stats--goblin ") 
const wizard = document.querySelector(".clash-card__unit-stats--wizard") 
const fontColor = document.querySelectorAll(".clash-card__unit-stats");
const noBorder = document.querySelectorAll(".no-border");

giant.style.backgroundColor = "orange";
barbarian.style.backgroundColor = "orange";
archer.style.backgroundColor = "#F05487";
goblin.style.backgroundColor = "#82BB30"
wizard.style.backgroundColor = "#4FACFF"

fontColor.forEach((e) => {
  e.style.color = "white";
});
noBorder.forEach((e) => {
  e.style.color = "white";
});
