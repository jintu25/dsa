const chunkFor = (array, size) => {
    let chunked = []
    for(i = 0; i < array.length; i += size){
        const chunk = array.slice(i, i + size)
        chunked.push(chunk)
    }
    return chunked
}
console.log(chunkFor([2, 3, 4, 5, 6, 7, 8, 9],3))

// use while loop

const chunk = (array, size) => {
    let i = 0;
    let chunked = []
    while (i < array.length) {
        const chunk = array.slice(i, i + size)
        console.log("chunk is ", chunk)
        chunked.push(chunk)
        i += size
    }
    return chunked
}
// console.log(chunk([2, 3, 4, 5, 6, 7, 8, 8, 9], 2))