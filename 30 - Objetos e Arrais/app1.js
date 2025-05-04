const cars = [
  {
    id: 1,
    name: "Corolla",
  },
  {
    id: 2,
    name: "Honda Civic",
  },
  {
    id: 3,
    name: "Mercedez",
  },
];
// Acessando todos os carros
cars.forEach((car) => {
  console.log(car.name);
});
// Acessando individualmente
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// Acessar via loop
console.log("============================");
for (const car of cars) {
    console.log(car.name);
}
console.log("==============================");
// Adicionar outro objeto dentro do array
cars.push({
    id: 4,
    name: "Jaguar"
});

for (const car of cars) {
    console.log(car.name);
}