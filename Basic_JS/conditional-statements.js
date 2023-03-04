// Conditional statements : if-else, switch, ternary

// 1. if-else
// if(personAge >= 18){
//   console.log("Voter can vote for government.");
// }else{
// console.log("Voter can't vote for government.")
// }

// 2. switch case

switch (new Date().getDay()) {
  case 0:
    text = "Today is Sunday";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  default:
    text = "Looking forward to the weekend";
    break;
}
