// let myMath = {
//   PI: 3.14,
//   E: 2.7,
//   pow: function (x, y) {
//     return x ** y;
//   },
//   circle: function (r) {
//     return 2 * this.PI * r;
//   },
//   root: function (x, y) {
//     return Math.round(this.pow(x, 1 / y));
//   },
// };

// console.log(myMath.PI);
// console.log(myMath.pow(2, 3));
// console.log(myMath.circle(2));
// console.log(myMath.root(27, 3));
// console.log(myMath.root(16, 4));
// console.log(myMath.root(125, 3));

// let num = 1234;

// console.log(num.toString());
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(16));
// console.log(num.toString(36));
// console.log(255..toString(16));
// console.log(255.127.toString(16));

// console.log(Math.floor(3.1));
// console.log(Math.floor(-3.1));
// console.log(Math.ceil(3.1));
// console.log(Math.ceil(-3.1));
// console.log(Math.round(3.4));
// console.log(Math.round(3.5));
// console.log(Math.round(-3.4));
// console.log(Math.round(-3.5));

// let num = 124.12745;
//let num = 124;

// console.log(num.toFixed(3))
// console.log(num.toFixed(2))
// console.log(num.toFixed(1))
// console.log(num.toFixed(100))

// console.log(1.4e5);
// console.log(1.4 * 10 ** 5);

// console.log(140000e-5);
// console.log(140000 * 10 ** -5);

// let x = 'str' / 2;

// console.log(x == null);
// console.log(x == undefined);
// console.log(x == NaN);
// console.log(NaN == NaN);
// console.log(isNaN(x));

// console.log(isFinite(1 / 0));
// console.log(isFinite(-1 / 0));
// console.log(isFinite('str'));
// console.log(isFinite('48' / 2));
// console.log(isFinite(7));

// console.log(Number('100px'));
// console.log(parseInt('100px'));
// console.log(parseInt('100.5'));
// console.log(parseInt('00075'));
// console.log(parseInt('0.75'));
// console.log(parseInt('ff'));
// console.log(parseInt('ff', 16));

// console.log(parseFloat('0.75'));
// console.log(parseFloat('0.5px'));
// console.log(parseFloat('7.6em'));

// let x = 255;
// let y = x.toString(16);
// let z = parseInt(y, 16);

/*
0...1
1 - 6
1 + yuvarlaq(0.0123 .. 5.123123)
*/

// console.log(1 + Math.floor(Math.random() * 6));
// console.log(1 + Math.floor(Math.random() * 6));

// console.log(Math.min(4, 9, 0, -3, 5, 2));
// console.log(Math.max(4, 9, 0, -3, 5, 2));

/*
Task
Funksiyaya göndərilən siyahının uzunluğundan asılı olmayaraq geriyə bir istifadəçi adı seçilib qaytarılır.

let users = [
  'Maria',
  'Elizabet',
  'John',
  'Mike',
];

let users2 = [
  'Sara',
  'Daniel',
  'Lucy',
  'Rami',
  'Edward',
  'Smith',
  'Lucas',
  'Erik',
  'Emma',
]

function selectRandomUser(arr) {

}

console.log(selectRandomUser(users));
console.log(selectRandomUser(users2));
*/

// let arr1 = [1, 3, 5, 7, 9];
// let arr2 = [2, 4, 6, 8, 10];
// let arr3 = [];

// for (let i = 0; i < arr1.length; i++) {
//   arr3[i] = arr1[i] + arr2[i];
// }

// console.log(arr3);

// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);
// console.log(arr1[4]);

// for (let i = 0; i < 5; i++) {
//   console.log(arr1[i]);
// }

// for (let i = 4; i >= 0; i--) {
//   console.log(arr1[i]);
// }

// let arr = [5, 1, 3, -7, 0, 9];

// let min = Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log(min);

// let str = 'hel lo';
// let str2 = '';
// // let arr = ["asd", "qwe", "zxc"];

// for (let i = 0; i < str.length; i++) {
//   str2 += str[i];
// }

// console.log(str);
// console.log(str2);

let str = 'uyRyfvHbvcGfs';
console.log(str);

// console.log(str[0]);
// console.log(str.charAt(0));

// console.log(str[str.length - 1]);
// console.log(str.charAt(str.length - 1));

// console.log(str.at(0));
// console.log(str.at(-1));

// TASK
// console.log(str.charCodeAt(0));
// console.log(String.fromCharCode(113));

// console.log(str.endsWith('zxc'));
// console.log(str.endsWith('fxc'));

// console.log(str.startsWith('qwe'));
// console.log(str.startsWith('qse'));

// console.log(str.includes('yas'));
// console.log(str.includes('say'));
// console.log(str.includes(' '));

// console.log(str.concat("123", "987"));
// console.log(str.concat(['123', '987', 'lkj']));

// console.log(str.indexOf('yas'));
// console.log(str.indexOf('yas', 8));
// console.log(str.lastIndexOf('yas'));

// console.log(str.replace('y', '.'));
// console.log(str.replaceAll('yas', '///'));

// console.log(str.repeat(3));

// console.log(str.slice(3, 9));

// console.log(str.split('v'));

// let arr = str.split('v');

// let newstr = arr.join('');

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// str.charCodeAt(0); eded
// String.fromCharCode(45); simvol

function tolowercase(str) {}

console.log(tolowercase('SageaFSDasdDASf'));

/*
1 1 2 3 5 8 13 21 34 55 89 144 ...

n = 50
1 1 2 3 5 8 13 21 34

n = 13
1 1 2 3 5 8 13

n = 100
1 1 2 3 5 8 13 21 34 55 89 
*/

/*
SaG

0 - S
65 <= S <= 90
83 + 32 = 115 (s)

1 - a
65 <= a <= 90

2- G
65 <= S <= 90
71 + 32 = 103 (g)

*/
