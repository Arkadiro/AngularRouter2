import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[]
  data: Observable<any>

  constructor() {
    this.users = [
      { 
        id:1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohnDoe@mail.com',
        hide: false
      },
      { 
        id:2,
        firstName: 'Maria',
        lastName: 'Williams',
        email: 'Maria@mail.com',
        hide: false
      },
      { 
        id:3,
        firstName: 'Marta',
        lastName: 'Jackson',
        email: 'Jackson@mail.com',
        hide: false
      }
    ]
  }

  getUsers(): Observable<User[]>{
    return of (this.users)
  }
  addUser(user: User){
    this.users.push(user)
  }
  getData() {
    this.data = new Observable( observer => {
      setTimeout(()=>{
        observer.next(1);
      }, 1000);
      setTimeout(()=>{
        observer.next(2);
      }, 2000)
      setTimeout(()=>{
        observer.next(3);
      }, 3000)
    } );
    return this.data
  }
}
