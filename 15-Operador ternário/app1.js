const media = 10;

let resultado;

//  if(media >= 7){
//    resultado = "Aluno Aprovado";
//} else {
//    resultado = "Reprovado";
//}

resultado 
    = media >= 7 ? "Aprovado" : media >= 5 ? "Em recuperação" : "Reprovado";

console.log(resultado);