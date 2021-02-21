import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = "https://reqres.in/api/";

  constructor(private http: HttpClient) { }

  getUser(): any {
    return axios.get(this.BASE_URL + 'users');
  }

  getUserDetails(id): any {
    return axios.get(this.BASE_URL + 'users/' + id);
  }

  login(email, password): any {
    return axios.post(this.BASE_URL + 'login', {
      email: email,
      password: password
    })
  }

  register(firstName, lastName, address, email, password): any {
    return axios.post(this.BASE_URL + 'register', {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      address: address
    })
  }
}
