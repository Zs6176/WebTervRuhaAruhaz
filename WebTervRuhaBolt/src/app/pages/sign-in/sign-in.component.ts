import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/User';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  signInForm!:FormGroup;

  email: string = '';
  password: string = '';
  name: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService,  private userSevice : UserService, private router: Router,private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initializeForm();
  }

  signIn() {
    this.getData();
    console.log(this.email);
    this.authService.signup( this.email,this.password).then(cred =>{
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        isAdmin: false,
        email: this.email,
        name: this.name,
      }
      console.log(user);
      this.userSevice.create(user).then(_ =>{
        console.log('User added succesfully.')
      }). catch((error: any) => {
        console.error(error);
      });
    }).catch((error: any) => {
      console.error(error);
      this.errorMessage = 'An unknown error occurred.';

    });

    // User successfully signed up


  }
  initializeForm(): void {
    this.signInForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  getData(): void {
    if(this.signInForm.valid){
      this.name=this.signInForm.value.name;
      this.email=this.signInForm.value.email;
      this.password=this.signInForm.value.password;
    }
  }
}
