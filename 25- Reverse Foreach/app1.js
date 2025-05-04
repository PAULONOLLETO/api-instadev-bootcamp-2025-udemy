const cars = ["Corolla", "Honda Civic", "Land Rover", "Fusca"];

// reverse, inverte as posições do array
console.log(cars);
cars.reverse();
console.log(cars, "cars após o reverse");

//function logPositions(item) {
//  console.log(item);
//}
//cars.forEach(logPositions);

// outra forma mais simplificada de obter o mesmo resultado
//cars.forEach((item, index) => console.log(item, index));

// MAP Percorre e retorna um novo array

const otherCars = cars.map((car) => car);

console.log(otherCars, "otherCars");