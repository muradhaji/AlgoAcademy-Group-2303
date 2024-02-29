// let num = Number(prompt("N: "));
// let sum = 0;

// while(num > 0) {
// 	sum += num--;
// }

// let i = 1;
// while(i <= num) {
// 	sum += i++;
// }

// Terms
// begin, condition, step, body

// console.log(num, sum);

// let i = -1;

// while(i > 0) {
// 	console.log(i);
// 	i--;
// }

// do {
// 	console.log(i);
// 	i--;
// } while(i > 0)

// for(begin ; condition ; step) {
// 	body
// }

// for(let i = 0 ; i < 10 ; i++) {
// 	console.log(i);
// }

// let sum = 0;

// for(let i = 1 ; i < 50 ; i += 2) {
// 	sum += i;
// }

// let i = 1;

// while(i < 50) {
// 	sum += i;
// 	i += 2;
// }

// do {
// 	sum += i;
// 	i += 2;
// } while(i < 50)

// console.log(sum);

// let i = 3, sum = 0;

// for( ; i <= 100 ; ) {
// 	sum += i;
// 	i += 3
// }

// console.log(sum);

// for(let x = 0, y = 0 ; x <= 4 || y > 0 ; x += 2, y -= 2) {
// 	console.log(`X: ${x}, Y: ${y}`);
// }

// let n = 27;
// let m = -n;

// for (; n >= m; n -= 10) {
//   alert(n);
// }

// let i;

// for(i = 0 ; i < 10 ; i++) {
// 	if(i == 1 || i == 2) {
// 		continue;
// 	}
// 	if(i == 4) {
// 		break;
// 	}
// 	console.log(i);
// }

// let i = 0;

// while (i < 10) {
//   if (i == 1 || i == 2) {
// 		i++;
//     continue;
//   }
//   if (i == 4) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// console.log(`I: ${i}`);

// outerLoop: for (let r = 0; r < 5; r++) {
//   innerLoop: for (let c = 0; c < 5; c++) {
//     // if(c == 1 || c == 2 || c== 3) {
//     // 	continue;
//     // }
//     // if(c == 2) {
//     // 	break;
//     // }
//     // if (c == 2) {
//     //   continue outerLoop;
//     // }
//     // if(c == 2) {
//     // 	break outerLoop;
//     // }
//     console.log(`Row: ${r}, Col: ${c}`);
//   }
// }

// firstLoop: while (4 < 5) {
//   secondLoop: while (6 < 7) {
//     thirdLoop: while (8 < 9) {
//       break firstLoop;
//     }
//   }
// }

// for (let i = 0; i < 10; i++) {
// 	// if(i % 2 == 1) {
// 	// 	console.log(i);
// 	// }
// 	if(i % 2 == 0) {
// 		continue;
// 	}
// 	console.log(i);
// }

// let answer = prompt('2 + 2 = ?');

// switch (answer) {
//   case '3':
//   case '5':
//     alert('Wrong answer.');
//     break;
//   case '4':
//     alert('Correct answer.');
//     break;
//   default:
//     alert('Unknown answer.');
//     break;
// }

// if (answer === '3') {
//   alert('It is less than correct answer.');
// } else if (answer === '4') {
//   alert('It is greater than correct answer.');
// } else if (answer === '5') {
//   alert('Correct answer.');
// } else {
//   alert('Unknown answer.');
// }

// let array = [4, 0, -7, 9, 30, -30, 10];

// console.log(array);
// console.log(array[0]);

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// let array = [4, 0, -7, 9, 30, -30, 10];

// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }

// console.log(sum);

// let array = ['a', 'c', 'b', 'dfg'];

// let str = '';

// for (let i = 0; i < array.length; i++) {
//   str += array[i];
// }

// console.log(str);

// let array2d = [
//   [4, 5, 9],
//   [0, -3, 2],
//   [10, 7, 3],
// ];

// console.log(array2d);
// console.log(array2d[2][1]);
// console.log(array2d[0][2]);

// let sum = 0;

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     sum += array2d[i][j];
//   }
// }

// console.log(sum);

// async function logTodos() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const todos = await response.json();

//   let answer = '';

//   let completed = 0;

//   for (let i = 0; i < todos.length; i++) {
//     answer += `<h1>${todos[i].id} ${todos[i].completed == true ? '✅' : '✖'} ${
//       todos[i].title
//     }</h1>`;

//     if (todos[i].completed == true) {
//       completed++;
//     }
//   }

//   document.body.innerHTML += `<h1>Completed: ${completed}, Not Completed ${
//     200 - completed
//   }</h1>`;
//   document.body.innerHTML += answer;
// }

// logTodos();

let num = Number(prompt('Num:'));

let a = num % 10;
num = (num - a) / 10;
let b = num % 10;
num = (num - b) / 10;
let c = num % 10;
num = (num - c) / 10;

alert(a + b + c);

// let sum = 0;

// while (num > 0) {
//   sum += num % 10;
//   num = (num - (num % 10)) / 10;
// }

// alert(sum);
