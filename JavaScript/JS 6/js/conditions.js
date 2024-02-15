// let num = +prompt("Enter number:");
// if(num < 0) alert("Number is negative");

// let num = +prompt("Enter number:");
// let isNegative = num < 0;
// if(isNegative) {
// 	alert("Number is negative");
// 	alert("Number is less than zero");
// };

// let num = +prompt("Enter number:");
// if(num < 0) {
// 	if(num < -200) {
// 		alert("Number less than -200");
// 	} else {
// 		alert("Number greater than -200");
// 	}
// } else if(num == 0) {
// 	alert("Neither negative nor positive. Zero!");
// } else if(num > 0) {
// 	if(num > 100) {
// 		alert("Number greater than 100");
// 	} else {
// 		alert("Number less than 100");
// 	}
// } else {
// 	alert("You entered wrong format number!")
// };

// let a = 40, b = 20, c = 17;
// let a = 7, b = 7, c = 7;

// if(a >= b & b >= c) {
// 	console.log(a);
// } else if(b >= a & a >= c) {
// 	console.log(b);
// } else if(c >= a & c >= b) {
// 	console.log(c);
// };

// let a = +prompt('A:');
// let b = +prompt('B:');
// let c = +prompt('C:');
// let max, min, mid;

// if(a > b) {
// 	if(a > c) {
// 		max = a;
// 	} else {
// 		max = c;
// 	}
// } else {
// 	if(b > c) {
// 		max = b;
// 	} else {
// 		max = c;
// 	}
// }

// if(a < b) {
// 	if(a < c) {
// 		min = a;
// 	} else {
// 		min = c;
// 	}
// } else {
// 	if(b < c) {
// 		min = b;
// 	} else {
// 		min = c;
// 	}
// }

// mid = (a + b + c) - (max + min);

// alert(`Max: ${max}`);
// alert(`Mid: ${mid}`);
// alert(`Min: ${min}`);

// Conditions with question mark: ?:

// let age = +prompt("Enter your age:");
// let accessAllowed;

// if(age >= 18) {
// 	accessAllowed = true;
// } else {
// 	accessAllowed = false;
// }

// accessAllowed = (age >= 18) ? true : false;

// if(accessAllowed) {
// 	alert("You are allowed.");
// } else {
// 	alert("You are not allowed!");
// }

// accessAllowed ? alert("You are allowed.") : alert("You are not allowed!");

// alert(accessAllowed ? "You are allowed." : "You are not allowed!");

let num = +prompt("Enter number:");

// if(num < 0) {
// 	alert("Negative");
// } else if (num > 0) {
// 	alert("Positive");
// } else {
// 	alert("Zero");
// }

// (num < 0) ? alert("Negative") : (num > 0) ? alert("Positive"): alert("Zero");

alert((num < 0) ? "Negative" : (num > 0) ? "Positive" : "Zero")