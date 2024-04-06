// document.cookie = "name=John";
// document.cookie = "surname=Doe";
// document.cookie = "surname=Doe; max-age=-1";
// document.cookie = `theme=dark; max-age=${60 * 60 * 24 * 30 * 12}`;
// document.cookie = 'theme=light; path=/about';

// console.log(document.cookie);
// console.log(document.cookie.split("; "));
// console.log(document.cookie.split("; ")[0].split("="));
// console.log(document.cookie.split("; ")[0].split("=")[0]);
// console.log(document.cookie.split("; ")[0].split("=")[1]);

function getCookies() {
  let cookieObj = {};
  let cookieArray = document.cookie.split('; ');
  for (let i = 0; i < cookieArray.length; i++) {
    let key = cookieArray[i].split('=')[0];
    let value = cookieArray[i].split('=')[1];
    cookieObj[key] = value;
  }
  return cookieObj;
}

let cookies = getCookies();

if (cookies.theme === 'dark') {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
} else {
  document.body.classList.add('light');
  document.body.classList.remove('dark');
}

function changeTheme() {
  let cookies = getCookies();
  if (cookies.theme === 'dark') {
    document.cookie = `theme=light`;
  } else {
    document.cookie = `theme=dark`;
  }
  location.reload();
}
