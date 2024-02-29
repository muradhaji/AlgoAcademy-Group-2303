let money = Number(prompt('Enter the amount:'));

let twoHundred = 0;
let hundred = 0;
let fifty = 0;
let twenty = 0;
let ten = 0;
let five = 0;
let one = 0;

while (money > 0) {
  if (money >= 200) {
    twoHundred++;
    money -= 200;
  } else if (money >= 100) {
    hundred++;
    money -= 100;
  } else if (money >= 50) {
    fifty++;
    money -= 50;
  } else if (money >= 20) {
    twenty++;
    money -= 20;
  } else if (money >= 10) {
    ten++;
    money -= 10;
  } else if (money >= 5) {
    five++;
    money -= 5;
  } else if (money >= 1) {
    one++;
    money -= 1;
  }
}

let str = '';

if (twoHundred > 0) {
  str += `${twoHundred}x200 `;
}
if (hundred > 0) {
  str += `${hundred}x100 `;
}
if (fifty > 0) {
  str += `${fifty}x50 `;
}
if (twenty > 0) {
  str += `${twenty}x20 `;
}
if (ten > 0) {
  str += `${ten}x10 `;
}
if (five > 0) {
  str += `${five}x5 `;
}
if (one > 0) {
  str += `${one}x1 `;
}

console.log(str);
