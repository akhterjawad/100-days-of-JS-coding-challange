//* Programming Question: Hash Tag Generator //*

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.

//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.

//? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.
let h2 = document.querySelector('h2')
let ArrayWords;
function generateHash(string) {
    if (string.length>280 || string.trim().length===0) {
        return false
    }
      ArrayWords =string.split(" ")
     
      ArrayWords = ArrayWords.map((CurrentW)=>CurrentW.replace(CurrentW[0],CurrentW[0].toUpperCase()));

   return ArrayWords = `#${ArrayWords.join('')}`
}
let main =prompt('.')
generateHash(`${main}`);
// o/p = "#MyNameIs Thapa Technical"
h2.innerHTML= ArrayWords