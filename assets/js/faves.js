// pulling from localStorage
let animalFavorites = JSON.parse(localStorage.getItem("animalFavorites")) || []
animalFavorites.forEach(function (item) {
  createAnimalCard(item)
});

function createAnimalCard(animal) {
  // Dynamically creating tags with content onto the dom 
  let header = $(`<h3></h3>`).addClass("card-header-h3").text(animal.name);
  let cardstat1 = $(`<p></p>`).addClass("card-stats").text(animal.height);
  let cardstat2 = $(`<p></p>`).addClass("card-stats").text(animal.weight);
  let cardstat3 = $(`<p></p>`).addClass("card-stats").text(animal.speed);
  let footer = $(`<div></div>`);
  let addRemoveButton = $(`<button></button>`).text("Remove Button").addClass("removeCard");
  footer.append(addRemoveButton);
  let card = $(`<div></div>`).addClass('cardClass');
  // adding jquerry data to object
  card.data('name', animal.name);
  card.append([header, cardstat1, cardstat2, cardstat3, footer]);
  addRemoveButton.click(function () {
    let parentDiv = addRemoveButton.closest('.cardClass');
    // removing from dom
    parentDiv.remove();
    // removing from local storage
    removeLocalStorage('animalFavorites', animal.name)
  });

  $("#favorite-animal-container").append(card)

  return;
};

// pulling from localStorage
let pokemonFavorites = JSON.parse(localStorage.getItem("pokemonFavorites")) || []
pokemonFavorites.forEach(function (item) {
  createPokemonCard(item)
})

function createPokemonCard(pokemon) {
  // Dynamically creating tags with content onto the dom 
  let header = $(`<h3></h3>`).addClass("card-header-h3").text(pokemon.name);
  let cardstat1 = $(`<p></p>`).addClass("card-stats").text(pokemon.height);
  let cardstat2 = $(`<p></p>`).addClass("card-stats").text(pokemon.weight);
  let cardstat3 = $(`<p></p>`).addClass("card-stats").text(pokemon.speed);
  let footer = $(`<div></div>`);
  let addRemoveButton = $(`<button></button>`).text("Remove Button");
  footer.append(addRemoveButton);
  let card = $(`<div></div>`).addClass('cardClass');
  card.data('name', pokemon.name);
  card.append([header, cardstat1, cardstat2, cardstat3, footer]);
  addRemoveButton.click(function () {
    let parentDiv = addRemoveButton.closest('.cardClass');
    // removing from dom
    parentDiv.remove();
    // removing from local storage
    removeLocalStorage('pokemonFavorites', pokemon.name);
  }
  );

  $("#favorite-pokemon-container").append(card)

  return;
}


function removeLocalStorage(storageKey, itemName) {
  //retrieving current localStorage
  let favorites = JSON.parse(localStorage.getItem(storageKey)) || [];
  favorites = favorites.filter(item => item.name !== itemName);
  localStorage.setItem(storageKey, JSON.stringify(favorites));
}