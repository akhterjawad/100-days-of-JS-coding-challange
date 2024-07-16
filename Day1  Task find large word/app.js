//*------------------------------------------------
//* Programming Question: Longest Word in a String
//*------------------------------------------------


//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.


//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.


//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.


const findLongestWord = (str) => {
    if (str.trim().length === 0) {
        return false;
    }
    array = str.split(" ");
    //first method
    // array = array.sort((a, b) => b.length - a.length);
    // console.log(array);
    // // return array.at(-1);
    // return array[0];

    //second method
    return array.reduce((accum, curWord) => (curWord.length > accum.length ? curWord : accum), "")
}
console.log(findLongestWord("Watch Thapa Technical javascript course on youtube"));