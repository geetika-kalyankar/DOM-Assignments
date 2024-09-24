let accordian = document.querySelectorAll(".accordian h3");

accordian.forEach((element) => {
  element.addEventListener("click", () => {
    displaying(element);
    let para = element.nextElementSibling;
    // Toggle the display property
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

function displaying(clickedElement) {
  accordian.forEach((element) => {
    let para = element.nextElementSibling;
    if (element !== clickedElement) {
      para.style.display = "none"; 
    }
  });
}

// Adding new section (Assignment 3)
const accordianWrapper = document.querySelector(".accordian-wrapper")
const div = document.createElement("div")
div.classList.add("accordian")
div.innerHTML = `
  <h3>Skills</h3>
  <p>I possess very good command on Full Stack Development like MERN, which can be seen in my GitHub.</p>
`;
accordianWrapper.appendChild(div)
const h3 = div.querySelector("h3");
const p = div.querySelector("p");

h3.addEventListener("click", () => {
  if (p.style.display === "none") {
    p.style.display = "block";  // Show the paragraph when clicked
  } else {
    p.style.display = "none";   // Hide the paragraph if it's already visible
  }
});