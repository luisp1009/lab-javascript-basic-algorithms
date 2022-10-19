// Iteration 1: Names and Input
let hacker1 = "Luis";
console.log(`The drivers name is ${hacker1}`);


let hacker2 = "Marco";
console.log(`The navigator name is ${hacker2}`);
//
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name it has ${hacker1.length} characters`
    );
  } else if (hacker1.length < hacker2.length) {
    console.log(
      `The navigator has the longest name it has
        ${hacker2.length}
        characters`
    );
  } else {
    console.log(
      `Wow you both have equally long names, ${hacker1.length}, characters!`
    );
  }


// Iteration 3: Loops

let output = "";
for (let i = 0; i < hacker1.length; i++) {
  output += hacker1[i].toUpperCase() + " ";
}
console.log(output);

let reverseName = ""
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseName = reverseName + hacker1[i];
}
console.log(reverseName);


if (hacker1.localeCompare(hacker2) === -1)
  console.log("The driver's name goes first");
else if (hacker1.localeCompare(hacker2) === 1)
  console.log("Yo, the navigator goes first definitely.");
else console.log("What?! You both got the same name?");



// Bonus 1 

let paragraph1 = `Nullam  et aliquet eleifend sapien, eu iaculis nisi tincidunt a. Etiam fringilla nibh eu eros elementum venenatis in eget enim. Suspendisse porttitor tellus et  diam, a facilisis magna molestie at. Duis pharetra nibh non ipsum molestie, non sodales quam bibendum. Sed dignissim suscipit pulvinar. In ac interdum magna. Vivamus suscipit nec risus et id faucibus. Aliquam vel viverra mi.`

let splitparagraph1 = paragraph1.split(" ");
let result = 0

for (let i = 0; i <= splitparagraph1.length; i++){
if (splitparagraph1[i] == 'et'){
  result++
}
}

console.log(result);



//Bonus 2




	
