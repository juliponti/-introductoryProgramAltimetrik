// Closure
function familyMemberFactory(familyName) {
  return function newFamilyMember(firstName) {
    return new Person(firstName, familyName);
  };
}

// Create the two family factories that we'll use to create family members
const sofficiFactory = familyMemberFactory("Soffici");
const pontinoFactory = familyMemberFactory("Pontino");

// Make a few Soffici family members
const lautaro = sofficiFactory("Lautaro");
const franco = sofficiFactory("Franco");

// Collect and show the created members
const sofficiFamily = [lautaro, franco];
console.log(sofficiFamily);

// => [
//   Person { firstName: 'Lautaro', lastName: 'Soffici' },
//   Person { firstName: 'Franco', lastName: 'Soffici' },
// ]

// Make Pontino family members
const pontinoFamily = ["Julieta", "Violeta", "Lucia"].map(pontinoFactory);
console.log(pontinoFamily);

// => [
//   Person { firstName: 'Julieta', lastName: 'Pontino },
//   Person { firstName: 'Julieta', lastName: 'Pontino' },
//   Person { firstName: 'Julieta', lastName: 'Pontino' }
// ]
