import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  constructor(private router : Router){}

  loginData(){
    // this.router.navigateByUrl('/attribute')
    this.router.navigate(['attribute'])
  }

}
