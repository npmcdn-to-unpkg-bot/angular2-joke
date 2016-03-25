import {Component, OnInit} from 'angular2/core';
import {Joke} from '../../interfaces/joke.interface';


@Component({
  selector: 'jokes',
  template: `
    <div *ngIf="jokes">
      <h5>list of jokes</h5>
      <ul>
        <li *ngFor="#joke of jokes | async">{{joke.id}} - {{joke.joke}}</li>
      </ul>
    </div>
  `,
  styleUrls: ['app/components/joke/joke.component.css'],
  inputs: ['jokes'],
  providers: []
})
export class JokesComponent {
  jokes: Joke[];
}
