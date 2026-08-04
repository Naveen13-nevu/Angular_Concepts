import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resource } from '../service/resource';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-resource-api',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resource-api.html',
  styleUrls: ['./resource-api.css']
})
export class ResourceApi implements OnInit {

  apiData: any;

  constructor(private resource: Resource) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    
    this.apiData = this.resource.usersResource;

  }

}