// String methods demo

const name = "Ali";
const age = 22;

console.log(`My name is ${name} and my age is ${age}`);

// 1) length, toUpperCase, toLowerCase, charAt, indexOf
const gameName = "PUBG";
console.log(`Length: ${gameName.length}`);
console.log(`Uppercase: ${gameName.toUpperCase()}`);
console.log(`Lowercase: ${gameName.toLowerCase()}`);
console.log(`Character at index 2: ${gameName.charAt(2)}`);
console.log(`Index of G: ${gameName.indexOf("G")}`);

// 2) substring and slice
const group = "farewellgroup";
const newGroup = group.substring(0, 8);
const lastGroup = newGroup.slice(0, 4);
console.log(`Substring: ${newGroup}`);
console.log(`Slice: ${lastGroup}`);

// 3) trim, trimStart, trimEnd
const methodTrim = "    [Ali]    ";
console.log(`Original: ${methodTrim}`);
console.log(`Trim: |${methodTrim.trim()}|`);
console.log(`TrimStart: |${methodTrim.trimStart()}|`);
console.log(`TrimEnd: |${methodTrim.trimEnd()}|`);

// 4) replace and replaceAll
const email = "ialiejaz33@gmail.com";
console.log(`Replace: ${email.replace("33", "wains")}`);
console.log(`ReplaceAll example: ${"banana banana".replaceAll("banana", "apple")}`);

// 5) includes, startsWith, endsWith
const sentence = "Arham Wains";
console.log(`Includes "Wains": ${sentence.includes("Wains")}`);
console.log(`Starts with "Arham": ${sentence.startsWith("Arham")}`);
console.log(`Ends with "Wains": ${sentence.endsWith("Wains")}`);

// 6) split
const words = "JavaScript is awesome";
console.log(`Split: ${words.split(" ")}`);

// 7) concat
const firstName = "Ali";
const lastName = "Raza";
const fullName = firstName.concat(" ", lastName);
console.log(`Concat: ${fullName}`);

// 8) at
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(`At index 5: ${alphabet.at(5)}`);

// 9) charCodeAt and codePointAt
const noEmoji = "A";
const emoji = "🎁";
console.table([
  { Character: noEmoji, charCodeAt: noEmoji.charCodeAt(0), codePointAt: noEmoji.codePointAt(0) },
  { Character: emoji, charCodeAt: emoji.charCodeAt(0), codePointAt: emoji.codePointAt(0) }
]);

// 10) repeat, padStart, padEnd
const word = "JS";
console.log(`Repeat: ${word.repeat(3)}`);
console.log(`PadStart: ${word.padStart(6, "0")}`);
console.log(`PadEnd: ${word.padEnd(6, "!")}`);

// Deprecated methods are not used here because they are not supported in modern JavaScript.
// Examples: anchor(), big(), blink(), bold().