let array = [11, 22, 33, 44, 55, 66]
let index = undefined
let item = 33
// use for loop and create searching operation...
for (let i = 0; i <= array.length - 1; i++) {
    const element = array[i];
   // console.log(i) // length
    // console.log(element)  // value
    if (element == item){
        index = i  // i means length
    }
}
console.log(index)


// when same item is dobule now how to search two item index