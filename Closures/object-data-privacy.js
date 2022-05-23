function Catt(name, breed, owner) {
  // Instance variables. Leading underscore is a hint that they are private.

  const _name = name;
  const _breed = breed;
  let _owner = owner;

  // Last names of allowed owners
  const _allowedOwnerFamilies = ["Pontino", "Soffici"];

  const getName = () => {
    return _name;
  };

  const getBreed = () => {
    return _breed;
  };

  const getOwner = () => {
    return _owner;
  };

  // Only allow people in the allowed families to be set as the owner.
  const setOwner = (newOwner) => {
    if (
      newOwner instanceof Person &&
      _allowedOwnerFamilies.includes(newOwner.lastName)
    ) {
      _owner = newOwner;
      console.log(`Owner changed to: ${_owner.fullName()}`);
    } else {
      console.log("Not allowed to assign that owner!");
    }
  };

  // Return an object representing Mwezi, with access to the private variables through methods.
  return {
    getName,
    getBreed,
    getOwner,
    setOwner,
  };
}

// Create Mwezi the new way
mwezi1 = new Catt("Mwezi", "Carey", julieta);

// Access Mwezi's properties through the getter/setter methods
console.log("Name:", mwezi1.getName()); // => 'Name: Julieta'
console.log("Breed:", mwezi1.getBreed()); // => 'Breed: Carey'
console.log("Owner Name:", mwezi1.getOwner().fullName()); // => 'Owner Name: Julieta pontino'

// Show that we cannot access Mwezi's properties directly
console.log(mwezi1._name); // => undefined

// Show restrictions on assigning Mwezi's owner

mwezi1.setOwner(null); // => 'Not allowed to assign that owner!'
mwezi1.setOwner(new Person("ElVecino", "Rodriguez")); // => 'Not allowed to assign that owner!'
mwezi1.setOwner(new Person("Lautaro", "Soffici")); // => 'Owner changed to: Lautaro Soffici'
mwezi1.setOwner(new Person("Violeta", "Pontino")); // => 'Owner changed to: Violeta Pontino'
