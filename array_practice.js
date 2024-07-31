const array = [2, 3, 4, 5]
const result = array.slice()
const result2 = array.slice(0, 2)
// console.log("slice method work", result)
// console.log("slice method work", result2)

const result3 = array.splice()
const result4 = array.splice(0, 2)
// console.log("splice method work", result3)
// console.log("splice method work", result4)

const result5 = array.concat()
// console.log("concat work", result5)

function addFourNums(a, b, c, d) {
    return a + b + c + d;
}
var numbers = [1, 2, 3, 4];
// console.log(addFourNums(...numbers));

// spread operator 
var value1 = [2, 3, 4]
var value2 = [5, 6, 7]
var res = [...value1,...value2]
// console.log(res)

// console.log(Math.max(...value1))
// console.log(Math.min(...value2))

function findSum(arr, weight) {
     for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
         for (var j = i + 1; j < arrLength; j++) {
            if (arr[i] + arr[j] == weight) {
                return [i, j];
            }
        }
    }
    return -1;
}

var arr = [1, 2, 3, 4, 5];
var weight = 9;
console.log(findSum(arr, weight))