// let x = document.getElementById('myId');

// console.log(x.nodeName);
// console.log(x.nodeType);

// console.log(x.id);
// console.log(x['id']);
// console.log(x.title);
// console.log(x['title']);
// console.log(x.class);
// console.log(x['class']);
// console.log(x['my-custom-prop']);

// console.log(x.hasAttribute('id'));
// console.log(x.hasAttribute('class'));
// console.log(x.hasAttribute('my-custom-prop'));
// console.log(x.hasAttribute('href'));

// console.log(x.getAttribute('id'));
// console.log(x.getAttribute('class'));
// console.log(x.getAttribute('my-custom-prop'));
// console.log(x.getAttribute('href'));

// x.setAttribute('lang', 'az');
// x.setAttribute('title', 'title changed');
// x.removeAttribute('class');

// console.log(x.getAttribute('class'));

// x.title = 'Title changed again';

// console.log(x.getAttribute('data-name'));
// console.log(x.getAttribute('data-last-name'));
// console.log(x.getAttribute('data-age'));
// console.log(x.setAttribute('data-age', '27'));

// console.log(x.dataset);
// console.log(x.dataset.name);
// console.log(x.dataset.lastName);
// console.log(x.dataset.age);

// x.dataset.age = 27;

// x.setAttribute('data-is-married', 'true');
// x.dataset.isMarried = true;

// function testClick(a) {
//   if (a.dataset.buttonFunction == 'Add') {
//     console.log('1');
//   } else if (a.dataset.buttonFunction == 'Delete') {
//     console.log('2');
//   } else if (a.dataset.buttonFunction == 'Edit') {
//     console.log('3');
//   }
// }

// console.log(x.attributes);
// console.log(x.attributes[1]);
// console.log(x.attributes[1].name);
// console.log(x.attributes[1].value);
// console.log(x.attributes[1].nodeName);
// console.log(x.attributes[1].nodeType);

// let myh1 = document.createElement('h1');
// myh1.innerText = 'Test Heading';

// let textNod = document.createTextNode('Test Heading');
// myh1.append(textNod);

// document.body.append(myh1);
// document.body.prepend(myh1);
// document.body.before(myh1);
// document.body.after(myh1);
// document.body.replaceWith(myh1)

// myh1.remove();
// let y = document.body;
// y.innerHTML += '<p>Test Paragraph</p>';

// document.body.append('<p>Test Paragraph</p>');

// document.body.insertAdjacentHTML('beforebegin', '<p>Test Paragraph</p>');
// document.body.insertAdjacentHTML('afterbegin', '<p>Test Paragraph</p>');
// document.body.insertAdjacentHTML('beforeend', '<p>Test Paragraph</p>');
// document.body.insertAdjacentHTML('afterend', '<p>Test Paragraph</p>');

// let x = document.getElementById('myh2');
// let div1 = document.getElementById('div1');
// let div2 = document.getElementById('mydiv2');

// // let x2 = x.cloneNode();
// let x2 = x.cloneNode(true);

// div2.append(x2);
// // div1.append(x);

// let div3 = document.getElementById('mydiv3');

// let fragment = new DocumentFragment();

// for (let i = 7; i <= 10; i++) {
//   // div3.append(`<h1>Heading ${i}</h1>`);
//   // div3.innerHTML += `<h1>Heading ${i}</h1>`;
//   let x = document.createElement('h1');
//   x.innerText = `Heading ${i}`;
//   fragment.append(x);
// }

// fragment.append(document.getElementById('myh1'));
// fragment.append(document.getElementById('myh3'));

// div3.append(fragment);
