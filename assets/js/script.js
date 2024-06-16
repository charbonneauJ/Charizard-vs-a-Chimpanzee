// dealing with user input pokemon
function pokemonSearch() {
  const userPokemonInput = pokemonInput.value.trim();
  if (userPokemonInput) {
    pokemonFetchApi(userPokemonInput);

  }
  // this can be an alert somewhere else.
  else {
    const feedbackPoke = 'Please enter a pokemon'
    // possible feedback message
    // const pokeFeedbackEl = document.querySelector('#pokeFeedback');
    // pokeFeedbackEl.textContent = feedbackPoke;
  
  }
}

// dealing with user input animal
function animalSearch() {
  //removing spaces from user's input
  const userAnimalInput = animalInput.value.trim();
  console.log("User Animal Input:", userAnimalInput);

  if (userAnimalInput) {
    animalFetchApi(userAnimalInput);
  }
  // this can be an alert somewhere else.
  else {
    console.log("enter an animal");
  }
}

// fetching information using user input animal

function animalFetchApi(animalInput) {
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/animals?name=" + animalInput,
    headers: { "X-Api-Key": "LOHrIg46z+hgQ1p2e+L3QQ==Nr61dc7r4QFJEkxi" },
    contentType: "application/json",
    success: function (result) {
      console.log(result);
      console.log(`ninja api`, result[0]); //eventually delete
      let animalRenWeight, animalRenSpeed, animalRenHeight;
      // checking results for weight if they exist. if they don't dom updated with unknown
      // if it exists update dom with weight
      let apiWeight = result[0].characteristics.weight;
      if (apiWeight === null || apiWeight === undefined) {
        animalRenWeight = "Weight: unknown ";
      } else {
        animalRenWeight = apiWeight;
      }
      // checking for speed, updating dom with info
      let apiSpeed = result[0].characteristics.top_speed;
      if (apiSpeed === null || apiSpeed === undefined) {
        animalRenSpeed = "Speed: unknown ";
      } else {
        animalRenSpeed = apiSpeed;
      }
      // checking for height
      let apiHeight = result[0].characteristics.height;
      if (apiHeight !== null && apiHeight !== undefined) {
        animalRenHeight = apiHeight;
      } else if (
        result[0].characteristics.length !== null &&
        result[0].characteristics.length !== undefined
      ) {
        animalRenHeight = result[0].characteristics.length;
      } else {
        animalRenHeight = "Height: unknown";
      }

      const animal = {
        name: animalInput,
        weight: animalRenWeight,
        height: animalRenHeight,
        speed: animalRenSpeed,
      };
      console.log("animal:", animal);
      createAnimalCard(animal);
    },
    // error: function ajaxError(jqXHR) {
    //   console.error("Error: ", jqXHR.responseText);
    // },
  });
}


// fetching information using user input pokemon
function pokemonFetchApi(pokemonInput) {
  let userPokemonInput = pokemonInput.toLowerCase();
  let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${userPokemonInput}`;
  fetch(urlPokemon)
    .then(function (response) {
      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      // Parse the response as JSON
      return response.json();
    })
    .then(function (data) {
      // converts to lbs
      let pokeApiWeight = Math.round(((data.weight) / 10) * 2.20462);
      const pokeWeight = `${pokeApiWeight} lbs`;
      let pokeApiHeight = (data.height / 10) * 3.28084; //converts to feet in decimal format
      // converting decimal height to feet and inches
      let feet = Math.floor(pokeApiHeight);
      let inches = Math.round((pokeApiHeight - feet) * 12);
      const pokeHeight = `${feet}' ${inches}"`;
      // converts to mph
      let pokeApiSpeed = Math.round(data.stats[5].base_stat * 0.621371);
      const pokeSpeed = `${pokeApiSpeed} mph`;
      // pokemon object with all data
      const pokemon = {
        name: userPokemonInput,
        weight: pokeWeight,
        height: pokeHeight,
        speed: pokeSpeed,
      };
      console.log('pokemon: info', pokemon)
      createPokemonCard(pokemon);


    })
    .catch(function (error) {
      // add this to the dom somewhere
      console.error("Error, try again", error);
    });
};

//todo display animal cards

function createAnimalCard(animal) {
  // $(`.a-card-header`).addClass("card-header-h3").text(animal.name);
  // $(`#aStat-1`).addClass("card-stats").text(animal.height);
  // $(`#aStat-2`).addClass("card-stats").text(animal.weight);
  // $(`#aStat-3`).addClass("card-stats").text(animal.speed);
  //refactoring
  let header = $(`<h3></h3>`).addClass("card-header-h3").text(animal.name);
  let cardstat1 = $(`<p></p>`).addClass("card-stats").text(animal.height);
  let cardstat2 = $(`<p></p>`).addClass("card-stats").text(animal.weight);
  let cardstat3 = $(`<p></p>`).addClass("card-stats").text(animal.speed);
  let footer = $(`<div></div>`);
  let addButton = $(`<button></button>`).text("Add to Favorites");
  addButton.click(function () {
    let newAnimal = {
      name: animal.name,
      height: animal.height,
      weight: animal.weight,
      speed: animal.speed,
    }
    let animalFavorites = JSON.parse(localStorage.getItem("animalFavorites")) || []
    animalFavorites.push(newAnimal)
    localStorage.setItem("animalFavorites", JSON.stringify(animalFavorites))
    window.location.replace("favorites.html")
  })
  let addRemoveButton = $(`<button></button>`).text("Remove Button");
  footer.append([addButton, addRemoveButton]);
  let card = $(`<div></div>`)
  card.append([header, cardstat1, cardstat2, cardstat3, footer]);

  $("#animal-container").append(card)



  return;
}



//todo display pokemon cards



function createPokemonCard(pokemon) {
  $(`.p-card-header`).addClass("card-header-h3").text(pokemon.name);
  $(`#pStat-1`).addClass("card-stats").text(pokemon.height);
  $(`#pStat-2`).addClass("card-stats").text(pokemon.weight);
  $(`#pStat-3`).addClass("card-stats").text(pokemon.speed);
  return;
}

//event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }
});

//Lines 91-132 are for the modal functionality
document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $("#modal-js-example").addClass("is-active");
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

//Lines 91-132 are for the modal functionality
document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $("#modal-js-example1").addClass("is-active");
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
  (document.querySelectorAll(".modal-trigger") || []).forEach(($trigger) => {
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

//end of modal functionality

//event listener for click of animal search. will need to make animalInput a string from the user.
const animalInput = document.querySelector("#userAnimalInput");
const animalButton = document.querySelector("#modal-button-animal");
const pokemonInput = document.querySelector("#userPokemonInput");
const pokemonButton = document.querySelector("#modal-button-pokemon");

pokemonButton.addEventListener("click", pokemonSearch);
animalButton.addEventListener("click", animalSearch);

//todo add event listener for faves button
