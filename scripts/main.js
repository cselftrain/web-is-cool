const myImage = document.querySelector('img');

myImage.onclick = function() {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === './images/web-is-cool.png') {
    myImage.setAttribute('src', './images/coding-is-cool.png');
    myImage.setAttribute('alt', 'A hand-drawn text says coding is cool')
  } else {
    myImage.setAttribute('src', './images/web-is-cool.png');
    myImage.setAttribute('alt', 'A hand-drawn text says web is cool')
  }
}

const myHeading = document.querySelector('h1');
const myButton = document.querySelector('button');

function setUserName() {
  let userName = prompt('Please enter your name.');
  if (!userName) {
    setUserName();
  } else {
    localStorage.setItem('name', userName);
    myHeading.textContent = `Web is cool, ${userName}`;
  }
}

myButton.addEventListener('click', setUserName);
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let userName = localStorage.getItem('name');
  myHeading.textContent = `Web is cool, ${userName}`;
}