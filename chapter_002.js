// Eloquent Javascript exercises
// Chapter 2
// 2018-04-14

// Looping a triangle (while version)

var hashtag  = "#"

while (hashtag.length<8) {
  console.log(hashtag);
  hashtag = hashtag + "#"
}

console.log(hashtag);

// Looping a triangle (for version)

for (let hashtag  = "#"; hashtag.length<8; hashtag+="#" ) {
  console.log(hashtag);
}


// FizzBuzz

for (let number = 1; number<=100; number++) {

  if (number % 3 == 0) {
    console.log("Fizz");
  }
  else if (((number % 3)!=0) && ((number % 5)===0)) {
    console.log("Buzz");
    }
  else {
    console.log(number);
  }
}

// FizzBuzz (proposed solution)

for (let n = 1; n<=100; n++) {
  let output = "";
  if (n % 3 == 0) output+="Fizz";
  if (n % 5 == 0) output+="Buzz";
  console.log(output || n); // The result is false if the argument is the empty
                            // String (its length is zero); otherwise the result
                            // is true
}

//Chess Board

var size = 4;
var output = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
     output +="#"
    }
    else {
      output += " "
     }
   }
   output += "\n"
 }

 console.log(output);
