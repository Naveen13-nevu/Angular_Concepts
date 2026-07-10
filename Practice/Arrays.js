"use strict";
let numList;
numList = [1, 2, 3, 4, 5];
let result = numList.find((num) => num > 2);
let results = numList.find((num) => num == 9);
console.log(result);
console.log(results);
let swapNumb;
function swapNumber(num1, num2) {
    return [num2, num2];
}
swapNumb = swapNumber(10, 20);
console.log(swapNumb[0]);
console.log(swapNumb[1]);
