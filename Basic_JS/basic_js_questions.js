// Some useful basic topics and functions

// 1. String templates

function getFullName(fname, lname){
  // return fname + ' ' + lname;
  return `${fname} ${lname}`;
}
getFullName("Kingsuk", "Dhar");

// 2. functions

// -> typeof
// -> isArray
// -> isNaN
isNaN('abc');       // true
isNaN(122);         // false
isNaN('122');       // false


// 3. ternary operation

var canvote;
canvote = votersAge >= 18 ? "Can vote" : "Can't vote";

// 4. == vs === 
// (check only value) - (checks value and data types)
