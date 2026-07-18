// const arr = [10,20,30,40,50];

// Using Map

// const result = arr.map(num => num *2);
// console.log(result);

// using ForEach
// arr.forEach(num => console.log(num));

//filter

// const fill = arr.filter(num => num>10);
// console.log(fill);

// reduce

// const result = arr.reduce((total,num) => total + num,0);
// console.log(result);


// find 

// const result = arr.find(num => num>20);
// console.log(result);

// find index 

// const index = arr.findIndex(num => num>30);
// console.log(index);

// some

// const someOf = arr.some(num => num>40);
// console.log(someOf);

// every

// const everyElement = arr.every(n => n%3 == 0);
// console.log(everyElement);


// Sort 

// const sorting = arr.sort((a,b) => a+b);
// console.log(sorting);


// let rev = arr.reverse();
// console.log(rev);


// let num = [1,2,[3,4,[4,5,6,[8,3]]]]
// num=num.flat(4)
// console.log(num.at(1));
// console.log(num[2][2][0]);
// num = num.flat(4);
// console.log(num.at(4));



// let flatten = num.flat(Infinity);
// console.log(flatten);

// push

// arr.push(60);
// console.log(arr);

// pop
// arr.pop();
// console.log(arr);

//Shift

// arr.shift();
// console.log(arr);


// //unshift

// arr.unshift(5);
// console.log(arr);

// splice 

// arr.splice(1,2);
// console.log(arr);

// let result = arr.slice(0,2);
// console.log(result);

// arr.splice(0,0,5);
// console.log(arr);

// const a = [10,20,30];
// const b = [40,50,60];

// console.log(a.concat(b));


// console.log(arr.includes(30));

// console.log(arr.indexOf(30));

// console.log(arr.join("-"));

// console.log(arr.includes(100));


// if(arr.includes(10,0)){
//     console.log(" Found");
// }
// else{
//     console.log("Not found");
// }

// Currying

function greet(greeting){
    return function (name){
        return function(age){

            return `${greeting} ${name} ${age} `;
        }
    }
}
let SayHello = greet("Helllo ")

console.log(SayHello("Naveen")(12));
console.log();

