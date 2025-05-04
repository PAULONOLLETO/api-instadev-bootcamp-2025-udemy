const nome = "Paulo";

// if(nome === "Paulo"){
//    console.log("O nome é Paulo");
//} else if (nome === "Milenna") {
//    console.log("O nome é Milenna");
//} else {
//    console.log("Nome Desconhecido");
//}

switch (nome) {
    case "Paulo":
        console.log("O nome é Paulo");
    case "Milenna":
        console.log("O nome é Milenna");
        break;    

    default:
        console.log("Nome desconhecido")
}