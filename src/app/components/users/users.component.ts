import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
//import { userData } from 'src/app/models/Data';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service.';


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
  data:any;

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.userService.getData()
      .subscribe(
        (data) => {
        this.data = data
        console.log(this.data);
        }
      )
    this.userService.getUsers()
        .subscribe(
          (users) =>{
            this.users = users;
            this.loaded = true;
          }
        )
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
    //console.log(form);
    this.userService.addUser({
      id: this.users.length+1,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      registered: new Date(),
      hide: true
    })
    console.log(this.userService.getUsers())
    form.reset()
  }

}
