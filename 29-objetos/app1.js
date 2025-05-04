const car = {
  name: "corolla",
  color: "black",
  fabrication: "2025",
  "size-car": "4 metros",
  "air-bag": "true",
};
// Acessar propriedades de um objeto
console.log(car.name);
console.log(car["size-car"]);

console.log("================================");

// Modificar o valor de uma propriedade
car.name = "Honda Civic";
console.log(car.name);

// Criar uma nova propriedade dentro de um objeto

console.log("===================================");
console.log(car.age);
car.age = 3;
console.log(car.age);

console.log("=====================================");
//Deletar uma propriedade
delete car.age;
console.log(car.age);

// Verificar se existe uma propriedade com esse nome

if ("name" in car) {
  console.log("Nome existe dentro do carro");
} else {
  console.log("Nome não existe dentro do carro");
}
