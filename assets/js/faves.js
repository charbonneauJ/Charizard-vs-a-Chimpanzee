//todo get from local storage
function getAnFave() {
  const storedAnimal = JSON.parse(localStorage.getItem("animal"));
  if (Array.isArray(storedAnimal) && storedAnimal !== null) {
    animal = storedAnimal;
    createAnimalCard();
  } else {
    animal = {};
  }
}
function getPoFave() {
  const storedPokemon = JSON.parse(localStorage.getItem("pokemon"));
  if (Array.isArray(storedPokemon) && storedPokemon !== null) {
    pokemon = storedPokemon;
    createPokemonCard();
  } else {
    pokemon = {};
  }
}

//todo display animal cards
let animal = {
  name: "Cheetah",
  weight: "100lbs",
  height: "45in",
  speed: "70mph",
};
function createAnimalCard(animal) {
  $(`.a-card-header`).addClass("card-header h3").text(animal.name);
  $(`#aStat-1`).addClass("card-stats").text(animal.height);
  $(`#aStat-2`).addClass("card-stats").text(animal.weight);
  $(`#aStat-3`).addClass("card-stats").text(animal.speed);
  return;
}

//todo display pokemon cards

let pokemon = {
  name: "Charizard",
  weight: "40lbs",
  height: "3 ft",
  speed: "48mph",
};
function createPokemonCard(pokemon) {
  $(`.p-card-header`).addClass("card-header h3").text(pokemon.name);
  $(`#pStat-1`).addClass("card-stats").text(pokemon.height);
  $(`#pStat-2`).addClass("card-stats").text(pokemon.weight);
  $(`#pStat-3`).addClass("card-stats").text(pokemon.speed);
  return;
}

function displayFaves() {
  getAnFave();
  createAnimalCard();
  getPoFave();
  createPokemonCard();
}

displayFaves();
