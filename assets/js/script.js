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
  const animalCard = $("<div>")
    .addClass("card animal-card")
    .attr("data-animal-id", animals.id);
  const cardHeader = $("<div>").addClass("card-header h3").text(animals.name);
  const cardBody = $("<div>").addClass("card-body");
  const animalHeight = $("<div>").addClass("card-stats").text(animals.height);
  const animalWeight = $("<div>").addClass("card-stats").text(animals.weight);
  const animalSpeed = $("<div>").addClass("card-stats").text(animals.speed);
  cardBody.append(animalHeight, animalWeight, animalSpeed);
  animalCard.append(cardHeader, cardBody);
  console.log(animalCard);
}
console.log(animals);
const animalList = $("#animals");
animalList.append(createAnimalCard(animals));
console.log(animals);
