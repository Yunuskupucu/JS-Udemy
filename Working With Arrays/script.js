'use strict';

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2)); // negatif indiste dizinin sonundan sayar
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // indis verilmezse tüm dizi
console.log([...arr]);

// Splice method --> orijinal diziyi değiştirir, seçilen kısım dışındakiler kalır
//console.log(arr.splice(2));
arr.splice(-1); // Dizinin son elemanını siler
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse --> orijinal diziyi değiştirir
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f '];
console.log(arr2.reverse());
console.log(arr2);

// Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join(' - '));

/* const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0)); */

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Yunus'.at(0));
console.log('Yunus'.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
console.log('----- FOR EACH -----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
console.log(movements);

//accumulator --> Snowball
/* const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance); */

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// second way
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);
