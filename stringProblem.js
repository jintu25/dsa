
// search how many a is available in the str variable 

var str = "He's my king from this day until his last day. and also she is my queen";
var count = 0;  
var pos = str.indexOf('a');
while (pos !== -1) {
    count++;
    pos = str.indexOf('a', pos + 1);
}
console.log(count); // prints '5'

// use split and separate value
var test1 = 'chicken';
// console.log(test1.split(""));

// string replace
var fevFruit = "mango and jackfruit"
console.log(fevFruit.replace("jackfruit", "apple"))