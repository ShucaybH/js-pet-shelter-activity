document.addEventListener("DOMContentLoaded", function() {
  // Define an array to shelter your pets
  var shelterPets = [];
  
  // Function to add a pet to the shelter - needs to have a param to add a name, type of animal, and age
  function addPet(petName, petType, petAge) {
  let pet = {
  name: petName,
  type: petType,
  age: petAge
  };
  shelterPets.push(pet);
  displayPets();
  }
  
  // Function to display pets in the shelter
  function displayPets() {
  let petList = document.getElementById("pet-list");
  petList.innerHTML = ""; // Clear the previous pet list
  
  // Loop through each pet in the shelter and create a list item for each
  for (let i = 0; i < shelterPets.length; i++) {
  let pet = shelterPets[i];
  let petItem = document.createElement('li');
  petItem.textContent = `${pet.name}: ${pet.type}, ${pet.age}`;
  petList.appendChild(petItem); //will assist with adding each pet item to be shown in the list on the browser
  }
  }
  
  // Add some sample pets to the shelter
  addPet("Travy", "Dog", 3); //example
  addPet("Hemi", "Cat", 2);
  addPet("Clifford", "Dog", 1);
  addPet("Lion", "Cat", 3);
  
  // Display the pets in the shelter
  displayPets();
  
  //STRETCH GOALS:
  
  // Function to check if the pet shelter has animals that need homes (based on how many animals are in the shelter)
  function hasPetsAvailable() {
  return shelterPets.length > 0;
  }
  
  // Check if the pet shelter has animals that need homes by calling the previous function
  console.log("Are there pets available for adoption?", hasPetsAvailable());
  
  // Function to calculate the average age of pets in the shelter
  function calculateAverageAge() {
  if (shelterPets.length === 0) {
  return 0;
  }
  
  let totalAge = 0;
  for (let i = 0; i < shelterPets.length; i++) {
  totalAge += shelterPets[i].age;
  }
  return totalAge / shelterPets.length;
  }
  
  // Calculate the average age of pets in the shelter by calling the previous function
  const averageAge = calculateAverageAge();
  console.log("Average age of pets in the shelter:", averageAge);
  });