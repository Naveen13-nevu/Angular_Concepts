
let a =20;

async function gree() {
    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
        
    }
    finally{
        console.log("Finnalyyy");
        
    }
        
}

gree();
console.log(a);
