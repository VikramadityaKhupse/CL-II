import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'I am Hungry! :(';

  constructor(){
    setTimeout(() => {

      this.title = 'What\'s in my fridge!?';
      
    }, 3000);
  }
}
