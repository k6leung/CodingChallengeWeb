import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../site-common/authentication/authentication.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router:Router,
                private formBuilder:FormBuilder,
                private authenticationService:AuthenticationService) {

  }

  buildForm(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
    this.buildForm();
  }

  login(): void {
    console.log("login() - loginForm: " + JSON.stringify(this.loginForm.value));

    let username = this.loginForm.value.username;
    console.log("login() - username: " + username);

    let password = this.loginForm.value.password;
    console.log("login() - password: " + password);

    this.authenticationService.authenticate(username,
                                              password,
                                              this.loginSuccess.bind(this),
                                              this.loginFail);
  }

  loginSuccess():void {
    console.log("LoginPageComponent.loginSuccess() starts.");
    this.router.navigate(['auth']);
  }

  loginFail(e:any):void {
    console.error("LoginPageComponent.loginFail() - e: " + JSON.stringify(e));

    if(e.hasOwnProperty("errorMessage")) {
      alert(e['errorMessage']);
    } else {
      alert("Login failed, please try again later.");
    }
  }

  back():void {
    console.log("LoginPageComponent.back() starts.");
    this.router.navigate(['/']);
  }

}
