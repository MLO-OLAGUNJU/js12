/* // Loops
let myNumber = 0;
while (myNumber <= 50) {
  console.log(myNumber);
  myNumber++;
  // myNumber += 2;
}

// don't create an endless loop */

/* //Do while loops
let myNumber = 0;

do {
  myNumber += 2;
  console.log(myNumber);
} while (myNumber < 50);
// don't create an endless loop */

/* //for loops
for (let manny = 0; manny <= 10; manny++) {
  console.log(manny);
} */
/* 
let myName = "Olagunju";
for (let i = 0; i < myName.length; i++) {
  console.log(myName.charAt(i));
}
 */

let myname = "Olagunju";
let counter = 0;
let myLetter;
while (counter <= 3) {
  myLetter = myname[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "n") break;
  counter++;
}
console.log(counter);
