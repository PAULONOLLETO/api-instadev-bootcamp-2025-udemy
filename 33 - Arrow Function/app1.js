function sum(n1, n2) {
  return n1 + n2;
}

console.log(sum(1, 2));

// Arrow functions
const sumNumbers = (n1, n2) => {
    return n1 + n2;
  };
  
  console.log(sumNumbers(1, 2), "depois da arrow function ser definida");
  
// Hoisting => Var e Function