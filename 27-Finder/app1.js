const peoples = ["Paulo", "Claudiana", "Milenna","Mirella","Athenas","Apollo"];

const filteredPeoples = peoples.filter((item) => item.length > 5);

console.log(peoples, "peoples");
console.log(filteredPeoples, "filteredPeoples");

const jusMyName = peoples.filter((item) => item === "Paulo");
console.log(jusMyName);