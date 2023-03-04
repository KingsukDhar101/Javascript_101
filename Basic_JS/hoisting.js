// Hoisting: variable can be used before it has been declared

// --> program
x = 5; // assign 5 to x
console.log(x); // 5
var x; // declare x

// --> get converted into
var x; // declare x
x = 5; // assign 5 to x
console.log(x); // 5

// -----------------------

// Edge case : only declarations are hoisted -- initiations are not hoisted

var x = 5; // initialize x
console.log(x + " " + y); // Output : 5 undefined
var y = 7; //initialize y

// --> get converted into
var x = 5; // initialize x
var y; // declare y
console.log(x + " " + y); // Output : 5 undefined
var y = 7; //initialize y

(function(){
  var x = 5;
  console.log(x + " " + y);
  var y = 7;
})();


// ----- (please see let-const)
// in case of let and const --> 
// Reference error: Cannot access before initialization

