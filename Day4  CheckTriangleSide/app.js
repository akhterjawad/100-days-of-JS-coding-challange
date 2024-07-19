//*-------------------------------------------------
//* ============ Interview Question: ===============
//*-------------------------------------------------
//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

let checkTriangleType = (a, b, c) => {
    if (a === b && b === c) {
        return "equilateral"
    } else if (a === b || b === c || a === c) {
        return "isosceles"
    } else {
        return "scalene"
    }
}
console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral" 
console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles" 
console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"

//The function should adhere to the following rules:
// If all three sides are of equal length, return "equilateral
// If only two sides are of equal length, return "isosceles".
// If all three sides have different lengths, return "scalene".
//<!-------------------------- Complete --------------------------->//