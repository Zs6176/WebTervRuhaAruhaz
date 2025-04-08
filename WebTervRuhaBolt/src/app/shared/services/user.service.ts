import { Injectable } from '@angular/core';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[]=[];
  constructor() {
    const data = localStorage.getItem('users');
    this.users = data ? JSON.parse(data) : [];
  }

  userexist(name: string){
    if(this.users==undefined || this.users.length == 0){
      return false;
    }else {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].name == name) {
          return true;
        }
      }
      return false;
    }
  }

  setUser(user: User){
    if(this.users==undefined || this.users.length == 0){
      this.users=[];
      this.users.push(user);
    }else {
      this.users.push(user);
    }
  }

  setUsers(users: User[]){
    this.users = users;
  }
  getUser(name:string): User | undefined{
    for(let i=0; i<this.users.length; i++){
      if(this.users[i].name == name){
        return this.users[i];
      }
    }
    return undefined;
  }
  getUserWithPassword(name:string,password:string): User[]{
    return this.users.filter(user => user.name == name||user.password == password);
  }
  getUsers(){
    return this.users;
  }
  getLastUserId(){
    if(this.users==undefined || this.users.length == 0){
      return 0;
    }
    return this.users.length-1;
  }
  addLocalStorage(){
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  newUser(name: string, password: string): User{
    return new User(this.getLastUserId(), name, password);
  }
}
