// let h = document.getElementById('myh');

// x.setAttribute('class', h.getAttribute('class') + ' dark');
// x.setAttribute('class', h.getAttribute('class').concat(' dark'));
// x.setAttribute('class', h.getAttribute('class').replace('second', 'dark'));
// x.setAttribute('class', h.getAttribute('class').replace('second', ''));

// console.log(h.classList);
// console.log(h.classList.length);
// console.log(h.classList.value);

// console.log(h.classList.contains('third'));
// console.log(h.classList.contains('fifth'));

// h.classList.add('dark');
// h.classList.remove('first');
// h.classList.replace('third', 'first');
// h.classList.toggle('qwe');
// h.classList.toggle('qwe');

// function changeTheme() {
//   // document.body.classList.toggle('dark');
//   document.getElementById('mydiv').classList.toggle('hidden');
// }

// let d = document.getElementById('mydiv');

// console.log(d.style.backgroundColor);
// d.style.backgroundColor = 'red';

// console.log(getComputedStyle(d).backgroundColor);
// console.log(getComputedStyle(d).color);
// getComputedStyle(d).backgroundColor = 'red';

// d.style.setProperty('background-color', 'red');
// d.style.setProperty('color', 'white');
// console.log(d.style.getPropertyValue('background-color'));
// d.style.removeProperty('background-color');

function f1() {
  let li = document.getElementById('li1');
  let ul = document.getElementById('ul2');
  ul.append(li);
}
function f2() {
  let li = document.getElementById('li2').cloneNode(true);
  let ul = document.getElementById('ul2');
  ul.append(li);
}
