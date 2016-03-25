import {Component, OnInit} from 'angular2/core';
import {JokeService} from '../../services/joke-service';
import {JokeResult} from '../../interfaces/joke-result.interface';


@Component({
  selector: 'joke',
  templateUrl: 'app/components/joke/joke.component.html',
  styleUrls: ['app/components/joke/joke.component.css'],
  providers: [JokeService]
})
export class JokeComponent implements OnInit {
  jokeResult: JokeResult;
  constructor(private _jokeService: JokeService) {

  }

  ngOnInit() {
    // Constant
    // this.jokeResult = this._jokeService.get();
    // console.log(this.jokeResult);

    // Promise
    // this._jokeService.get().then(response => {
    //   this.jokeResult = response;
    // });

    // Observable
    this._jokeService
      .get()
      .subscribe(response => {
        console.log(response);
        this.jokeResult = response;
      });
  }
}
