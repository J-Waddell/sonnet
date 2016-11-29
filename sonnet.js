// Paste the code below into your HTML file.
var theSonnet = document.getElementById("sonnet").innerHTML
console.log(theSonnet);

// Take the contents of the sonnet div and place it in a variable
// Find and output the starting position of the word "orphans"

console.log(theSonnet.indexOf("orphans"))
// Output the number of characters in the sonnet

var numOfCharacters = theSonnet.length 
console.log("numOfCharacters", numOfCharacters)
// Replace the first occurance of the string "winter" with "yuletide"

var newSonnet = theSonnet.replace("winter", "yuletide")
console.log("new sonnet", newSonnet);
// Replace all occurances of the string "the" with "a large"

var theSonnet = newSonnet.split(" the ") .join(" a large ")
var theSonnet = newSonnet.split("The ") .join("A large ")
console.log(newSonnet);
// Set the content of the sonnet div with the new string

document.getElementById("sonnet").innerHTML = newSonnet;
