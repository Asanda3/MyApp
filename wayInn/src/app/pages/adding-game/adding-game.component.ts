import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router service

@Component({
  selector: 'app-adding-game',
  templateUrl: './adding-game.component.html',
  styleUrls: ['./adding-game.component.scss']
})
export class AddingGameComponent {
  // Inject Router in the constructor
  constructor(private router: Router) {}

  navigateToAdding() {
    this.router.navigate(['/adding-game']); // Correctly use the Router service
  }
}
