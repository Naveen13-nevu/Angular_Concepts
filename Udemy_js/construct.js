function houseKeeper(name,age,location){
    this.name = name;
    this.age = age;
    this.location = location;
}

let housekeeper1 = new houseKeeper("Naveen",19,"chennai");
let housekeeper2 = new houseKeeper("Praveen",19,"chennai");
console.log(housekeeper1);
console.log(housekeeper2);
