import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http'
import {Observable}     from 'rxjs/Observable';
import {Joke} from '../interfaces/joke.interface';
import {JokeResult} from '../interfaces/joke-result.interface';
import {JokesResult} from '../interfaces/jokes-result.interface';
import {JokeCategoriesResult} from '../interfaces/joke-categories-result.interface';

@Injectable()
export class JokeService {
  private url = 'http://api.icndb.com/';

  constructor(private _http: Http) { }

  getAsConstant(): JokeResult {
    // constant
    const result: JokeResult = {
      type: 'success',
      value: {
        id: 1,
        joke: 'I am super woman.'
      }
    };
    return result;
  }

  getAsPromise(): Promise<JokeResult> {
    // promise
    const result: JokeResult = {
      type: 'success',
      value: {
        id: 1,
        joke: 'I am super woman.'
      }
    };
    return Promise.resolve(result);
  }

  get(): Observable<JokeResult> {
    // observable
    // const result: JokeResult = {
    //   type: 'success',
    //   value: {
    //     id: 1,
    //     joke: 'I am super woman.'
    //   }
    // };
    // return Observable.of(result);
    return this._http.get(this.url + 'jokes/random')
      .map(response => response.json());
  }

  getCategories():Observable<string[]>{
    return this._http.get(this.url + 'categories')
      .map(response => {
        console.log(response);
        return (<JokeCategoriesResult>response.json()).value;
      });
  }

  getJokesByCategory(category:string):Observable<Joke[]> {
    const link = `${this.url}/jokes/random/5?limitTo=[${category}]`;
    return this._http.get(link)
      .map(response => {
        console.log(response);
        return (<JokesResult>response.json()).value;
      });
  }

  getCustomizeJoke(firstName:string, lastName:string):Observable<Joke> {
    const link = `${this.url}/jokes/random?firstName=${firstName}&lastName=${lastName}`;
    console.log(link);
    return this._http.get(link)
      .map(response => {
        return (<JokeResult>response.json()).value;
      });
  }
}
