import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';
import {ProfileService} from '../../shared/services/profile.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!:FormGroup;
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoggedIn: boolean = false;
  loggedInUser?: firebase.default.User | null;


  constructor(private userService: UserService,private fb: FormBuilder,private router: Router,private authService: AuthService,private profile:ProfileService) {}
  ngOnInit(): void {
    this.initializeForm();
  }
  async login(){
    this.getData();
    if (this.email && this.password) {
      try {
        const userCredential = await this.authService.login(
          this.email,
          this.password
        );
        this.isLoggedIn = true;
        console.log(userCredential);
        this.errorMessage = '';

        if (userCredential.user) {
          this.userService.getUserById(userCredential.user.uid).then(user => {
            if (user && user.length > 0 && user[0].isAdmin) {
              // User is an admin, store this information in localStorage
              localStorage.setItem('isAdmin', 'true');
            } else {
              localStorage.removeItem('isAdmin');

            }
            this.authService.isUserLoggedIn().subscribe(user => {
              console.log(user);
              this.loggedInUser = user;
              localStorage.setItem('user', JSON.stringify(this.loggedInUser))
              this.router.navigateByUrl('/');

            }, error => {
              localStorage.setItem('user', JSON.stringify('null'))
              console.error(error);
            })
            if (user && user.length > 0) {
              this.profile.setProfile(user[0]);
            }
          });
        }
      } catch (error) {
        // Handle login errors
        console.error('Unknown error:', error);
        this.errorMessage = 'An unknown error occurred.';
        this.router.navigateByUrl('/login');
        alert("Bad credentials!")
      }
    }
  }

  getData(): void {
    if(this.loginForm.valid){
      this.email=this.loginForm.value.email;
      this.password=this.loginForm.value.password;
    }
  }
  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

}
