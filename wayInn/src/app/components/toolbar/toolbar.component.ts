import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  showToolbar: boolean = true;

  constructor(private router: Router) { }
 

  goHome() {
    this.router.navigate(['/homepage']); // Navigates to the homepage
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkToolbarVisibility();
    });
  }

  checkToolbarVisibility() {
    const currentRoute = this.router.url;
    // Adjust these paths as needed
    const hiddenRoutes = ['/landing-page', '/singin', '/signUpPage'];
    
    this.showToolbar = !hiddenRoutes.includes(currentRoute);
  }
}
