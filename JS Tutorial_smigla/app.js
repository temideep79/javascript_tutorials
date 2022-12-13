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

// const myDrink = age >= 18 ? " i want popcorn 🍿" : "i want  pizza🍕";
// console.log(myDrink);

//function retun
//when you return you n need to assign to a varaible

// const wallHeight = 145;
// const wallWidth = 100;

// function calculate(value) {
//   //   const newValue = value * 2.54;
// //   return value * 2.54;
//   //you cant console log after a return  anything after return will be ignored
// }

// const convertRoom = function calculate(value) {
//   return value * 2.54;
// };

// const width = calculate(wallWidth);
// const height = calculate(wallHeight);

// const dimension = [width, height];
// console.log(dimension);

// function addValues(num1, num2) {
//   return num1 + num2;
// }

// const firstValue = addValues(100, 34);
// const secondValue = addValues(200, 200);

// //function expression

// const add = function addValues(num1, num2) {
//   return num1 + num2;
// };
// const thirdValue = add(10, 10);

// const values = [firstValue, secondValue, thirdValue];
// console.log(values);
// const firstValue = (100, 200);

// const divisionBy = function (num2, num3) {
//   return num2 + num3;
// };

// const allValues = divisionBy(500, 500);
// const values = [firstValue, allValues];
// console.log(values);

// const calculatetotal = function (subtotal, tax) {
//   return subtotal + tax;
// };

// const totalSum = calculatetotal(100, 300);
// console.log(totalSum);

//fuction expression- const-create a variable name function(parameters){
//logic
//}

// const ordertotal = function (order, amount) {
//   return order + amount;
// };

// const order1 = ordertotal(100, 300);
// const order2 = ordertotal(200, 200);
// const order3 = ordertotal(150, 200);
// console.log(order1, order2, order3);

// const calculateresult = function (subtotal,tax){
//     return subtotal * tax;
// }

//Object- (properties of an oblect anything)
// const name of oject = { properties-car,person}-
// const person = {
//   name: "john",
//   lastname: "peters",
//   age: 58,
//   education: false,
//   married: true,
//   siblings: ["anna", "susan", "peter"],
//   greeting: function () {
//     console.log("my name is Nick");
//   },
// };
// //console.log objectName.property
// console.log(person.siblings[2]);
// console.log(person.name);
// person.lastname = "Ayo";
// console.log(person.lastname);
// person.greeting();

//object challenge
// const car = {
//   brand: "Benz mayback",
//   year: "2023",
//   colors: ["Dark red", "Blue", "black."],
//   hybrid: true,
//   electric: function (drive, stop) {
//     console.log(
//       `My car is automatic   ${drive}  and ${stop} by itself isn't that amzing!!!🚕`
//     );
//   },
// };
// console.log(car.colors[0]);
// console.log(car.brand);
// car.electric("drives", "stop");

//conditional statement
// if condition is met

// const value = 3 > 2;
// const value2 = 9 <= 7;

// const num1 = 34;
// const num2 = 20;
// const result = num1 >= num2;
// const newResult = num1 || num2 >= 100;

// if (num1 > num2) {
//   console.log(" I am True and bigger");
// } else if (result) {
//   console.log("we are the same you are not big or smaller");
// } else if (newResult) {
//   console.log("we are the Biggest of all💪");
// } else {
//   console.log("i am False and smaller");
// }

// Not ! operator is a reverse of the condition

// const num1 = 34;
// const num2 = 20;

// const value = 1 > 2;

// if (!value) {
//   console.log("i am Not true");
// } else {
//   console.log("you are not Logged");
// }

//Equality === ==

// const num1 = 34;
// const num2 = "34";

// const value = num1 != num2;
// const value2 = num1 === num2;

// console.log(value, value2);

//logical operators

// (|| - OR), (&&-AND), !

//condition if the name of the user is Bob and if its not  then we reply wrong values//

//  || if one of them is true console.log(message)
//--------------------------

// const myNname = "peter";
// const myAge = 84;

// const newValue = myAge;

// if (myNname === "bob" && myAge === 84) {
//   console.log("hello there user 😀");
// } else {
//   console.log("wrong values");
// }
