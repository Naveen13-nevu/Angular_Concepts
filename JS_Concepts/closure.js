function outer() {
    let message = "Naveen";
    function inner() {
        console.log(message);        
    }
    return inner;
}
let msg = outer();
msg();