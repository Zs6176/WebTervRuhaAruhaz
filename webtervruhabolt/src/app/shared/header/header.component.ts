import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {Profile} from '../models/Profile';
import {ProfileService} from '../services/profile.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  profile!:Profile;
  login:boolean=false;
  constructor(private router:Router,private profileService: ProfileService, private auth:AuthService) {

  }
  ngDoCheck() {
    this.profile=this.profileService.profile;
    if(this.profile.logIn){
      this.login=true;
    }
  }
  logout() {
    this.profile=new Profile();
    this.login=false;
    this.auth.logout();
    console.log("logOut")
    this.profileService.removeLocalStorage()
    this.router.navigate(['/']);
    window.location.reload();
  }
}
