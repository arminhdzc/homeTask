import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [];

  constructor(public userService: UserService) {

    
  }


  ngOnInit(): void {
    console.log('hi')
    var that = this;
    this.userService.getUser().then(function (response) {
      that.users = response.data.data;
    })
    .catch(function (error) {
      console.log(error)
      alert("There was an error")
    });
  }
}
