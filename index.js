

// datatypes and arithematic Operatoins

let num1 = 3.14
let num2 = 10
let sum = num1 + num2

// +
console.log(num1+num2)

// -

console.log(num1-num2)

//*

console.log("sum is: ", sum)

// / (Division)

console.log(num2/num1)

// Strings 

const firstName = "Zain Ul Abdeen"
const lastName = "Chouhdry"

console.log(firstName+" "+lastName)


// Boolean

let isLoggedin = false

console.log(isLoggedin)




// if user want to keep value neither true nor false so there we do

let lastloggedin = null

console.log(lastloggedin)


// undefined 

let lastloggedout = undefined

console.log(lastloggedout)


// Objects: in objects there multiple datatypes under one object and we use this object and get all propertikes one by one or get all at one time 
// Where we can seperate properties by sigle comma
const Person = {
    firstName: "Zain Ul Abdeen",
    lastName: "Chouhdry",
    age: 28,
    isLoggedin: false,
}

console.log(Person)

console.log(Person.firstName)
console.log(Person.lastName)
console.log(Person.age)

console.log("add hello")


var x = "saim";
var x = "zain";
x = "loha paarh"

console.log(x)


let y = "Amna"
y = "asghar"


console.log(y)


const h = "Saim";

console.log(h)


// const t = 50;
// const u = 30;

// if(t>=u){
//     console.log(t,"is larger ")
// }else{
//     console.log(u,"is larger")
// }


// const age = 21;
// const gender = "Male";

// if(gender == "Male" && age <= 20){
//     console.log("Yes you are an eligible")
// }else{
//     console.log("No You are not eligible")
// }




// const a1 = "Sain";

// b = (a1 == "Zain"? "He is the Person" : "No, He is not that Person")
// console.log(b)



const day = 10;
switch(day){
    case 0:
        console.log("Today is Friday")
        break;
    case 1:
        console.log("Today is Saturday")
        break;
    case 2:
        console.log("Today is Sunday")
        break;
    case 3:
        console.log("Today is Monday")
        break;
    case 4:
        console.log("Today is Tuesday")
         break;
    case 5:
        console.log("Today is Wednesday")
        break;
    case 6:
        console.log("Today is Thrusday")
        break;
    default:
        console.log("Kindly give a valid week day")
}








































