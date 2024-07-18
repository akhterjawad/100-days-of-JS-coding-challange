 // Interview Question: Count Occurrences of Character

// Write a function called countChar that takes two parameters: a string and a character
// to count. The function should return the number of times the specified character appears in the string.


//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function show accept any character that is part of the ASCII character set and is printable).

function countChar(str, char) {
    str=str.toLowerCase();
    char=char.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }

    }
    return count;
}

// Example usage:
console.log(countChar("hello world", "L")); // Outputs: 3
// console.log(countChar("javascript", "a"));  // Outputs: 2
// console.log(countChar("firebase", "e"));    // Outputs: 2
