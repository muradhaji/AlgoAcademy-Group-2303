let testF1 = () => {
  console.log('F1 worked!');
};

function testF2() {
  console.log('F2 worked!');
}

function testF3() {
  testF1();
  testF2();
}

// let x = document.getElementById('myh');
// x.onclick = testF1;
// x.onclick = testF3;

// x.addEventListener('click', testF1);
// x.addEventListener('click', testF2);
// x.addEventListener('click', testF3);
// x.removeEventListener('click', testF3);

// x.addEventListener('click', () => {
//   console.log('x');
// });
// x.removeEventListener('click', () => {
//   console.log('x');
// });

// window.addEventListener('keydown', (event) => {
//   console.log(event);
//   document.getElementById('myh').innerText += ' ' + event.key;
// });

// window.addEventListener('scroll', (event) => {
//   console.log(event);
// });

// window.addEventListener('click', (event) => {
//   alert(event.target.innerText);
// });

// window.addEventListener('mousemove', (event) => {
//   document.getElementById(
//     'myh'
//   ).innerText = `${event.clientX}, ${event.clientY}`;
// });

// document.getElementById('mydiv').addEventListener('mouseover', (event) => {
//   console.log('Mouse over oldu');
// });
// document.getElementById('mydiv').addEventListener('mouseout', (event) => {
//   console.log('Mouse out oldu');
// });
// document.getElementById('mydiv').addEventListener('mousemove', (event) => {
//   console.log('Mouse move olur');
// });

// window.addEventListener('contextmenu', (event) => {
//   event.preventDefault();
//   document.getElementById(
//     'myh'
//   ).innerText = `${event.clientX}, ${event.clientY}`;
// });

// window.addEventListener('DOMContentLoaded', (event) => {
//   console.log('Page loaded');
// });

// function test(event) {
//   event.preventDefault();
// }

// window.addEventListener('click', (event) => {
//   if (event.clientX <= 100 && event.clientY <= 100) {
//     console.log('first cube');
//   } else if (event.clientX <= 100 && event.clientY <= 200) {
//     console.log('second cube');
//   }
// });

window.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  if (document.getElementById('newrightmenu')) {
    console.log("artiq var")
  } else {
    let newDiv = document.createElement('div');
    newDiv.id = 'newrightmenu';
    newDiv.innerText = 'New right menu';
    newDiv.style.cssText = `
    position: fixed;
    width: 100px;
    height: 200px;
    border-radius: 16px;
    padding: 16px;
    color:white;
    background-color: darkcyan;
    top: ${event.clientY}px;
    left: ${event.clientX}px;
  `;

    document.body.append(newDiv);
  }
});
