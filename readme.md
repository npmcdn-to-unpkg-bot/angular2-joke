Angular 2 Getting Started with jokes
---
Angular 2 getting started with jokes. Using API from http://www.icndb.com/api/.

Setup
------
1. Setup your environment follow the instruction in https://angular.io/docs/ts/latest/quickstart.html#!#devenv.
2. Run *npm install* to install required dependencies.
3. Run *npm start* to launch a dev server and watch mode.

Steps
------
Angular 2 Joke Checklist
Getting started with jokes checklist.
joke api explanation: http://www.icndb.com/api/


1. Setup
    1. npm start
    2. brief project structure explain
2. Bootstrapping application
    1. bootstrapping
    2. file naming
3. 1st component - joke-app: display title on page
    1. introduce selector, template
4. Display joke of the day on joke-app.
    1. using constant
    2. create interface using according to api http://api.icndb.com/jokes/random
    3. extend interface
    4. import interface
    5. refactor to joke service
    6. introduce constructor
    7. implement OnInit life cycle hook
    8. introduce providers
    9. using promise
    10. introduce \*ngIf directive
    11. using http and observable, and HTTP_PROVIDERS, and include src file
5. 2nd component - joke: move joke of the day to this new component
    1. introduce templateUrl
    2. introduce styles and styleUrls
6. Routing - adding routing to joke-app
    1. introduce route config, use as default and include src file
    2. base href strategy
    3. introduce route-outlet, routeLink in html
    4. refactor joke in joke-app to “dashboard” route
7. 3rd component - categories: display joke categories and list of joke under the selected category
    1. create category interface according to api http://api.icndb.com/categories
    2. categories list service according to http://api.icndb.com/categories
    3. create routing link
    4. introduce async pipe
    5. introduce \*ngFor directive and #
    6. introduce event (), o’clock show joke list under the selected category
    7. joke list api http://api.icndb.com/jokes/random/5?limitTo=[nerdy]
8. 4th component - jokes - move the joke list to jokes component
    1. introduce inputs
9. 5th component - custom-joke: allow customisation of joke with user first name and last name
    1. create form
    2. create Person interface
    3. introduce ngModel [()]
    4. create custom joke according to api http://api.icndb.com/jokes/random?firstName=Adam&lastName=Sandler
    5. add reset button
    6. introduce ngSubmit()
    7. introduce ngForm
    8. introduce ngControl and validation
    9. introduce #spy and validation css class
    10. introduce uppercase pipe
    11. introduce [innerHtml]
10. Custom pipe - highlight: bold the selected text on the fly
    1. implement PipeTransform
    2. use this pipe in custom joke
11. Side challenge for yourself
    1. refactor hyperlinks of the categories component
        1. make a new route to call /categories/:selectedCategory
        2. when clicks on the hyperlink, redirect user to new page with list of joke, pass only category name
        3. add a back button on the joke list page
    2. style it nicely with responsive framework of your choice. e.g. bootstrap, mdl, foundation, etc.
