import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): any {
    return this.http.get('https://api.mocki.io/v1/b043df5a').subscribe(data => {
      console.log(data);
    });
  }

}
