import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user = null;
  userKeys = [];

  constructor(private route: ActivatedRoute, public userService: UserService) { }

  ngOnInit(): void {
    var that = this;
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserDetails(id)
    .then(function (response) {
      that.user = response.data.data;
      that.userKeys = Object.keys(that.user)
    })
    .catch(function (error) {
      alert("There was an error")
    });
  }

}
