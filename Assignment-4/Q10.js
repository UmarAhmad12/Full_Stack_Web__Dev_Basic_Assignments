// Q.10 What is the purpose of the spread operator (...) in ES6?

// Ans: 

// this can be use for array spreading, object spreading or function arguments where multiple elements are expected.

let arr = [1,2,3];
let arr2 = [...arr]; // array speading

console.log(arr2);



let obj = {name:'Umar Ahmad', age: 24};
let obj2 = {...obj}; // object spreading

console.log(obj2)



function sum(a,b,c,d){
	return a+b+c+d;
}

let arr3 = [1,2,3,4];
console.log(sum(...arr3))