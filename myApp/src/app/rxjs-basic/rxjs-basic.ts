import { Component } from '@angular/core';
import { from, Observable, interval, timer } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-rxjs-basic',
  imports: [],
  templateUrl: './rxjs-basic.html',
  styleUrl: './rxjs-basic.css',
})
export class RxjsBasic {

  cityList : string[] = ["Chennai","Tirunelveli", "madurai"];

  cityList$ = of(["Chennai","Tirunelveli", "madurai"]);

  stateList$ = from(["Tamilnadu","Karnataka"]);

  // myIntervals$ = interval(1000);

  timer$ = timer(5000);


  constructor(){

    this.timer$.subscribe(( res : number) =>{
      console.log("Timer is executed " + res);
      
    })

    // this.myIntervals$.subscribe((res : number) =>{
    //   console.log("Timer " +res);
      
    // })

    this.cityList$.subscribe((cityData: string[])=>{
      // debugger;
      console.log(cityData);

      this.stateList$.subscribe((res:string ) =>{
        // debugger;
      console.log(res);
      
        
      })
      
    })

    const myObs$ = new Observable(value => {
      value.next("Hi I am naveen")

    })
    myObs$.subscribe(message  =>{
      // debugger;
      console.log(message);
      
    })

  }

}
