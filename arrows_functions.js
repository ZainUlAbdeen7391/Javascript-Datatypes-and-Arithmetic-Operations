// in arrows functions we use arrows=> 

const add = (a,b) => {
    let result = a+b
    return result

}
console.log(add(2, 3))

//  

const jamaV2 = (a, b) => a+b;
console.log(jamaV2(2,7))


//This Keyword 
const obj = {
    value : 20,
    myFunction : function() {
        console.log(this.value)  
    }
}
obj.myFunction()


// Simple High Order Function 

function bcadd1(a, b, cb) {

    let results = a + b;
    cb(results);
}

function printResult(value) {
    console.log("The sum is: " + value);
}

bcadd1(3, 4, printResult);


//  very short function by arrow 
const add1 = (a, b, cb) => cb(a + b);
add1(3, 4, x => console.log("Sum:", x));  // One line! 🚀











