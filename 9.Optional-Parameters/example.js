"use strict";
let ConcatStrings = function (a, b, c = "") {
    return a + b + c;
};
console.log(ConcatStrings("a", "b", "c"));
console.log(ConcatStrings("a", "b"));
