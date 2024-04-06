// window.sessionStorage
// window.localStorage
// sessionStorage.setItem('theme', 'dark');
// sessionStorage.setItem('name', 'john');
// sessionStorage.removeItem('name');
// console.log(sessionStorage.getItem('theme'));
// console.log(sessionStorage.length);
// console.log(sessionStorage.key(0));
// console.log(sessionStorage.key(1));

function changeTheme() {
  let currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  location.reload();
}

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
} else {
  document.body.classList.add('light');
  document.body.classList.remove('dark');
}
