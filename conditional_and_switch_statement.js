
//  IF statment with else and multiple if else
const age = 90

if (age <= 18){
    console.log("Yes you can vote")
} 

else if (age <=18){
    console.log("Yes you are an adult")
}

else if (age >= 80){
    console.log("Yes You are too old ")
}

else{
    console.log("Nope you cannot vote")
}



// Ternary Operator without variable

const umr = 12

umr >= 19 ? console.log("Yes") : console.log("No")


// Ternary operator with variable and then we don't need to use console every return statement because it is storing in other varibale 


let umer = 18

let result = umr >= 19 ? "Yes" : "No"
console.log(result)



// Switch Statements(Simple Problem with switch Statmment)


const option = 3
switch(option){
    case 1: console.log("Assalam o Alaikum")
    break;
    case 2: console.log("Alhamdulillah")
    break;
    case 3: console.log("Allah Hafiz")
    break;
    default: console.log("Invalid Option")  
}

// Another Example of Switch Statement with variables, its also called Ternary Operator
// in this case you will depply understand the use case of switch statement


let a = 40 
let opt = "*"
let b = 30

switch(opt){
    case "+": console.log(a+b)
    break;
    case "-": console.log(a-b)
    break;
    case "*": console.log(a*b)
    break;
    case "/": console.log(a/b)
    break;
    default: console.log("Invalid Operator")
}


// Logical Operators AND OR and NOT 



// USE of AND Operator (&&) All conditions must be true 
let ages = 18
let gender = "male"

if (ages>=18 && gender== "male"){
    console.log("You are an adult male")

}

// USE of OR Operators (||) One condition must be true 

let man1 = "Plumber"
let man2 = "Electrician"

if (man1=="plumber" || man2 == "Electrician"){
    console.log("you are invited")
}

// USE of NOT Operator.. (!=)

const number = 9
if (!number %2 ==0){
    console.log("Number is Odd")
}


// For Loop: We use for loop when we know the exactly iterations

for(let i = 1; i <= 10; i = i+1){
    console.log("Devminds")
}

// While Loop: we use while loop when we don't sure about its iterations 

let ip = 0
let house = 100

while(ip != house) {
    ip = ip + 1
    console.log("Step Taken" + ip)
}

// do while loop: This loop is same as while loop. 
// but its execution part firstly coded and condition must be execute at the end 

let intial = 0
let home = 49

do{
    intial = intial + 1
    console.log("Step taken" + intial)
}while(intial <= home)



console.log("Javascript")
console.log("hello zain")





let bn = 95

if (bn % 2 == 0){
    console.log("Zain.. You are a true GEM ")
}








































   




























