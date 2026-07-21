import { ChangeDetectionStrategy, Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class Signals {

  normalCounter =0;
  
  
  counter = signal(0);
  // counter : WritableSignal<number> = signal(0);

  constructor(){
    this.counter.set(0);

    // setTimeout(() => {
    //   // this.normalCounter = 50;
    //   this.counter.set(30);
    //   console.log(" Normal counter value " + this.normalCounter);
      
    // },3000)
    effect(() => {
      console.log(" counter is " + this.counter());
      
    })
  }

  onIncrement(){
    this.counter.update(initial => initial + 1);
  }

}