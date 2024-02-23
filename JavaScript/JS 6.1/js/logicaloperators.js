// console.log(true || false);
// console.log(false || true);
// console.log(true || true);
// console.log(false || false);

// console.log(0 || 1);
// console.log(4 || 0);
// console.log(null || 0 || 45n);
// console.log(null || 45 || 0);
// console.log(null || undefined || 0 || "" || NaN);
// console.log(null || 0n || "a" || undefined);
// console.log(-Infinity || 5 || "abc" || 9n);

// console.log(5 && 9n && 7);
// console.log(5 && null && undefined && 7);

// let x = 10;

// console.log(x < 20 && x == 13 && x > 5 );

// console.log(!5);
// console.log(!0);
// console.log(!!NaN);
// console.log(!!!"");

// console.log(null ?? "a" ?? undefined ?? Infinity);
// console.log(null ?? undefined ?? Infinity);
// console.log(null ?? undefined);

// let x = prompt("Enter:");
// let y = undefined;
// let z = prompt("Enter:");

// console.log(x ?? y ?? z);

let hour = Number(prompt("Enter hour(0-23)"));
let weekend = confirm("Is weekend?");

console.log(hour);
console.log(weekend);