import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './service/user';
import { Iuser } from './Iuser';


@Injectable({
  providedIn: 'root',
})
export class Crud {

  base_url : string = "http://localhost:3000/Users";

  constructor(private http : HttpClient){

  }

  getData(){
    return this.http.get<Iuser[]>(this.base_url);
  }

  postData(data : Iuser){

    return this.http.post(this.base_url,data)

  }

}
