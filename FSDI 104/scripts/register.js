//object literal

let petSalon = {
  name: "The Fashion Pet",
  address: {
    country: "Mexico",
    city: "Tijuana",
    zip: "23456",
  },
  phone: "6659987311",
  pets: [],
};

//create the Pet constructor (name,age,gender,breed,service)

function Pet(name, age, gender, breed, service, type) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.type = type;
}

//get the inputs from the HTML
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");

function isValid(aPet) {
  let valid = true;
  if (aPet.name == "") {
    valid == false;
    inputName.classList.add("Error");
  }
  return valid;
}

function register() {
  //create the obj
  let newPet = new Pet(
    inputName.value,
    inputAge.value,
    inputGender.value,
    inputBreed.value,
    inputService.value,
    inputType.value
  );
  if (isValid(newPet)) {
    //display the obj
    petSalon.pets.push(newPet);
    displayPetCard();
  }
}

function init() {
  //hook events
  //create two pets using the Pet constructor
  let scooby = new Pet("Scooby", 21, "Male", "Great Dane", "Vaccines");
  let snoop = new Pet("Snoop", 30, "Male", "Atomic Dog", "Vaccizzles");
  petSalon.pets.push(scooby, snoop);

  displayPetCard();
}

window.onload = init; //wait to render the HTML
