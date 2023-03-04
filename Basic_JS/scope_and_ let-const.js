// scope : determines the accesssibility (visibility) of variables

// 3 types : 
// 1. block scope
// 2. function scope
// 3. globale scope

// -------------------------------------

// let , const (ES6)
// Earlier before 2015, JS has only Global Scope and Function Scope
// ES6 introduced new JS keywords : let and const
// let, const -> (block scope)

// variables declared inside a { } block cannot be accessed from outsite the block
// --------------------------------
// no block scope
{
  var x = 2;
}
// x can be accessed here 
//-------------------------------------
{
  let x = 2;
}
// x can NOT be accessed here  => reference error


// ---------------------------
// in case of let and const --> 
// Reference error: Cannot access before initialization