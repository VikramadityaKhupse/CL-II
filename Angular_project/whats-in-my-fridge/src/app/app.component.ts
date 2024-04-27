import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'I am Hungry! :(';
  firstname: String ="";

  constructor(){
    setTimeout(() => {

      this.title = 'What\'s in my fridge!?';
      
    }, 3000);
  }
}
