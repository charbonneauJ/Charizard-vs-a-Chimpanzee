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

function createAnimalCard() {
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
createAnimalCard();
console.log(animals);
console.log(animalCard);

let animalInputs = "cheetah"; // needs to be removed
function animalFetchApi(animalInputs) {
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/animals?name=" + animalInput,
    headers: { "X-Api-Key": "LOHrIg46z+hgQ1p2e+L3QQ==Nr61dc7r4QFJEkxi" },
    contentType: "application/json",
    success: function (result) {
      console.log("ninja api", result[0]);

      // checking results for weight if they exist. if they don't dom updated with unknown
      // if it exists update dom with weight
      // need to format weight info to look cleaner
      // document.getElementById('api-animal-name').textContent = result[0].;
      let apiWeight = result[0].characteristics.weight;
      if (apiWeight === null || apiWeight === undefined) {
        document.getElementById("aStat-1").textContent = "Weight: unknown ";
      } else {
        let weight = apiWeight;
        document.getElementById("aStat-1").textContent = `Weight: ${weight}`;
        console.log("Weight: ", weight);
      }
      // checking for speed, updating dom with info
      let apiSpeed = result[0].characteristics.top_speed;
      if (apiSpeed === null || apiSpeed === undefined) {
        document.getElementById("aStat-2").textContent = "Speed: unknown ";
      } else {
        let speed = apiSpeed;
        document.getElementById("aStat-2").textContent = `Speed: ${speed} `;
      }
      // chcking for height
      let apiHeight = result[0].characteristics.height;
      if (apiHeight !== null && apiHeight !== undefined) {
        document.getElementById("aStat-3").textContent = `Height: ${apiHeight}`;
      } else if (
        result[0].characteristics.length !== null &&
        result[0].characteristics.length !== undefined
      ) {
        let length = result[0].characteristics.length;
        document.getElementById("aStat-3").textContent = `Lenght: ${length}`;
      } else {
        document.getElementById("aStat-3").textContent = "Height: unknown";
      }

      // below is a way to look if a variable has been defined or not
      //   if (typeof variable === 'undefined') {
      //     // variable is undefined
      // }
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
  //createAnimalCard(animals)
  // note to bryan. information coming out of the api will be an array
  // animals = [name, height, weight, speed]
}

//event listener for click of animal search. will need to make animalInput a string from the user.
const animalInput = document.querySelector("#search-input-animal");
const animalButton = document.querySelector("#search-button-animal");

function animalSearch() {
  const userAnimalInput = animalInput.value.trim();
  if (userAnimalInput) {
    animalFetchApi(userAnimalInput);
  }
  // this can be an alert somewhere else.
  else {
    console.log("enter an animal");
  }
}

animalButton.addEventListener("click", animalSearch);

//todo add event listeners
// document.addEventListener("DOMContentLoaded", () => {
//   // Functions to open and close a modal
//   function openModal($el) {
//     $el.classList.add("is-active");
//   }

//   function closeModal($el) {
//     $el.classList.remove("is-active");
//   }
// });
// document.addEventListener("DOMContentLoaded", () => {
//   // Functions to open and close a modal
//   function openModal($el) {
//     $el.classList.add("is-active");
//   }

//   function closeModal($el) {
//     $el.classList.remove("is-active");
//   }

//   function closeAllModals() {
//     (document.querySelectorAll(".modal") || []).forEach(($modal) => {
//       closeModal($modal);
//     });
//   }

//   // Add a click event on buttons to open a specific modal
//   (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
//     const modal = $trigger.dataset.target;
//     const $target = document.getElementById(modal);

//     $trigger.addEventListener("click", () => {
//       openModal($target);
//     });
//   });

//   // Add a click event on various child elements to close the parent modal
//   (
//     document.querySelectorAll(
//       ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
//     ) || []
//   ).forEach(($close) => {
//     const $target = $close.closest(".modal");

//     $close.addEventListener("click", () => {
//       closeModal($target);
//     });
//   });

//   // Add a keyboard event to close all modals
//   document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape") {
//       closeAllModals();
//     }
//   });
// });
