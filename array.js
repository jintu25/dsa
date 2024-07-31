
var array1 = [2, 3, 4, 5]
for (var i = 0, len = array1.length; i < len; i++) {
    // console.log("value is",  len, array1[i])
}

var array1 = ['all', 'cows', 'are', 'big'];
array1.forEach(function (element, index) {
    // console.log(index, element);
});

// reverse string problem solving 

const hello = "hello"
const result = hello.split("").reverse().join("")
// console.log(result)

// palindrome problem solving
const palindrome = "cddc" // if the reverse value is equal to the original one then that word is palindrome.
const resultPalindrome = palindrome.split("").reverse().join("") === palindrome;
// console.log(resultPalindrome)

// .split("") => convert string to array
// .reverse => reverse array and result same array
// .join("") => Adds all the elements of an array into a string

// reverse number 
// 1. convert number to string use toString
// 2. then convert string to array use split method
// 3. then use reverse and return same array with reverse the context
// 4. then again convert string to number use parseInt

const num = 34938
const resultNum = num.toString().split("").reverse().join("")
console.log(typeof (parseInt(resultNum)), parseInt(resultNum))

// sentence first word uppercase 

const word = "hello my name is jintu paul"
const resultUppercase = word.toLowerCase().split(" ").map((word)=> word[0].toUpperCase() + word.slice(1)).join(" ")
// console.log(resultUppercase)

const toUppercase = word => {
    return word.toLowerCase().split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
}
console.log(toUppercase("Hello king khan"))

