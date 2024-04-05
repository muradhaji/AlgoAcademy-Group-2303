let d1 = document.getElementById('div1');

// console.log(d1.offsetParent);
// console.log(d1.offsetLeft);
// console.log(d1.offsetTop);
// console.log(d1.offsetWidth);
// console.log(d1.offsetHeight);

// console.log(d1.clientLeft);
// console.log(d1.clientTop);
// console.log(d1.clientWidth);
// console.log(d1.clientHeight);

// console.log(d1.scrollWidth);
// console.log(d1.scrollHeight);
// console.log(d1.scrollLeft);
// console.log(d1.scrollTop);

// console.log(document.documentElement.scrollTop);

function scrollHappened() {
  let x = document.documentElement.scrollTop;
  let menu = document.getElementById('hormenu');
  if (x >= 100) {
    if (!menu.classList.contains('small')) {
      menu.classList.add('small');
    }
  } else {
    if (menu.classList.contains('small')) {
      menu.classList.remove('small');
    }
  }

  let sections = document.getElementsByTagName('section');

  let currentSection = sections[0];

  for (let i = sections.length - 1; i >= 0; i--) {
    if (x > sections[i].offsetTop) {
      currentSection = sections[i];
      break;
    }
  }

  let links = document.getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
    if (links[i].dataset.name == currentSection.id) {
      links[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', scrollHappened);
// window.addEventListener('contextmenu', scrollHappened);
// window.addEventListener('mousedown', scrollHappened);
// window.addEventListener('mouseup', scrollHappened);
// window.addEventListener('mouse', scrollHappened);
// window.addEventListener('DOMContentLoaded', scrollHappened);

// setInterval(() => {
//   console.log(Math.random());
// }, 1000);
