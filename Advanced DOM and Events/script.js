// Seleceting Elemenets
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
//.insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We used cookied for improved functionality and analytics.';
console.log(message);
