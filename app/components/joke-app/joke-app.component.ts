import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {JokeService} from '../../services/joke-service';
import {JokeResult} from '../../interfaces/joke-result.interface';
import {JokeComponent} from '../joke/joke.component';
import {CategoriesComponent} from '../categories/categories.component';
import {CustomJokeComponent} from '../custom-joke/custom-joke.component';


@Component({
  selector: 'joke-app',
  template: `
      <h1>Angular 2: Getting Started with jokes!</h1>
      <nav>
        <a [routerLink]="['Dashboard']">Dashboard</a> |
        <a [routerLink]="['Categories']">Categories</a> |
        <a [routerLink]="['Customize']">Customize Joke</a>
      </nav>
      <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: JokeComponent,
    useAsDefault: true
  },
  {
    path: '/categories',
    name: 'Categories',
    component: CategoriesComponent
  },
  {
    path: '/customize',
    name: 'Customize',
    component: CustomJokeComponent
  }
])

export class JokeAppComponent {
}
