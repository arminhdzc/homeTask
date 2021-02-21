import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  login(email, password) {
    this.userService.login(email, password)
    .then(function (response) {
      localStorage.setItem('token', response.data.token);
      location.href = '/users';
    })
    .catch(function (error) {
      alert("There was an error")
    });
  }
}
