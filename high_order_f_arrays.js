// ForEach Function
const students = ["zain", "saim", "mailk amina", "amna shahid"]


students.forEach((val) => console.log(val))


// .map Function

// const numbers = [1, 2, 3, 4, 5, 6, 7]

// let newArray =[]

// numbers.forEach((value) => newArray.push(value*2))

// console.log(newArray)

// function double(n){
//     return n*2
// }

// let newArray = numbers.map(double)

// console.log(newArray)

// console.log(numbers)


// .Find Function

// const numbers = [1, 2, 3, 4, 5, 6, 7]

// let arr = numbers.find(num => num === 2*2)

// console.log(arr)



// const numbers = [1, 2, 3, 4, 5, 6, 7]

// let arr = numbers.findIndex(num => num === 2*2)

// console.log(arr)



// const numbers = [1, 2, 3, 4, 5, 6, 7]

// const newArr = numbers.filter(num => num % 2 == 0)

// console.log(newArr)


// Slicing return a new array 


// const numbers = [1, 2, 3, 4, 5, 6, 7]

// let newArr = numbers.slice(5)


// console.log(newArr)

// splice actually return a same array . it deletes the range of elements in a number of existing array 
// but it also give a new array but with deleted items if we stores in a new array

const numbers = [1, 2, 3, 4, 5, 6, 7]

let newArr = numbers.splice(2, 4)


console.log(newArr)
console.log(numbers)







