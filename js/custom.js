import projectData from "../data/data.js"
console.log(projectData)

const burger = document.querySelector(".burger i");
const navlink = document.querySelector(".navlink-wrapper");
const burgerButton = document.querySelector("button.burger");
console.log(navlink);

function showHamburger() {
  burger.classList.toggle("fa-times");
  navlink.classList.toggle("nav-active");
}

burgerButton.addEventListener("click", showHamburger);

// let cardContainer = document.createElement("div");
// cardContainer.className = "card-container";
let cardContainer = document.getElementById("project-section-cards");

// cards.appendChild(cardContainer);

if (cardContainer != null) {
  let projects = projectData;
  function showCards(projects) {
    for (let item of projects) {
      let card = document.createElement("div");
      card.innerHTML = `
      <div class="project-cards">
        <p class="project-title">${item.title}</p>
        <img src=${item.image}></img>
        <p id="description-id">${item.description}</p>
        <a class="project-button" id="project-button-id" href=${item.link} target="_blank">View the site</a>
     </div>`
      cardContainer.appendChild(card);
      // let section = document.createElement("section")
      // let title = document.createElement("h3");
      // // How do i create a class of card by manipulating the dom using JS?
      // title.textContent = item.title;
      // cardContainer.appendChild(title);

      // let img = new Image();
      // img.src = item.image;
      // cardContainer.appendChild(img);

      // let description = document.createElement("p");
      // description.textContent = item.description;
      // cardContainer.appendChild(description);

      // let button = document.createElement("a");
      // button.classList.add("button");
      // button.href = item.link;
      // button.target = "_blank";
      // button.textContent = "See Project";
      // cardContainer.appendChild(button);
    }
  }
  showCards(projects);
}

const buttonForm = document.getElementById("color-button")
const colorForm = document.getElementById("js-form")

if (buttonForm != null) {
  buttonForm.addEventListener("click", toggleColor);

}

if (colorForm != null) {
  colorForm.addEventListener("submit", submitColor);

}


function toggleColor() {
  console.log("clicked")
  document.getElementById("color-form").classList.toggle("showColors")
}

function changeColor(userColorChoice, userTypeChoice) {
  if (userTypeChoice === "textColor") {
    colorForm.style.color = userColorChoice;
  } else {
    colorForm.style.backgroundColor = userColorChoice;
  }
}

function submitColor(e) {
  // console.log("clicked")
  e.preventDefault();
  const data = new FormData(e.target);
  const dataObject = Object.fromEntries(data.entries());
  // console.log(dataObject);
  colorForm.reset();
  changeColor(dataObject.colorOption, dataObject.typeOption);
}

// Toggle is not function on showColors function, trying with Haniyah

