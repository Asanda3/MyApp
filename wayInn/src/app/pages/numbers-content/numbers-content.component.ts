import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-numbers-content',
  templateUrl: './numbers-content.component.html',
  styleUrls: ['./numbers-content.component.scss']
})
export class NumbersContentComponent {

  constructor(private router: Router) {}

  navigateToNumberGame() {
    this.router.navigate(['/number-game']);
  }

  playSound(number: number) {
    let audioSrc: string;

    // Determine the audio source based on the number
switch (number) {
  case 0:
    audioSrc = '/assets/audio/1f1785ea-4ff5-11ef-b04c-bea018e9698a.mp3';
    break;
  case 1:
    audioSrc = '/assets/audio/73f05e54-4ff8-11ef-97db-92a1b9c4e8bd.mp3';
    break;
  case 2:
    audioSrc = '/assets/audio/2a2d912a-4ffc-11ef-b1f9-8a089d90f3fd.mp3';
    break;
  case 3:
    audioSrc = '/assets/audio/6282a0f6-4ffc-11ef-9369-bea018e9698a.mp3';
    break;
  case 4:
    audioSrc = '/assets/audio/849bf282-4ffc-11ef-9369-bea018e9698a.mp3';
    break;
  case 5:
    audioSrc = '/assets/audio/a3240956-4ffc-11ef-9369-bea018e9698a.mp3';
    break;
  case 6:
    audioSrc = '/assets/audio/c83f6708-4ffc-11ef-9267-92a1b9c4e8bd.mp3';
    break;
  case 7:
    audioSrc = '/assets/audio/ea696c66-4ffc-11ef-b4fc-bea018e9698a.mp3';
    break;
  case 8:
    audioSrc = '/assets/audio/0c4fe0bc-4ffd-11ef-a8a3-8a089d90f3fd.mp3';
    break;
  case 9:
    audioSrc = '/assets/audio/38b3b840-4ffd-11ef-9e92-869a1e64a9ef.mp3';
    break;
  case 10:
    audioSrc = '/assets/audio/732c4f32-4ffd-11ef-b1f9-8a089d90f3fd.mp3';
    break;
  default:
    console.error('No sound available for number:', number);
    return; // Exit the method if no sound is available
}

    // Play the determined sound
    const audio = new Audio(audioSrc);
    audio.load();
    audio.play().catch(error => {
      console.error('Error playing sound:', error);
    });

    // Add pop-up effect class
    const kbdElements = document.querySelectorAll('.kbd');
    kbdElements.forEach((element: any) => {
      if (element.textContent.trim() === number.toString()) {
        element.classList.add('clicked');
        setTimeout(() => element.classList.remove('clicked'), 600); // Match animation duration
      }
    });
  }
}








