const minimum = price => {
    console.log(...price)
    return Math.min(...price) // use spread operator for copy same array !!!
}

const maximum = price => {
    console.log(...price)
    return Math.max(...price) // use spread operator for copy same array !!!
}
const value = [4, 4, 9, 2, 3, 7]
console.log(minimum(value))
console.log(maximum(value))