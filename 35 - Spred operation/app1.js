const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// const array3 = array1.concat(array2);

// operador spread

const array3 = [...array1, ...array2];
console.log(array3);

// Spread Operator Objetos

const person = {
  id: 1,
  name: "Paulo Nolleto",
 };

const personAdress = {
    city: "New York",
};

const completedPerson = {
    ...person,
    ...personAdress,
};

console.log(completedPerson);
