import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, public userService: UserService) { }

  ngOnInit(): void {
  }

  register(firstName, lastName, address, email, password) {
    this.userService.register(firstName, lastName, address, email, password)
    .then(function (response) {
      localStorage.setItem('token', response.data.token);
      location.href = '/users';
    })
    .catch(function (error) {
      alert("There was an error")
    });
  }
}
