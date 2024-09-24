const userName = document.querySelector(".userName");
const userEmail = document.querySelector(".userEmail");
const userMessage = document.querySelector(".userMessage");
const enterName = document.querySelector(".enterName");
const enterMail = document.querySelector(".enterMail");
const enterMessage = document.querySelector(".enterMessage");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (userName !== "" && userEmail !== "" && userMessage !== "") {
    enterName.value = userName.value;
    enterMail.value = userEmail.value;
    enterMessage.value = userMessage.value;
  }
});
