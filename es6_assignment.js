
//es-6 assignment

//question-1

//hello

// Refactor the following function into a one-liner:
// const printName = (name) => {
//     return “Hi” + name;
// }


//this is the one linear for the above arrow function
const printName=name=> `hi ${name}`;


//just like as arrow function with one parameter so () also not needed


//question-2
/*
Rewrite the following code using template literals
const printBill = (name, bill) => {
                     return “Hi “ + name + “, please pay: “ + bill;
           }
*/


//code for question-2
//code for question2  using string template , it uses back-ticks
const printBill =(name,bill)=>{
     return `hi ${name} , please pay: ${bill}`
}







// question-3
/*Modify the following code such that the object properties are destructured and logged.


//code for question-3 using destructuring the objects
const person = {
                      name: “saiprabhu”,
                      age: 21
            }
           
           let name = person.name;
           let age = person.age;
           console.log(name);
           console.log(age);
*/

//code for question-3

const person={
    name:"saiprabhu",
    age:21
}

let {name,age}=person;
console.log(name);
console.log(age);
