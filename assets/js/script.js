//todo get user input of which animal and pokemon

//todo get stats and pics from local storage

//todo display animal and pokemon cards

let animal = {
  name: "panther",
  height: "28 inches",
  weight: "140 lbs",
  speed: "50 mph",
};
const animals = [animal];

function createAnimalCard(animals) {
  const animalCard = $("<div>").addClass("card animal-card");
  const cardHeader = $("<div>").addClass("card-header h3").text(animals.name);
  const cardBody = $("<div>").addClass("card-body");
  const animalHeight = $("<div>").addClass("card-stats").text(animals.height);
  const animalWeight = $("<div>").addClass("card-stats").text(animals.weight);
  const animalSpeed = $("<div>").addClass("card-stats").text(animals.speed);
  cardBody.append(animalHeight, animalWeight, animalSpeed);
  animalCard.append(cardHeader, cardBody);
  const animalList = $("#fave-list");
  animalList.append(animalCard);
  console.log(animalCard);
  return animalCard;
}
console.log(animals);
createAnimalCard(animals);
console.log(animals);
console.log(animalCard);

//todo add event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
});
