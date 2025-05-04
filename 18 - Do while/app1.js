let resultado = "";
let i = 0;

do {
    i++;
    resultado += `${i} `;
    console.log(resultado, "dentro do while");
}   while (i < 10
);

console.log(resultado);