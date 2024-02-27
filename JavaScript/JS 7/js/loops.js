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

let n = 27;
let m = -n;

for(; n >= m ; n -= 10) {
	alert(n);
}