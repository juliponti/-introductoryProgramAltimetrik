// Define Cat and Person classes

class Cat {
  constructor(name, breed, owner) {
    this.name = name;
    this.breed = breed;
    this.owner = owner; // owner will be a Person object
  }
}

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Create a Person (me)
const julieta = new Person("Julieta", "Pontino");

// Create a Cat (Mwezi). I am her owner.
const mwezi = new Cat("Mwezi", "Carey", julieta);

// Access Mwezi's properties
console.log("Name:", mwezi.name); // => 'Name: Julieta'
console.log("Breed:", mwezi.breed); // => 'Breed: Carey'
console.log("Owner Name:", mwezi.owner.fullName()); // => 'Owner Name: Julieta Pontino'

// Create Violeta Pontino, a new Person
const violeta = new Person("Violeta", "Pontino");

// Assign Violeta to be Mwezi's owner
mwezi.owner = violeta;

// Show that Violeta is Mwezi's owner
console.log("Owner Name:", mwezi.owner.fullName()); // => 'Owner Name: Violeta Pontino' */
