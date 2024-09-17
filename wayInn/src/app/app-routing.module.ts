import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NumbersContentComponent } from './pages/numbers-content/numbers-content.component';
import { NumberGameComponent } from './pages/number-game/number-game.component';
import { SinginPageComponent } from './pages/singin-page/singin-page.component';
import { SignUpPageComponent } from './pages/SignUpPage/SignUpPage.component';
import { SecondNumberGameComponent } from './pages/second-number-game/second-number-game.component';
import { AddingGameComponent } from './pages/adding-game/adding-game.component';




const routes: Routes = [

  { path: "", redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'singin', component: SinginPageComponent },
  { path: 'signUpPage', component: SignUpPageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'numbers-content', component: NumbersContentComponent},
  { path: 'number-game', component: NumberGameComponent },
  {path:'second-game', component:SecondNumberGameComponent},
  {path: "**", redirectTo: 'landing-page'} ,// Wildcard route for a 404 page
  {path: 'adding-game', component:AddingGameComponent}
];




@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
