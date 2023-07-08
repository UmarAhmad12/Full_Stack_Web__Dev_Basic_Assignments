// Q.3 Difference between var & let?

// Ans: var has a global scope where let has block scope. var can access values from anywhere but let can't do this. with var we can re decleare a same variable again but in let we can't re-declear but we re-assign a same variable again.

{
	let a = 20;
	let a = 30; // it's wrong 
}

{
	let a = 20;
	a = 30; // we can do this
}

{
	var a = 20;
	var a = 30;//it's accepted
}

{
	var a = 20;
	a = 30; // it's accepted.
}