async function loadData() {
  load = true;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/userss");
    const data = await response.json();

    for (const item of data) {
      console.log(item.name);
    }

    console.log(data);
  } catch (error) {
    console.log(error.message);
    console.log("O Programa falhou, contate o Administrador...");
  } finally {
    console.log("O finally executou...");
  }
}
loadData();
