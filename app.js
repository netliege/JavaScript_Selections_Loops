console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//While Loop:
/*let num = 1;
while (num <= 100){
  if (num % 2 == 1){
  console.log(num);
  }
num++;
}
*/
//Do While Loop:
/*let num = 1;
do {
  if (num % 2 == 1){
    console.log(num);
  }
  num++
} while (num <= 100);
*/

// For Loop:

for (let num = 1; num <= 100; num++) {
  if (num % 2 == 1) {
    console.log(num);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

//FIZZBUZZ
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && 5 == 0) {
    console.log(`${i} FIZZBUZZ`);
  } else if (i % 5 == 0) {
    console.log(`${i} BUZZ`);
  } else if (i % 3 == 0) {
    console.log(`${i} FIZZ`);
  } else {
    console.log(i);
  }
}
