import { Component, Input, OnInit } from '@angular/core';
import { JokeService } from './services/joke.service';
import { Joke } from './entitites/joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count:number = 0;
  title = 'dad-jokes-front';
  joke:Joke|undefined;


  /**
   *
   */
  constructor(private jokeService:JokeService) {
    
  }
  ngOnInit(): void {
    this.jokeService.GetJokeCount().subscribe(
      (result)=> {
        this.count = result.count;
      });
  }  

  onButtonClick(){
    this.jokeService.GetRandomJoke().subscribe(
      (result) =>{
       this.joke = result.joke;
       console.log(this.joke);
    });
  }
  
}
