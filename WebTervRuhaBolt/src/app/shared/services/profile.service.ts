import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Profile} from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: Profile;
  constructor() {
    const data = localStorage.getItem('profile');
    this.profile = data ? JSON.parse(data) : [];
  }
  getProfile(){
    return this.profile;
  }
  addLocalStorage(){
    localStorage.setItem('profile', JSON.stringify(this.profile));
  }
  islogin(){
    this.profile.logIn;
  }
  setProfile(user:User){
    this.profile.user = user;
    this.profile.logIn = true;
    this.addLocalStorage()
  }
  removeLocalStorage(){
    this.profile=new Profile();
    localStorage.removeItem('profile');
  }

}
