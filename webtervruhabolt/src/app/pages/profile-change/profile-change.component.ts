import { Component } from '@angular/core';
import {ProfileService} from '../../shared/services/profile.service';
import {User} from '../../shared/models/User';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-profile-change',
  standalone: false,
  templateUrl: './profile-change.component.html',
  styleUrl: './profile-change.component.scss'
})
export class ProfileChangeComponent {
  user:User | undefined;
  signInForm!:FormGroup;
  email: string = '';
  password: string = '';
  name: string = '';

  constructor(private profileService: ProfileService,private fb: FormBuilder,
              private userService: UserService) {
    this.user=this.profileService.getProfile().user;
  }
  ngOnInit(): void {
    this.initializeForm();
  }

  getData(): void {
    if(this.signInForm.valid){
      this.name=this.signInForm.value.name;
      this.email=this.signInForm.value.email;
      this.password=this.signInForm.value.password;
    }
  }

  initializeForm(): void {
    this.signInForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  changeProfile(){
    this.getData();
    if (this.user) {
      this.user.name=this.name;
      this.user.email=this.email;
      this.userService.updateUser(this.user);
    }
  }
}
