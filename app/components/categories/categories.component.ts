import {Component, OnInit} from 'angular2/core';
import {JokeService} from '../../services/joke-service';
import {Observable} from 'rxjs/Observable';
import {JokeCategoriesResult} from '../../interfaces/joke-categories-result.interface';
import {Joke} from '../../interfaces/joke.interface';
import {JokesComponent} from '../jokes/jokes.component';

@Component({
  selector: 'categories',
  templateUrl: 'app/components/categories/categories.component.html',
  providers: [JokeService],
  directives:[JokesComponent]
})
export class CategoriesComponent implements OnInit {

  categories: Observable<string[]>;
  jokes: Observable<Joke[]>;

  constructor(private _jokeService: JokeService) {
  }

  ngOnInit() {
    this.categories = this._jokeService.getCategories();
  }

  showJoke(category: string) {
    this.jokes = this._jokeService.getJokesByCategory(category);
  }

}
