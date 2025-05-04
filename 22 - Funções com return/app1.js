function sumNumbers(n1, n2, n3, n4) {
  const sum = n1 + n2 + n3 + n4;

  return sum;
}

function media(sum) {
  const studentMedia = sum / 4;
  return studentMedia;
}

const studentScore = sumNumbers(10, 10, 10, 10);

if (media(studentScore) === 10) {
  console.log("Melhor Aluno da Sala");
} else if (media(studentScore) < 5) {
  console.log("Aluno Desleixado, ficou em Recuperação");
} else {
  console.log("Aluno Passou");
}
