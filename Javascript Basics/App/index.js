// //
// let aCentury;
// const birthYear = 1987;

// if (birthYear <= 2000) {
//   //then
//   aCentury = 20;
//   console.log(`you were born in the ${aCentury}st century`);
// } else {
//   aCentury = 21;
//   console.log(`you were born in the ${aCentury}st century`);
// }

// const massmark = 78;
// const heightmark = 1.69;
// const massJohn = 95;
// const heightJohn = 1.98;

// const BMIMark = (massmark / heightmark) * 2;
// const BMIJohn = (massJohn / heightJohn) * 2;
// // console.log(BMIJohn, BMIMark);

// if (BMIMark >= BMIJohn) {
//   console.log(`Mark's bmi ${BMIMark}
//      is lesser than, ${BMIJohn}`);
// } else {
//   console.log(`John's Bmi(${BMIJohn}) is much hiher than ${BMIMark})`);
// }

// const inputYear = "2002";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) - 18);
// console.log(23 + 10 ** "2");
// console.log("23" / "3");

//Type coersion
//string + number =
// let n = "4" + 1;
// n = n - 1;
// console.log(n);

// let x = 2 + "2";
// x = x - 5;
// console.log(x);

// 5 falsy values= 0 undefined null NaN
// console.log(Boolean(7));
// console.log(Boolean(undefined));
// console.log(Boolean("Nick"));
// console.log(Boolean(7));

// const money = 0;
// if (money) {
//   console.log(`Don't spend it all.`);
// } else {
//   console.log("get a job");
// }

// let height = "0";
// if (height) {
//   console.log("height is defined");
// } else {
//   console.log("height is not fully defined ");
// }

//Equality operators

// strict operator ===

// const age = "18";
// if (age === 18) {
//   console.log("You are free to register 🤣");
// } else {
//   console.log("you cant  reister😜");
// }

// const favourite = prompt("what is your favourite number");
// console.log(typeof favourite);
// if (favourite) {
//   console.log(favourite);
// }

const favourite = Number(prompt("what is your favourite number"));
console.log(typeof favourite);
if (favourite) {
  console.log(typeof favourite);
}

//strict equality compares if they are the same value
if (favourite === 23) {
  // 1st condition
  console.log("cool! 23 is my favourite number 🤣");
} else if (favourite === 7) {
  //2nd condition if the first condition needs to be changed.
  console.log("7 is also my lucky number💋");
}
// isnot operator !== if its not
if (favourite !== 23) {
  console.log("Sorry you lost!!!😜");
} else if (favourite == 50) {
  alert("YOU HAVE WON");
}
//boolean logic
