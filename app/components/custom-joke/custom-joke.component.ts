import {Component, OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {JokeService} from '../../services/joke-service';
import {Observable} from 'rxjs/Observable';
import {JokeCategoriesResult} from '../../interfaces/joke-categories-result.interface';
import {Joke} from '../../interfaces/joke.interface';
import {Person} from '../../interfaces/person.interface';
import {JokesComponent} from '../jokes/jokes.component';
import {HighlightPipe} from '../../pipes/highlight.pipe';

@Component({
  selector: 'categories',
  templateUrl: 'app/components/custom-joke/custom-joke.component.html',
  providers: [JokeService],
  directives:[],
  pipes: [HighlightPipe]
})
export class CustomJokeComponent implements OnInit {
  joke: Observable<string>;

  model:Person = {
    firstName: 'Adam',
    lastName: 'Sandler'
  };

  constructor(private _jokeService: JokeService) {
  }

  ngOnInit() {
  }

  onSubmit(form:Person) {
    this.joke = this
      ._jokeService.getCustomizeJoke(form.firstName, form.lastName)
      .map(x => {
        console.log(x);
        return x.joke;
    });
  }

  onReset() {
    this.model.firstName = '';
    this.model.lastName = '';
  }

}
