function Leap(year) {
    if(year%4 == 0){
        if(year%100 ==0){
            if(year%400 == 0){
                return "Leap year";
            }else{
                return "not leap year";
            }
        }
        else{
            return "Leap year";
        }

    }
    else{
        return "Not leap year";
    }
}

let result = Leap(2001);
console.log(result);
