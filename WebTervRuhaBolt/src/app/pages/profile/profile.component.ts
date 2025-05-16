import { Component } from '@angular/core';
import {Profile} from '../../shared/models/Profile';
import {ProfileService} from '../../shared/services/profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profile!:Profile;
  constructor(private router:Router,private profileService: ProfileService) {
    this.profile=this.profileService.getProfile();
  }
  profileChange(){
    this.profileService.addLocalStorage();
    this.router.navigate(['/profileChange']);
  }

}
