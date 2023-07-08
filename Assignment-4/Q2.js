// Q.2 Explain Temporal Dead Zone?

/*
Ans: Temporal dead zone happens when we decleare variable with let and const keywords and but variable remains undefined then if we try to access these variables it will cause to the Temporal dead zone.

The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with
the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const
variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the
temporal dead zone.

*/

// Let's see this behavior with an example,
function somemethod() {
    console.log(counter1); // undefined
    console.log(counter2); // ReferenceError
    var counter1 = 1;
    let counter2 = 2;
    }