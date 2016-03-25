import {ResultBase} from './result-base.interface';
import {Joke} from './joke.interface';

export interface JokesResult extends ResultBase {
  value: Joke[]
}
