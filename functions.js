
// A simple say hello zain function

function sayHello() {
    console.log("Hi Zain")
}

sayHello()

// Function in JavaScript: A block of code that is used to perform specific task 
// here is a syntax of Defining fucntion 
function doMultiply(a, b) {
    console.log(a*b)
}

doMultiply(2, 4)


// Same adding to parameters in function 
// we don't need any everytime console.log and it's a bad practice..we always return it 


function doAdding(num1, num2) {
    return num1 + num2
}

let a = doAdding(4, 3)

console.log(a)


// if i want dynamically add or multiply number.. in JS we don.t need to store multiple arguments as params 
// we'll use only argument keyword that take multiple params and give results to us..


function add() {
    let ans = 0
    for(let i = 0; i < arguments.length; i = i +1){
        ans = ans + arguments[i]
    }
    return ans
}

let result = add(23, 54, 43, 78, 89)
console.log("The result is: ", result)


// we can use ...numbers that can take multiple params like arguments and give the same results

function moreadd(...numbers) {   // ...numbers is a spread Operator
    let ans = 0
    for(let i = 0; i < numbers.length; i++){
        ans = ans + numbers[i]
    }
    return ans
}

let result1 = moreadd(23, 54, 43, 78, 89)
console.log("The result is as follow: ", result)









