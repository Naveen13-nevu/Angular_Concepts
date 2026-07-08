"use strict";
let para = function (a, b, c = "Hi") {
    return a + b + c;
};
console.log(para("a", "b", "c"));
console.log(para("a", "b"));
