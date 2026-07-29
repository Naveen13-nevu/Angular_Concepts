import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Customer } from '../models/customer/customer';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-view',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-view.html',
  styleUrl: './customer-view.css',
})
export class CustomerView implements OnInit{

  constructor(){}

  ngOnInit(): void {
      
  }
  
  @Input() customers : Customer[] =[];




}
