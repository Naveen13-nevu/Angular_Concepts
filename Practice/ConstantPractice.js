
// const person = {
//     name:"Naveen",
//     age:25
// }
// person.name = "Arun";
// delete person.age;
// console.log(person);


// let result = Number("hello");

// console.log(Number.isNaN(result));


// call back

// function greet(name,callback) {
//     console.log("Hello " + name);
//     callback();
// }
// function say(){
//     console.log("Goddbye!...");
    
// }
// greet("Naveen",say)

// set TimeOut

// console.log("Start....");

// setTimeout(() => {
//     console.log("Program executed");
    
// }, 2000);
// // console.log("End ");

// Higher order-function

// function greet(name){
//     console.log("Hello "+name);
    
// }

// function para(callback){
//     callback("Naveen")
    
// }
// para(greet)

function calculate(a,b,operation) {
    
    operation(a,b);
}
console.log("calculating....");


setTimeout(() =>{
  calculate(10,20,(x,y) =>{
    console.log(x*y);
  })

},2000);


// IIFE

(function(name){
console.log("IIFE Function"+name);

})("Naveen");
