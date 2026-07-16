import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-my-component',
  imports: [FormsModule],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})
export class MyComponent {

    appName = " Interview Happy";

    user = {
      name:"Naveen",
      age:12
    }
    imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyHm5fa2g04XnYGbVF6mPQijZIQH6GYGIflu-8uQX_HFtZqfB_mGcvZo&s=10"
    showMessage(){
      alert("Hello World")
    }
    userName: string ='';


    count: number =0;
    increment(): void{
      this.count++;
    }

    decrement(): void{
      this.count--;
    }

    isLoggedin = true;
}
