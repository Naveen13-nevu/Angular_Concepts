"use strict";
function greetUser(user) {
    return `Hello ${user.firstName} ${user.lastName}`;
}
function logUser(user) {
    console.log(`User: ${user.firstName} ${user.lastName} ${user.age}`);
}
let user1 = {
    firstName: "Naveen",
    lastName: "S",
    age: 25
};
console.log(greetUser(user1));
console.log(logUser(user1));
