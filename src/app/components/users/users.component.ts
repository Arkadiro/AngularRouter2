import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { userData } from 'src/app/models/Data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  loaded: boolean = true;
  enabled: boolean = true;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
    this.users = userData;
  }

  onAddUser(){
    this.loaded = true;
    this.users.push({
      id: this.users.length+1,
      firstName: 'Adriano',
      lastName: 'Chelentano',
      email: 'adrey@mail.com',
      hide: true,
    })
  }
  addNewUser(form: NgForm){
    console.log(form);
    this.users.push({
      id: this.users.length+1,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      registered: new Date(),
      hide: true
    })
    form.reset()
  }

}
