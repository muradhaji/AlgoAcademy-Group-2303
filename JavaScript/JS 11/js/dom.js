// console.log(document);

// console.log(document.documentElement);

// console.log(document.head);

// console.log(document.body);
// console.log(document.body.previousSibling);
// console.log(document.body.previousElementSibling);

// console.log(document.documentElement.parentNode);
// console.log(document.documentElement.parentElement);
// console.log(document.childNodes);

// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.nodeType);
// console.log(document.body.childNodes[0].nodeType);
// console.log(document.body.childNodes[1].nodeType);
// console.log(document.body.childNodes[2].nodeType);
// console.log(document.body.childNodes[3].nodeType);
// console.log(document.body.childNodes[1].attributes[0].nodeType);

// console.log(document.nodeName);
// console.log(document.nodeValue);
// console.log(document.body.childNodes[0].nodeName);
// console.log(document.body.childNodes[0].nodeValue);
// console.log(document.body.childNodes[1].nodeName);
// console.log(document.body.childNodes[1].tagName);
// console.log(document.body.childNodes[1].nodeValue);
// console.log(document.body.childNodes[2].nodeName);
// console.log(document.body.childNodes[2].nodeValue);
// console.log(document.body.childNodes[3].nodeName);
// console.log(document.body.childNodes[3].nodeValue);
// console.log(document.body.childNodes[1].attributes[0].nodeName);
// console.log(document.body.childNodes[1].attributes[0].nodeValue);

// console.log(document.body.childNodes[1].childNodes[0]);
// console.log(document.body.childNodes[1].attributes);
// console.log(document.body.childNodes[1].attributes[0]);
// console.log(document.body.childNodes[1].attributes['id']);
// console.log(document.body.childNodes[1].attributes.id);
// console.log(document.body.childNodes[1].attributes[1]);
// console.log(document.body.childNodes[1].attributes['class']);
// console.log(document.body.childNodes[1].attributes.class);

// console.log(document.body.childNodes[1].attributes.id.name);
// console.log(document.body.childNodes[1].attributes.id.value);
// console.log(document.body.childNodes[1].attributes.class.name);
// console.log(document.body.childNodes[1].attributes.class.value);

// console.log(document.querySelectorAll('ul')[0]);
// console.log(document.querySelector('ul'));
// console.log(document.getElementById("myul"));
// console.log(document.getElementsByClassName('mylist')[0]);
// console.log(document.getElementsByTagName('ul')[0]);
// console.log(document.getElementsByName('test'));

// console.log(document.getElementById('myul').innerHTML);
// console.log(document.getElementById('myul').outerHTML);
// console.log(document.getElementById('myul').textContent);
// console.log(document.getElementById('myul').innerText);

// document.body.innerHTML += '<h1>Lorem ipsum dolor...</h1>';
// document.body.textContent += '<h1>Lorem ipsum dolor...</h1>';
// document.body.innerText += '<h1>Lorem ipsum dolor...</h1>';

// console.log(document.getElementById('myul').style.backgroundColor);
// document.getElementById('myul').style.backgroundColor = 'cyan';
// console.log(document.getElementById('myul').style.backgroundColor);

function showHide() {
  let myh1 = document.getElementById('head1');
  if (myh1.style.display == '' || myh1.style.display == 'block') {
    myh1.style.display = 'none';
  } else {
    myh1.style.display = 'block';
  }
}
