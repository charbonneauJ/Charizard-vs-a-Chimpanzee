let animalFavorites = JSON.parse(localStorage.getItem("animalFavorites")) || []
console.log("You made it here")
animalFavorites.forEach(function(item){
    createAnimalCard(item)
})

function createAnimalCard(animal) {
    // $(`.a-card-header`).addClass("card-header-h3").text(animal.name);
    // $(`#aStat-1`).addClass("card-stats").text(animal.height);
    // $(`#aStat-2`).addClass("card-stats").text(animal.weight);
    // $(`#aStat-3`).addClass("card-stats").text(animal.speed);
    //refactoring
    let header = $(`<h3></h3>`).addClass("card-header-h3").text(animal.name);
    let cardstat1 = $(`<p></p>`).addClass("card-stats").text(animal.height);
    let cardstat2 =  $(`<p></p>`).addClass("card-stats").text(animal.weight);
    let cardstat3 = $(`<p></p>`).addClass("card-stats").text(animal.speed);
    let footer = $(`<div></div>`);
    let addButton = $(`<button></button>`).text("Add to Favorites");
    
    let addRemoveButton = $(`<button></button>`).text("Remove Button");
    let card = $(`<div></div>`)
    card.append ([header, cardstat1, cardstat2, cardstat3, footer]);
    
  
  $("#favorite-animal-container").append(card)
  
  
  
    return;
  }
  