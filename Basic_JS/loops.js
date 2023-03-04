// loops - 

// 1. for loop

// 2. for...in loop - (loop through the properties of object)
const person = {fname:'Kingsuk', lname:'Dhar', age:26};

for(let x in person){
  console.log(x); // Outeput : fname, lname, age
}

// 3. for...of loop (ES6) - (loop through the values of an iterable object)
for (let x of person) {
  console.log(x); // Outeput : Kingsuk, Dhar, 26
}

// 4. while loop
// 5. do-while lopp
