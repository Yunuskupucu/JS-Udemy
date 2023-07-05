'use strict';
//                                  --------LOOPS--------
//  1) while ve do while kullanarak 0 dan 10'a kadar giden bir döngü kurun.
let a = 0;
while (a <= 10) {
  console.log(a);
  a++;
}

do {
  console.log(a);
  a++;
} while (a <= 10);

// 2) while ve do while kullanarak 10 dan 0'a kadar giden bir döngü kurun.
let b = 10;
while (b >= 0) {
  console.log(b);
  b--;
}

do {
  console.log(b);
  b--;
} while (b >= 0);

// 3) 0'dan n' e kadar giden bir for döngüsü kurun.
let n = prompt('n sayısını girin:');

for (let i = 0; i <= n; i++) {
  console.log(i);
}

// 4) Console.log() kullanarak aşağıdaki çıktıyı almayı deneyin.
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i = 0; i < 7; i++) {
  console.log('#'.repeat(i + 1));
}

// 5) Aşağıdaki çıktıyı almak için bir döngü kurun:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// 6) Aşağıdaki çıktıyı almak için bir döngü kurun:
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

console.log('i', '  ', 'i^2', '  ', 'i^3');
for (let i = 0; i <= 10; i++) {
  console.log(`${i}  ${i * i}  ${i * i * i}`);
}

// 7) 100'e kadar olan çift sayıları bir döngü yardımı ile ekrana yazdırın.
let i = 0;
while (i <= 100) {
  i++;
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 8) 100'e kadar olan tek sayıları bir döngü yardımı ile ekrana yazdırın.
for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// 9) 0 ile 100 arasındaki tüm sayıların toplamını ekrana yazıdırn
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// 10) 0 ile 100 arasındaki tek ve çift sayıların toplamını bulun
let tt = 0;
let ct = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    ct += i;
  } else {
    tt += i;
  }
}
console.log('Çift Sayıların Toplamı:', ct);
console.log('Tek Sayıların Toplamı:', tt);
