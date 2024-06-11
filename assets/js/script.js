
function animalFetchApi(animalInput) {
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/animals?name=' + animalInput,
    headers: { 'X-Api-Key': 'LOHrIg46z+hgQ1p2e+L3QQ==Nr61dc7r4QFJEkxi' },
    contentType: 'application/json',
    success: function (result) {
      console.log('ninja api', result[0]);

      // console.log('weight only', result[0].characteristics.weight)
      // checking results for weight if they exist. if they don't dom updated with unknown
      // if it exists update dom with weight
      // need to format weight info to look cleaner
      if (result[0].characteristics.weight === null
        || result[0].characteristics.weight === undefined) {
        document.getElementById('aStat-1').textContent = 'Weight: unknown ';
      }
      else {
        let weight = result[0].characteristics.weight;
        document.getElementById('aStat-1').textContent = `Weight: ${weight}`;
        console.log('Weight: ', weight)
      }
      // checking for speed, updating dom with info
      if (result[0].characteristics.top_speed === null
        || result[0].characteristics.top_speed === undefined) {
        document.getElementById('aStat-2').textContent = 'Speed: unknown ';
      }
      else {
        let speed = result[0].characteristics.top_speed
        document.getElementById('aStat-2').textContent = `Speed: ${speed} `;
      }
      if (result[0].characteristics.height !== null
        && result[0].characteristics.height !== undefined) {
        let height = result[0].characteristics.height;
        document.getElementById('aStat-3').textContent = `Height: ${height}`
      }
      else if (result[0].characteristics.length !== null
        && result[0].characteristics.length !== undefined) {
          let length = result[0].characteristics.length;
          document.getElementById('aStat-3').textContent = `Lenght: ${length}`;
      }
      else {
        document.getElementById('aStat-3').textContent = 'Height: unknown';
      }

      // below is a way to look if a variable has been defined or not
      //   if (typeof variable === 'undefined') {
      //     // variable is undefined
      // }
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
  //createAnimalCard(animals)
  // note to bryan. information coming out of the api will be an array
  // animals = [name, height, weight, speed]
}
let animalInput = 'cheetah';  // needs to be removed.  The function will be called through the form section.  animalFetchApi(userAnimalInput); 
//add to event listener

// animalFetchApi(animalInput);

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



