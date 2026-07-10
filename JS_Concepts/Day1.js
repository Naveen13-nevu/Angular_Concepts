
// let a = "Hello";
// let b = " naveen";
// let c = a+b;
// console.log(c);

// let string = "Java"
// let split = string.split("").reverse().join("");
// console.log(split);


function rev(num) {
    
    let reversed = num.split("").reverse().join("");
    return num == reversed;
}
console.log(rev("madam"));
