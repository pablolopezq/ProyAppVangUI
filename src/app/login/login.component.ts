import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../core/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  addressForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  service : LoginService;
  router : Router;

  constructor(private fb: FormBuilder, _router: Router, _service: LoginService) {
    this.service = _service
    this.router = _router;
  }

  onSubmit() {
    if (this.service.login(this.addressForm.value.username, this.addressForm.value.password)){
      this.router.navigate(['/home'])
    }
    else {
      alert("Username or Password incorrect");
    }
  }

  signUp() {
    if (this.service.signup(this.addressForm.value.username, this.addressForm.value.password)){
      this.router.navigate(['/home'])
    }
    else {
      alert("Username already exists");
    }
  }
}
