import { Component, OnInit } from '@angular/core';
import {UserService} from "./services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'homeTask';
  isLogedIn = false;

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    console.log('HELLOOO')
    let token = localStorage.getItem('token');
    if (token != null && token != "") {
      this.isLogedIn = true;

    }
    console.log(localStorage.getItem('token'), this.isLogedIn)
  }


  logout() {
    localStorage.removeItem('token');
    location.href = '/login';
  }
}
