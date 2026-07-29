import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-sub-beh-replay',
  imports: [],
  templateUrl: './sub-beh-replay.html',
  styleUrl: './sub-beh-replay.css',
})
export class SubBehReplay implements OnInit{
  

  
  //  subject = new Subject<number>();
  // constructor(){}

    
  //   ngOnInit() : void{

  //     this.subject.subscribe(value => {
  //       console.log("Subscriber 1:", value);
  //     });
      
  //     this.subject.subscribe(value => {
  //       console.log("Subscriber 2:", value);
        
  //     });
      
  //     this.subject.next(10);
  //     this.subject.next(20);
  //   }

  // behaviourSubject = new BehaviorSubject<number>(0);

  // replaySubject = new ReplaySubject<number>(3);

  asyncSubject = new AsyncSubject<number>();

  constructor(){}

  ngOnInit(): void {
      
  //  this.behaviourSubject.subscribe(value =>{
  //   console.log("subscriber 1 : " + value);
    
  //  })

  //  this.behaviourSubject.next(10);
  //  this.behaviourSubject.next(20);

  //   this.behaviourSubject.subscribe(value =>{
  //   console.log("subscriber 2 : " + value);
    
  //  })

  // this.replaySubject.next(10);
  // this.replaySubject.next(20);
  // this.replaySubject.next(30);
  // this.replaySubject.next(40);

  // this.replaySubject.subscribe(value => { 
  //   console.log(value);
    
  // })


  this.asyncSubject.subscribe(value =>{
    console.log(value);
    
  })
  
  this.asyncSubject.next(10);
  this.asyncSubject.next(20);
  this.asyncSubject.next(30);
  this.asyncSubject.complete();
  

  }





// studentName$ = new Subject();

// rollNo$ = new Subject<number>();

// takeTill = new Subject<void>();

//  initSubject = new Subject("ABC");

// courseName : Subject<string> = new Subject<string>();



// constructor(){
  

//   setTimeout(()=>{
  //     this.studentName$.next("Hi Angular");
  //     this.rollNo$.next(20);
  //     this.takeTill.next();
  
  //   },4000);
  
  // }
  
  // ngOnInit(): void {
  //     this.studentName$.subscribe((res : any) =>{
  //       // debugger;
  //       console.log(res);
  
  //     })
  //     this.rollNo$.subscribe((res : any) =>{
  //       // debugger;
  //       console.log(res);
        
  //     })
     
      
  // }

}

