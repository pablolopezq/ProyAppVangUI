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
  loginForm = this.fb.group({
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
    if (this.service.login(this.loginForm.value.username, this.loginForm.value.password)){
      this.router.navigate(['/lists'])
    }
    else {
      alert("Usuario y/o contraseña inválidos");
    }
  }

  signUp() {
    if (this.service.signup(this.loginForm.value.username, this.loginForm.value.password)){
      this.router.navigate(['/lists'])
    }
    else {
      alert("Username already exists");
    }
  }
}
