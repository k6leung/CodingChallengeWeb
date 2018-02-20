import { Component, OnInit } from '@angular/core';
import {UserSessionService} from "../site-common/session/user-session.service";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  isUserLoggedIn:boolean;

  constructor(private session:UserSessionService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.session.isUserLoggedIn();
  }

}
