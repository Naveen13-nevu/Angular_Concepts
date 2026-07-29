import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { filter, from, of, map} from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  imports: [],
  templateUrl: './rxjs-operators.html',
  styleUrl: './rxjs-operators.css',
})
export class RxjsOperators {

  noList$ = from([12,13,14,15]);

  rollNoList$ = of([1,2,3,4,5,6])

  http = inject(HttpClient);

  constructor(){

    // this.noList$.pipe(
    //   filter(num => num%2 ==0)
    // ).subscribe((res:number) =>{
    //   console.log(res);
      
    // })
    // this.noList$.subscribe((res:number)=>{
    //   console.log(res);
      
    // })

    // this.rollNoList.subscribe((res:number []) =>{
    //   console.log(res);
      
    // })

    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res : unknown)=>{
      console.log(res);
      
    })

    this.rollNoList$.pipe(
      map((result) => result.filter(n => n%2 ==0))

    ).subscribe((result) =>{
      console.log(result);
      
    })
  
  }

}
