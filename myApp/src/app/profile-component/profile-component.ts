import { Component } from '@angular/core';
import { SharedData } from '../shared-data';

@Component({
  selector: 'app-profile-component',
  imports: [],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.css',
})
export class ProfileComponent {

  userData : any;

  isEligible : boolean;
  constructor(private shareData : SharedData ){

    this.userData = this.shareData.userData;
    this.isEligible = this.shareData.isEligibleForSubscription();

  }


  // userData = {
  //   id : 1,
  //   name : "Naveen",
  //   username : "Naveen",
  //   email : "naveen@gmail.com"
    
  // }

}
