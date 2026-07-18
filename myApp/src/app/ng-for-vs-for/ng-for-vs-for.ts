import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ng-for-vs-for',
  imports: [CommonModule],
  templateUrl: './ng-for-vs-for.html',
  styleUrl: './ng-for-vs-for.css',
})
export class NgForVsFor {

      employees : any[]=[
        {empName:'Naveen',empNumber:101, empEmail:'Naveen@gmail.com',empDept:'IT'},
        {empName:'Arun',empNumber:103, empEmail:'Arun@gmail.com',empDept:'TP'},
        {empName:'Vel',empNumber:104, empEmail:'Vel@gmail.com',empDept:'Trade'},

      ]
      CompanyList : string[] = ['TCS', 'Accenture','Zoho','Wipro'];
    }

