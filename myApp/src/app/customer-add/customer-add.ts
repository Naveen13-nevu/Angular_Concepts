import { Component, EventEmitter, OnInit } from '@angular/core';
import { Customer } from '../models/customer/customer';
import { Output } from '@angular/core';

@Component({
  selector: 'app-customer-add',
  imports: [],
  templateUrl: './customer-add.html',
  styleUrl: './customer-add.css',
})
export class CustomerAdd implements OnInit{

  customers : Customer[] = []

  @Output() customerAdded = new EventEmitter<Customer[]>;

  constructor(){}
  ngOnInit(): void {
      
  }
  addCustomer( customerName : string){

    let customer : Customer = {name:customerName};
    this.customers.push(customer);
    this.customerAdded.emit(this.customers);
    console.log(this.customers);
    

  }

}
