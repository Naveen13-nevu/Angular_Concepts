import { HttpClient } from '@angular/common/http';
import { Injectable, inject, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class Resource {

  private http = inject(HttpClient);
  private base_url = 'https://fake-json-api.mock.beeceptor.com';

  usersResource = rxResource({
    stream: () => this.http.get<any[]>(`${this.base_url}/users`)
  });


  resourceData = resource({
    loader: ()=> fetch(`${this.base_url}/users`).then(res => res.json() as Promise<any> )
  })

}