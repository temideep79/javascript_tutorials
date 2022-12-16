//ARRAY AND FOR LOOP

const names = ["Nick", "Brad", "Kofi", "Sam"];
const lastName = "Allen";
let newArray = [];

// for loop get iterate through the array and combine the last name and assign to the new Array

for (i = 0; i < names.length; i++) {
  //   console.log(names[i]);
  //   newArray.push(names[i]);

  newArray.push(`${names[i]} ${lastName} `);
}

console.log(newArray);
// console.log(names);
