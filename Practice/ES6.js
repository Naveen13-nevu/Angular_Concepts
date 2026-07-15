
// let str = "Naveen";
// console.log(`Hello ${str}`);

// let res =`javascript 
// is
// scripting 
// lanvuage `

// console.log(res);

// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(id1 == id2);

// const set = new Set([1,2,3,3,4,4,5]);
// console.log(set);

// optional chaining 

// const user = {
//     name:"Naveen"
// }
// // console.log(user.address.city);
// console.log(user.address?.city);


// const stud = [
//     {
//         name:"naveen",
//         age:12
//     },
//     {
//         name:"praveen",
//         age:20
//     }
// ]

// console.log(stud[0].name + " " + stud[1].name);

// class Student {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     study(){
//         console.log(this.name +" is studying ");
        
//     }
// }

// const s1 = new Student("Naveen", 22)
// let s2 = new Student("Arun",30)
// console.log(s1.name);
// s1.study();
// s2.study();

// inheritance

// class Animal{
//     bark(){
//         console.log("The dog is barking");
        
//     }
// }

// class Dog extends Animal{
//     cat(){
//         console.log("Meow");
        
//     }
// }


// const d = new Dog();
// d.bark();
// d.cat();

// const json = `[ 
// {
//     "Name":"Naveen",
//     "Age":12,
//     "Address":"Chennai"
//     }
// ]`
// const user = JSON.parse(json);
// console.log(user[0].Name);

// const user = {
//     name:"Naveen",
//     age:12,
//     address:"Location"
// }

// const json  = JSON.stringify(user);
// console.log(json);

const obj = {
    name:"Naveen",
    age : 10
}

console.log(obj.age || 18);
