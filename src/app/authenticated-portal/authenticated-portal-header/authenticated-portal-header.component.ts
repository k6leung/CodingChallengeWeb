import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../site-common/authentication/authentication.service";

@Component({
  selector: 'app-authenticated-portal-header',
  templateUrl: './authenticated-portal-header.component.html',
  styleUrls: ['./authenticated-portal-header.component.css']
})
export class AuthenticatedPortalHeaderComponent implements OnInit {

  constructor(private router:Router,
              private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  logout(): void {
    console.log("AuthenticatedPortalHeaderComponent.logout() starts.");

    this.authenticationService.logout(this.logoutSuccess.bind(this), this.logoutFail);
  }

  logoutSuccess():void {
    console.log("AuthenticatedPortalHeaderComponent.logoutSuccess() starts.");
    this.router.navigate(['/']);
  }

  logoutFail(e:any):void {
    console.error("AuthenticatedPortalHeaderComponent.logoutFail() - e: " + JSON.stringify(e));

    if(e.hasOwnProperty("errorMessage")) {
      alert(e['errorMessage']);
    } else {
      alert("Logout failed, please try again later.");
    }

  }
}
