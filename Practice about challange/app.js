//* Programming Question: Hash Tag Generator //*

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.

//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.

//? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.
let h1 = document.querySelector('h1')
let array;
let generateHash = (string) => {
    if (string.length >= 280 || string.trim().length === 0) {
        return false
    }
    array = string.split(' ')
     array = array.map(currentw => currentw
        [0].toUpperCase()+currentw.slice(1)
        //.replace(currentw[0], currentw[0].toUpperCase())
    // .charAt(0).toUpperCase()+currentw.slice(1)
    )
    return array = array.join('')
}
console.log(generateHash(`my name is thapa technical`));
// o/p = "#MyNameIsThapaTechnical"