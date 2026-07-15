
// const promise = new Promise((resolve,reject) =>{
//     let success = true;

//     if(success){
//         resolve("Executed succesfully");
//     }
//     else{
//         reject("Failed to execute")
//     }
// })

// promise
// .then((result) => {console.log(result);
// }
// )
// .catch((error) =>{
//     console.log(error);
    
// })
// .finally(()=>{
//     console.log("Finnaly executed");
    
// })


// ---------------------------------------

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Request Completed");
    });