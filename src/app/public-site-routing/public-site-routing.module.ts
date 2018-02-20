import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from "../public-site/login-page/login-page.component";
import {PublicSiteModule} from "../public-site/public-site.module";
import {PublicSitePageComponent} from "../public-site/public-site-page/public-site-page.component";
import {WelcomePageComponent} from "../public-site/welcome-page/welcome-page.component";
import {RouterModule, Routes} from "@angular/router";

const routes:Routes = [
  {path:'public',
    component: PublicSitePageComponent,
    children: [
      {path:'welcome', component:WelcomePageComponent},
      {path:'login', component:LoginPageComponent},
      {path:'', component:WelcomePageComponent}
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    PublicSiteModule,

    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class PublicSiteRoutingModule { }
