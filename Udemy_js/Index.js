
// let a = Math.random() * 100;
// a = Math.floor(a) +1;
// console.log(a);


// let guestList = ["Naveen","praveen", "Arun"];

// let guestName = prompt("What is your name");


// if (guestList.includes(guestName)){
//     alert("Welcome");
// }
// else{
//     alert("user not authorized")
// }

// let output =[];
// let count =1;
// function out() {

//     count++;
//     output.push(count);

//     if(count%3 ==0){
//        output.push("Fizz");
        
//     }
//     else if(count%5 == 0){
//         output.push("Buzz");
        
//     }
//     console.log(output);
// }

document.querySelectorAll("li")[0].style.color ="purple"
document.querySelectorAll("li")[1].style.color ="red"
document.querySelectorAll("li")[2].style.color ="Yellow"

document.getElementById("java").innerHTML="<em >JAVA</em>";
document.getElementById("java").style.color="white";

const heading = document.createElement("h1");
heading.innerText = "Hello World";
heading.style.color="gray";

document.body.appendChild(heading);
document.querySelector("h1").remove();

// localStorage.setItem("name","Naveen")
// console.log(localStorage.getItem("name"));
// localStorage.clear();

document.cookie = "name=Naveen; expires=thu, 16 jul 2026 12:00:00 UTC"
console.log(document.cookie);



