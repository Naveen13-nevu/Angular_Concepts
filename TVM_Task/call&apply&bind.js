
//  Call 

// const person = {
//     name: "Naveen",
//     greet(){
//         console.log("Hello " + this.name);
        
//     }
// }

// const person2 = {
//     name:"Aravind"
// }

// person.greet();
// person.greet.call(person2);


// apply

// function Hello(age) {

//     console.log(this.name,age);
    
// }
// const person = {
//         name:"Naveen"
// }
// Hello.apply(person,[25]);

// bind

// function hell(age){
//     console.log(this.name, age);
    
// }
// const person1 = {
//     name:"praveen"
// }
// let binding = hell.bind(person1,20);

// console.log("JAVA");

// binding()


let num = "100";
console.log( typeof num); 
let a = Number(num);
console.log(a);

console.log(typeof a);
