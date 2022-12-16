// logical operators

// const myName = "bob";
// const age = 24;
//if name is  bob or age is  23
// || OR- operator-if one of them is true it runs the console.log
// && And -operator  both values need to be true/ You can use the not operator  to allow one value to be true
// if (myName !== "peter" && age === 24) {
//   console.log("Hello there user");
// } else {
//   console.log("wrong values");
// }

//switch

// const dice = 3;

// switch (dice) {
//   case 1:
//     console.log("You got One");
//     break;
//   case 2:
//     console.log("You got two");
//     break;
//   case 3:
//     console.log("You got three");
//     break;

//   default:
//     console.log("you did not roll the dice");
// }

// const dice = 0;

// if (dice === 1) {
//   console.log("You got One");
// }

// if (dice === 2) {
//   console.log("you got two");
// }

// if (dice < 1 || dice > 6) {
//   console.log("you did not roll the dice");
// }
// const dice = 0;
// if (dice === 1) {
//   console.log("You got One");
// } else if (dice === 2) {
//   console.log("you have two");
// }

// if (dice < 1 || dice > 6) {
//   console.log("you did not roll the dice");
// }

// const person1 = {
//   name: "Nick",
//   Age: 24,
//   status: "resident",
//   location: "permanent",
//   Tourist: "unknown",
// };

// const person2 = {
//   name: "Nick",
//   Age: 20,
//   status: "resident",
//   location: "permanent",
//   Tourist: "unknown",
// };

// if (person1.Age === 18 && person2.Age >= 18) {
//   console.log("you  are allowed to vote");
// } else if (person1.status === "resident" && person2.status === "resident") {
//   console.log("you are not allowed in here");
// } else {
//   console.log("We are closed");
// }
// comparing age and status if

//LOOPS

//while loop- contines to run if you dont return the variable with a ---
// const cant be used cos you need to call the variable once again
//

// let amount = 10;

// while (amount > 0) {
//   console.log(`i have ' ${amount}  dollars and I'm going to the mall `);

//   amount--;
// }

// let money = 20;

// do {
//   console.log(`you have ${money} dollars`);
//   money--;
// } while (money > 0); // if this condition is met

//YOUTUBE

//for loop
//i is the variable
// let i;
// for (i = 0; i < 10; i++) {
//   console.log(`and the number is: ${i}`);
// }
// // for let number = 11, if number is greater or equal t0 0
// //  console
// for (let number = 11; number >= 0; number--) {
//   console.log(`and the number is: ${number}`);
// }

//while loop from i = 1 to 5;

// while (i < 10) {
//   text += "The number is " + i;
//   i++;
// }

// for (w = 0; w < 20; w++) console.log(w);

// let n = 0;
// while (n < 3) {
//   n++;
// }
// console.log(n);

// let countdown = 10;

// while (countdown > 3) {
//   console.log(`${countdown}`);

//   countdown--;
// }

// let n = 0;
// let x = 0;
// while (n < 11) {
//   console.log(n);
//   n++;

//   x += n;
// }
// let i=index start at 0
//condition= i < 10;
//i++ is the same as i+=1-iterate the count

// for (let i = 5; i > 0; i--) {
//   console.log("loop" + i);
// }
//increment

//loop through an array of names
// const names = ["john", "nick", "Sally", "king"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

//object loop

// const user = {
//   name: "kolol",
//   lastname: "Alogen",
// };

// for (key in user) console.log(user[key]);

// for (let i = 1; i < 10; i++) {
//   console.log(`${i} dollars`);

//   if (i === 3) break;
// }

//while loop
// let i = 0;
// while (i < 10) {
//   // console.log(i);

//   i++;

//   if (i === 5) continue;
//   console.log(i);
// }

// do loop

// let i = 0;
// do {
//   i++;
//   if (i === 5) continue;
//   console.log(i);
// } while (i < 5);

//for each
// const animals = ["john", "nick", "Sally", "king"];

// animals.forEach((animal) => {
//   console.log(animal);
// });

// if (animals.length === 4 || animals.length === 3) {
//   console.log(`we are in`);
// } else {
//   console.log("we are out");
// }

const person = {
  name: "Nick",
  lastName: "Allen",
  Age: 35,
};

//bracket Notation assign another value

//most conventional method is dot notation

person["name"] = "Jaden";
console.log(person.name);
