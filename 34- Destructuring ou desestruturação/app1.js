const numbers = [1,2,3,4,5,6];

const primeiraPosição = numbers[0];
const segundaPosição = numbers[1];
const terceiraPosição = numbers[2];
const quartaPosição = numbers[3];

console.log(primeiraPosição, segundaPosição, terceiraPosição, quartaPosição);

const [primeira, segunda, terceira, ...resto] = numbers;
console.log(primeira, segunda, terceira, resto);

// Desestruturação com Objetos
const person = {
    name: "Paulo",
    age: 52,
    city: "New York"
};

const myName = person.name;

const { name, city, age } = person;

console.log(name, city, age);