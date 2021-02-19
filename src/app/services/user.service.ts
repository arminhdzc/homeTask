import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): any {
    return this.http.get('https://run.mocky.io/v3/153b4a6f-c5ff-42a0-860a-e9d54cbf60ec').subscribe(data => {
      return data;
    });
  }

}
