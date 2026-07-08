function greetUser( user: {firstName:string, lastName:string}) {
    return `Hello ${user.firstName} ${user.lastName}`;

    
}
function logUser( user: {firstName:string, lastName:string, age:number}) {

    console.log(`User: ${user.firstName} ${user.lastName} ${user.age}`);

}

let user1 = {
    firstName:"Naveen",
    lastName:"S",
    age:25

}
console.log(greetUser(user1));
console.log(logUser(user1));

