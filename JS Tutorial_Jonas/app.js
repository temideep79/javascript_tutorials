// // Arrays, Functions and Objects
// // Arrays - [], 0 index based

// // i wan to create a group of friends

// const friends1 = "Anna";
// const friends2 = "Anna";
// const friends3 = "Anna";
// const friends4 = "Anna";

// //imagine you have a thousand people you need to register their names in a database.

// // Arrays Basics
// const nameOfFirends = [
//   "Nick",
//   "peter",
//   "sarah",
//   "carmen",
//   "45",
//   null,
//   undefined,
// ];

// let acessMYFriend = nameOfFirends[3]; //selecting from a list
// nameOfFirends[4] = "john"; // A list  item or name was changed
// console.log(nameOfFirends);
// console.log(nameOfFirends[4]);

// //Array challenge
// //create fruits array and store the same fruit values

// const fruits = ["mango", "pine-apple", "strawberry", "Grapes", "16"];

// const myFirstFruits = fruits[0];
// fruits[4] = "lemon";
// console.log(myFirstFruits, fruits);

//function-declare and invoke using string literals

// function greet(pool, age) {
//   if (age >= 20) {
//     console.log(`Hi,${pool} you are welcome to Join 👍 !`);
//   } else {
//     console.log(` Hi ${pool},you are ${age} too young to Join😁 !`);
//   }
// }
// greet("anna", 18);
// greet("Nick", 27);
// greet("jaden", 2);

//calculate average
// const dolphinScore = (96 + 108 + 109) / 3;
// const scorekaolas = (96 + 108 + 109) / 3;
// console.log(dolphinScore, scorekaolas);

// //consition
// if (dolphinScore > scorekaolas) {
//   console.log("Dolphins wins the trophy 🏆  ");
// } else if (scorekaolas > dolphinScore) {
//   console.log("koalas wins the trophy 🎇🚗");
// } else if (dolphinScore === scorekaolas) {
//   console.log("Both is a draw!😫");
// }

// const dolphinScore = (97 + 112 + 81) / 3;
// const scorekaolas = (109 + 95 + 86) / 3;
// console.log(dolphinScore, scorekaolas);

// //consition
// if (dolphinScore > scorekaolas && dolphinScore >= 100) {
//   console.log("Dolphins wins the trophy 🏆  ");
// } else if (scorekaolas > dolphinScore) {
//   console.log("koalas wins the trophy 🎇🚗");
// } else if (dolphinScore <= 100 && scorekaolas <= 100) {
//   console.log("Both are winners😎");
// } else {
//   console.log("you are not here");
// }

//else if example for a switch case

// const day = "friday";
// const rainyday = "wet";

// if (day === "sunday" && rainyday === "wet") {
//   console.log("plan course structure ");
// } else if (day === "Tuesday") {
//   console.log("plan course structure ");
// } else if (day === "wednesday") {
//   console.log("You cant come around on Tuesdays 😏");
// } else if (day === "Thursday") {
//   console.log("These days ar booked 😣");
// } else if (day === "friday" && "wet") {
//   console.log("Thank God is Friday 🤣");
// } else if (saturday === "sunday") {
//   console.log("Its a day for chores😚");
// } else {
//   console.log("Its a day for rest 🥰");
// }

//switch statement are like if and else if statement

// switch (day) {
//   case "monday":
//     console.log("plan course structure ");
//     console.log("Go to coding Meet up");

//     break;

//   case "Tuesday":
//     console.log("You cant come around on Tuesdays 😏");
//     break;
//   case "wednesday":
//   case "Thursday":
//     console.log("These days ar booked 😣");
//     break;
//   case "friday":
//     console.log("Thank God is Friday 🤣");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Its a day for chores😚");

//     break;

//   default:
//     console.log("Its a day for rest 🥰");
// }

//statement and expressions

// declareation statement translate  actions we want //perfom
//3+4 if(23>10)
//expression are the values they
//if(23>10)= '23 is bigger

//conditional operator

//Teneray operator is been used

//
const age = 20;
age >= 18;
/*?*/
//condition

//   //if part
//   console.log("i like to drink wine 🍫")
//   //else-part
//   : console.log("i like Mc Donalds 🍔🥫");

const myDrink = age >= 18 ? " i want popcorn 🍿" : "i want  pizza🍕";
console.log(myDrink);
