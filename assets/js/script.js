
function animalFetchApi(animalInput) {
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/animals?name=' + animalInput,
    headers: { 'X-Api-Key': 'LOHrIg46z+hgQ1p2e+L3QQ==Nr61dc7r4QFJEkxi' },
    contentType: 'application/json',
    success: function (result) {
      console.log('ninja api', result[0]);


      // checking results for weight if they exist. if they don't dom updated with unknown
      // if it exists update dom with weight
      // need to format weight info to look cleaner
      // document.getElementById('api-animal-name').textContent = result[0].;
      let apiWeight = result[0].characteristics.weight
      if (apiWeight === null
        || apiWeight === undefined) {
        document.getElementById('aStat-1').textContent = 'Weight: unknown ';
      }
      else {
        let weight = apiWeight;
        document.getElementById('aStat-1').textContent = `Weight: ${weight}`;
        console.log('Weight: ', weight)
      }
      // checking for speed, updating dom with info
      let apiSpeed = result[0].characteristics.top_speed;
      if (apiSpeed === null
        || apiSpeed === undefined) {
        document.getElementById('aStat-2').textContent = 'Speed: unknown ';
      }
      else {
        let speed = apiSpeed
        document.getElementById('aStat-2').textContent = `Speed: ${speed} `;
      }
      // chcking for height
      let apiHeight = result[0].characteristics.height;
      if (apiHeight !== null
        && apiHeight !== undefined) {
        document.getElementById('aStat-3').textContent = `Height: ${apiHeight}`

      }
      else if (result[0].characteristics.length !== null
        && result[0].characteristics.length !== undefined) {
        let length = result[0].characteristics.length;
        document.getElementById('aStat-3').textContent = `Length: ${length}`;
      }
      else {
        document.getElementById('aStat-3').textContent = 'Height: unknown';
      }

    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
  //createAnimalCard(animals)
  // note to bryan. information coming out of the api will be an array
  // animals = [name, height, weight, speed]

}


//event listener for click of animal search. will need to make animalInput a string from the user. 
const animalInput = document.querySelector('#search-input-animal');
const animalButton = document.querySelector('#search-button-animal');

function animalSearch() {
  const userAnimalInput = animalInput.value.trim();
  if (userAnimalInput) {
    animalFetchApi(userAnimalInput);
  }
  // this can be an alert somewhere else.
  else {
    console.log('enter an animal')
  };
};



//todo store to local storage

//todo get from local storage

//todo display animal cards
document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
});



function pokemonFetchApi(userPokemonInput) {
  console.log('step 1:', userPokemonInput);
  let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${userPokemonInput}`;
  console.log(urlPokemon);
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
      // Log the data from the response
      console.log('step 2:', data);
      // update the dom

    })
    .catch(function (error) {
      // add this to the dom somewhere
      console.error('Error, try again', error);
    });
}

const pokemonInput = document.querySelector('#search-input-pokemon');
const pokemonButton = document.querySelector('#search-button-pokemon');

function pokemonSearch() {
  const userPokemonInput = pokemonInput.value.trim();
  if (userPokemonInput) {
    pokemonFetchApi(userPokemonInput);
  }
  // this can be an alert somewhere else.
  else {
    console.log('enter a pokemon')
  };
};

pokemonButton.addEventListener('click', pokemonSearch);
animalButton.addEventListener('click', animalSearch);
