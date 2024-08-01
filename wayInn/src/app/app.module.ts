import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SinginPageComponent } from './pages/singin-page/singin-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpPageComponent } from './pages/SignUpPage/SignUpPage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NumbersContentComponent } from './pages/numbers-content/numbers-content.component';
import { NumberGameComponent } from './pages/number-game/number-game.component';
import { SecondNumberGameComponent } from './pages/second-number-game/second-number-game.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SinginPageComponent,
    SignUpPageComponent,
    HomepageComponent,
    ToolbarComponent,
    NavbarComponent,
    NumbersContentComponent,
    NumberGameComponent,
    SecondNumberGameComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
