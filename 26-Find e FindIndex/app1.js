const peoples = ["Paulo", "Claudiana", "Milenna","Mirella","Athenas","Apollo"];

const myNamePosition = peoples.find((item) => item === "Paulo");
console.log(myNamePosition);

const myNamePositionIndex = peoples.findIndex((item) => item === "Milenna");
console.log(myNamePositionIndex);