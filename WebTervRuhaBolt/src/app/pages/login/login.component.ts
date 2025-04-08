import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../shared/services/product.service';
import {User} from '../../shared/models/User';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';
import {Profile} from '../../shared/models/Profile';
import {ProfileService} from '../../shared/services/profile.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!:FormGroup;
  profile!:Profile;
  @Input() Users!: User[];
  @Output() user = new EventEmitter<User>();


  constructor(private userService: UserService,private fb: FormBuilder,private router: Router,private profileService: ProfileService,) {}

  ngOnInit(): void {
    this.initializeForm();
    /*
    console.log(this.Users);
    this.userService.setUsers(this.Users);

     */
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  login(): void {
    console.log(this.userService.getUsers());
    console.log(this.Users);
    if(this.loginForm.valid){
      if(this.userService.userexist(this.loginForm.value.name)){
        alert("sikers belepes")
        this.router.navigateByUrl('/');
        this.profileService.setProfile(this.userService.getUserWithPassword(this.loginForm.value.name,this.loginForm.value.password)[0]);
        this.user.emit(this.userService.getUser(this.loginForm.value.name));
      }else{
        alert("nem jo jelszo vagy felhasználo nev");
      }
    }
  }
}
