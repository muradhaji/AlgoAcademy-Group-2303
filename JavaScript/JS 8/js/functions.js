// function testFunc() {
//   console.log('a');
//   console.log('b');
//   console.log('c');
// }

// testFunc;
// testFunc();

// console.log(Math.floor(Math.PI));
// console.log(Math.round(3.5));
// console.log(Math.ceil(3.3));

// function sayHi(name = 'Stranger') {
//   alert(`Hello ${name}!`);
// }

// sayHi();
// sayHi('Mike');
// sayHi('John');
// sayHi('How are You');
// sayHi(undefined);
// sayHi(null);
// sayHi(NaN);

// let result;

// function showMessage(from = 'Stranger', message = '...') {
//   // if (from === undefined) {
//   //   from = 'Stranger';
//   // }

//   // from = (from === undefined) ? 'Stranger' : from;

//   // from = from ?? 'Stranger';

//   // from = from || 'Stranger';

//   let result = `${from} says: ${message}`;
//   alert(result);
// }

// // showMessage('John', 'Hello Mike');
// // showMessage('Mike', 'Hi John!');
// showMessage(undefined, 'Hello');
// console.log(result);

// showMessage('Elliot');
// console.log(result);

// function sayHi(name) {
//   alert('Hello ' + name);
//   // return 'Hi';
//   // return 5;
//   // return false;
//   // return ;
//   return 'Thisis long sentence Thisis long sentence Thisis long sentence Thisis long sentence';
// }

// console.log(sayHi('John'));

// function sum(a, b) {
//   // let result = a + b;
//   // alert(result);
//   // return result;
//   return a + b;
// }

// console.log(Math.pow(3, 2));

// myPow(5, 3) -> 125
// myRemainder(37, 8) -> 5
// myRoot(27, 3) -> 3

// checkAge(17) -> false
// checkAge(18) -> true

// showMessage(true) -> "Allowed"
// showMessage(false) -> "Not Allowed"

// function checkAge(age) {
//   // if (age <= 17) {
//   //   return false;
//   // } else {
//   //   return true;
//   // }

//   return age <= 17 ? false : true;
// }

// console.log(checkAge(18));

// function showMessage(x) {
//   if (x == true) {
//     alert('Allowed');
//   } else {
//     alert('Not Allowed');
//   }
// }

// showMessage(checkAge(17));
// showMessage(checkAge(18));

// 0-89 - acute
// 90 - right
// 91-179 - obtuse
// 180 - straight
// 181-359 - reflex
// 360 - full
// Example:
// getAngleType(45, 25) -> "acute"
// getAngleType(37, 53) -> "right"

// Switch
// acute - iti
// right - düz
// obtuse - kor
// straight - açıq
// reflex - refleks
// full - tam
// Example
// getMessage(getAngleType(45, 25)) -> "iti"
// getMessage(getAngleType(45, 25)) -> "düz"