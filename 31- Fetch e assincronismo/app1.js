// Fazendo uma requisição API
let result = ["Paulo Nolleto"];

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => {
    result = json;

    for (const item of result) {
      console.log(item.name);
    }
  })
  .catch(error => {
    console.error("Erro na requisição:", error);
  });
