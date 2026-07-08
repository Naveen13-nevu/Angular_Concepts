let promise = new Promise((resolve,reject)=>{
    let success = true;

    if(success){
        resolve("payment successfull")
    }
    else{
        reject("payment failed")
    }
});
promise
.then((result) =>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error);
    
})
