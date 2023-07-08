//Q.5 What is the difference between let and const in ES6?

//Ans: let and const both has block scope but with let variable can be re-assigned and also can be undefined but can't re-declear but with const keyword variable can't be undefined or re-assign and re-declear.

{
	let b;
	console.log(b) // Undefined
	let a = 20;
	a = 30;        // Re-assigned
	// let a = 40; // Cannot redeclare block-scoped variable 'a'
	console.log(a) // 30;

	// Another example:

	let name; // undefined
	console.log(name);

	name = "Ram";     // re-assigned
	console.log(name); // Ram
}

{
	const a;// undefined(wrong)  //'const' declarations must be initialized.
	const b = 20;
	b = 30; // Can not re-assigned //TypeError: Assignment to constant variable.
	const b = 30; // Cannot redeclare block-scoped variable 'b'.
}

