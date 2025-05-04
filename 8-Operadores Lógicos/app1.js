// Operadores Lógicos

// and lógico (&&)
// para que retorne um verdadeiro (true) as duas condições devem ser verdadeiras
// true && true = true
// false && false = true
// true && false = false
// false && true = false

console.log("and lógico &&");
console.log("true && true:", true && true);
console.log("false && true:", false && true);
console.log("10 > = 10 && 11 >= 11:", 10 >= 10 && 11 >= 11);

console.log("==================================================");
console.log("or lógico ||");
// or lógico (||)
// para que retorne um verdadeiro (true) uma das condições devem ser verdadeiras
// true || true = true
// false || false = false
// true || false = true
// false || true = true

console.log("true || true:", true || true);
console.log("false || true:", false || true);
console.log("10 > = 10 || 11 >= 11:", 10 >= 10 || 11 >= 11);

// not lógico (!)
console.log("==================================================");
console.log("not lógico (!)");

const usuarioAtivo = true;
const inscrito = false;

console.log("usuárioAtivo", !usuarioAtivo);
console.log("inscrito", !inscrito);

console.log("10 > = 10 && 11 >= 11:", !(10 >= 10) && 11 >= 11);
console.log("!(10 >= 10)", !(10 >= 10));
