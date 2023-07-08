//  Q.2 Explain hoisting in javascript?


/*
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the
top of their scope before code execution. Remember that JavaScript only hoists declarations, not
initialisation.
*/
// Let's take a simple example of variable hoisting,

console.log(message); //output : undefined
var message = 'The variable Has been hoisted';

// The above code looks like as below to the interpreter,

var message;
console.log(message);
message = 'The variable Has been hoisted';


