import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedData {

constructor(){}
    userData = {
    id : 1,
    name : "Naveen",
    username : "Naveen",
    email : "naveen@gmail.com",
    subscription : "basic"
  }
  isEligibleForSubscription(){
    if(this.userData.subscription == 'basic' && this.userData.email.endsWith('@gmail.com')){
      return true;
    }
    else{
      return false;
    }
  }

}
