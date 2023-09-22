import { Component, Input } from '@angular/core';
import { Joke } from '../entitites/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input() joke:Joke | undefined;

  /**
   *
   */
  
  


}
