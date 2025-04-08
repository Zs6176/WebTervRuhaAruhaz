import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {Profile} from '../models/Profile';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  profile!:Profile;
  login:boolean=false;
  constructor(private router:Router,private profileService: ProfileService) {

  }
  ngDoCheck() {
    this.profile=this.profileService.profile;
    console.log(this.profile);
    if(this.profile.logIn){
      this.login=true;
    }
  }
  logout() {
    this.profile=new Profile();
    this.login=false;
    console.log("logOut")
    this.profileService.removeLocalStorage()
    this.router.navigate(['/']);
    window.location.reload();
  }
}
