// loops

// let i = 0;
// i < 5;
// i++;
//repeatedy run a code while the condition is True

// for (let number = 11; number >= 0; number--) {
//   console.log(number);
// }

// const person = {
//   name: "Nick",
//   greeting() {},
// };

// console.log(`Hey i am ${person.name}`);

// console.log(person.name);
// person.greeting();

// length of string

//METHODS
//Anytime you create a string you have aceess to properties and methods.

// let text = "nicholas allen";
// let result = Text.length;
// console.log(text.length);
// //transform text to toLocaleupper/lower case
// console.log(text.toLocaleLowerCase());
// console.log(text.toLocaleUpperCase());

// //charAT g specifically pings a character within a text
// console.log(text.charAt(2));

// //length of text -1 character from the end
// console.log(text.charAt(text.length - 1));

//Finds the number of character inside a string

// console.log(text.indexOf("n"));

// console.log(text.trim().toLowerCase().startsWith("nicholas"));

// console.log(text.includes("nich"));

// console.log(text.slice(-2));

// function fullName(firstName, lastName) {
//   const fullName = `${firstName},${lastName}`;
//   return fullName.toUpperCase();
// }
// console.log(fullName("Nicholas", "Allen"));

//CHALLENGES
// created a function/declare/invoke
//to change the first and last name to uppercase
// and change the order of arguments

// function fullName({ firstName, lastName }) {
//   const fullName = `my name is ${firstName} ${lastName}`;
//   return fullName.toUpperCase();
// }

// console.log(fullName({ firstName: "Nick", lastName: "Allen" }));

//ARRAY PROPERTIES AND METHODS

// let names = ["john", "Sarah", "Terry", "jaden", "carmen"];

// //length
// console.log(names.length);
// //returns the last value in a list
// console.log(names[names.length - 1]);

//CONCAT
// returns all the values inside a list
// const lastNames = ["pepper", "onions", "pizza"];
// const allnames = names.concat(lastNames);
// console.log(allnames);
// REVERSE

//returns the list in reverse

// console.log(allnames.reverse());

//UNSHIFT
//returns and moves any of the value index to 0

// allnames.unshift("Terry");
// allnames.unshift("onions");
// console.log(allnames);

//SHIFT
//remove the first item in a list

// allnames.shift();
// console.log(allnames);

//PUSH

// allnames.push("john");
// console.log(allnames);

//POP
//Removes item from the end of the array

// allnames.pop();
// allnames.pop();
// allnames.pop();
// allnames.pop();
// allnames.pop();
// console.log(allnames);

//SPLICE-mutates original array
//Grab specific array in a list

// const specificNames = allnames.splice(1, 3);
// console.log(specificNames);
