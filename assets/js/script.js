

let animalInput = 'cheetah';  // needs to be removed
function animalFetchApi(animalInput) {
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/animals?name=' + animalInput,
    headers: { 'X-Api-Key': 'LOHrIg46z+hgQ1p2e+L3QQ==Nr61dc7r4QFJEkxi' },
    contentType: 'application/json',
    success: function (result) {
      console.log('ninja api', result[0]);

      // console.log('weight only', result[0].characteristics.weight)
      let weight = result[0].characteristics.weight;
      console.log(weight);
      let speed = result[0].characteristics.top_speed
      console.log('speed', speed)
      if (result[0].characteristics.height === null || result[0].characteristics.height === undefined)
      console.log('height only', result[0].characteristics.height)

    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
// createAnimalCard(animals)
// note to bryan. information coming out of the api will be an array
// animals = [name, height, weight, speed]
}

//add to event listener
animalFetchApi(animalInput)

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



