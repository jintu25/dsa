// Regular expressions(regexes) are a set of characters that define a search pattern. 
// [abc]: Finds any character between the brackets
// [^ abc]: Finds any character not between the brackets
// [0 - 9]: Finds any digit between the brackets
// [^ 0 - 9]: Finds any digit not between the brackets
//     (x | y): Finds any of the alternatives specified

const str = "hello this is jintu paul !!!"
console.log(str.search("this")) //this text start from 6 number


const str1 = atob('aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0');
console.log(str1)
// aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0
// 1 atob('aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB1dGVyIHByb2dyYW0');
// hello I love learning to computer program
