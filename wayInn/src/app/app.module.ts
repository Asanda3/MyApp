import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SinginPageComponent } from './pages/singin-page/singin-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpPageComponent } from './pages/SignUpPage/SignUpPage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SinginPageComponent,
    SignUpPageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
