const employee = { 
    id:10,
    name:"Naveen",
    address:"chennai",
    salary:10000
}

// Object.freeze(employee);
// Object.seal(employee)

// employee.id=11;
//  employee.name ="Arun";
// console.log(employee.id);
console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(Object.entries(employee));
console.log(employee.hasOwnProperty("name"));






