const name = "Ali";
const age = 22;

const gameName = new String("PUBG");
console.log(`My name is ${name} and my age is ${age}`);

console.log(gameName[3]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('G'));

const group = "farewellgroup"

const newGroup = group.substring(0,8)
console.log(newGroup);

const lastGroup = newGroup.slice(0,4)
console.log(lastGroup)

const methodTrim = "    [Ali]    "
console.log(methodTrim);
console.log(methodTrim.trimStart());
console.log(methodTrim.trimEnd());

const game = "ialiejaz33@gmail.com"
console.log(game.replace('33','wains'))
