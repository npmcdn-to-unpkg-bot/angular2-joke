import {ResultBase} from './result-base.interface';
import {Joke} from './joke.interface';

export interface JokeResult extends ResultBase {
  value: Joke
}
