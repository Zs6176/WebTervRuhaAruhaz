import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/User';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  signInForm!:FormGroup;

  @Input() users!: User[];
  @Output() usersOut = new EventEmitter<User[]>();

  constructor(private userService: UserService,private fb: FormBuilder,private router: Router) {}

  ngOnInit(): void {
    this.initializeForm();
    /*
    if(this.users==undefined || this.users.length == 0){
    }else {
      this.userService.setUsers(this.users);
    }

     */
  }

  initializeForm(): void {
    this.signInForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  signIn(): void {
    if(this.signInForm.valid){
      if(!this.userService.userexist(this.signInForm.value.name)){
        this.userService.setUser(this.userService.newUser(this.signInForm.value.name,this.signInForm.value.password));
        this.users=this.userService.getUsers();
        this.router.navigateByUrl('/login');
        this.usersOut.emit(this.users);

      }else{
        alert("Már létezik ilyen felhasználó nevű felhasználó adj meg egy másikat");
      }
    }
  }
}
