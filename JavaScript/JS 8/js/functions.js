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

// function reverse(num) {
//   num = String(num);
//   let answer = '';
//   for (i = num.length - 1; i >= 0; i--) {
//     answer += num[i];
//   }
//   return Number(answer);
// }

// console.log(reverse(12345));
// console.log(reverse(1000));
// console.log(reverse(1001));

// function reverse(num) {
//   let answer = 0;

//   while (num > 0) {
//     answer = answer * 10 + (num % 10);
//     num = (num - (num % 10)) / 10;
//   }

//   return answer;
// }

// console.log(reverse(12345));
// console.log(reverse(1000));
// console.log(reverse(1001));

// -------------
// Functions ...
// -------------

// console.log(sum(8, 5)); // works
// Function declaration
// function sum(a = 0, b = 0) {
//   let result = a + b;
//   return result;
// }

// console.log(sum(8, 5)); // not works
// Expression function
// let sum = function (a = 0, b = 0) {
//   let result = a + b;
//   return result;
// };

// console.log(sum(8, 5)); // not works
// Arrow function
// let sum = (a = 0, b = 0) => {
//   let result = a + b;
//   return result;
// };

// let sum = (a = 0, b = 0) => {
//   return a + b;
// };

// let double = a => a * 2;
// console.log(double(7));

// let getHello = (name = 'Stranger') => `Hello ${name}`;
// console.log(getHello());
// console.log(getHello('John'));

// console.log(sum(8, 5));
// console.log(sum(8));
// console.log(sum(8, undefined));
// console.log(sum(undefined, 5));

// function showOkMessage() {
//   console.log(`You have selected OK`);
// }

// let func2 = showOkMessage;

// console.log(showOkMessage);
// console.log(func2);

// func2()

// let showOkMessage = function () {
//   console.log(`You have selected OK`);
// };

// let showCancelMessage = function () {
//   console.log(`You have selected Cancel`);
// };

function ask(question, onOk, onCancel) {
  let answer = confirm(question);
  answer ? onOk(1) : onCancel(0);
}

// ask('Are you married?', showOkMessage, showCancelMessage);

// ask(
//   'Are you student?',
//   function () {
//     console.log(`God bless you!`);
//   },
//   function () {
//     console.log(`Work hard!`);
//   }
// );

// ask(
//   'Is yougurt black?',
//   (x) => {
//     console.log(x);
//   },
//   (x) => {
//     console.log(x);
//   }
// );

// -------------
// Tasks
// -------------

// Task 1
// console.log(reverse('asdqwe'));

// Task 2
// console.log(isPalindrome("anna")) // true
// console.log(isPalindrome("angel")) // false
// console.log(isPalindrome("level")) // true
