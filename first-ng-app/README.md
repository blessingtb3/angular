# FirstNgApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.









































Frontend framework that allows you to build web applications 

Benefits of angular 
    - Faster development 
    - Faster code generation (CLI)
    - Unit test ready
    - Code reusability 

VS react 
    - Angular is a framework
    - Angular has a built in CLI
    - Has tools and packages included for small-medium scale apps 
    - Has better code style and scalability 

React 
    - Is more of like a small library Library 
    - Requires additional packages such as axios for http requests, etc
    - Not have CLI


Angular Core concepts: 
    - Components, Services 
    - Directive, Pipes 
    - Data binding, event handlers 
    - Http Module, Forms Module 
    - Routing, Animations
    - Testing and building for production

Creating an angular app
# install the @angular/cli
npm install -g @angular.cli

# check cli version 
ng --version 

# create an app 
ng new first-ng-app # optimally use --dry-run

# create an app with some configuration 
ng new first-ng-app --inline-styles --inline-template

# some of the other configurations
ng new first-ng-app --dry-run
#select SCSS(Sassy cascading style sheets, more advanced css)
#no to Server-Side Rendering (SSR)

Tips for the terminal 
# to run 
npm run

# to build 
npm build

# to run unit test
npm test





Components 
In Angular, a component is a core building block that controls part of the UI. It consists of a template (HTML), a class (TypeScript), and styles (CSS). Components are defined using the `@Component` decorator.

In this project we are going to create an app with a header component and a home component

# creting a component
ng g c <nameOfComponetn> # short form 
ng generate component header # full form 
# the above commands create inside the `src/app` folder

# OR  (in a nested directory)
ng g c components/header
# creates Header compoenent
# inside the `src/app/components` folder


# creating the home component
ng g c home





# Routing in angular
Angular is a single page application. Using routes, you can still define different pages that the user can navigate to. 
It also allows the browser to only load the js for the page that the user is on.
- Routing significantly prevents the web from reloading every time the user navigates to a different page by using routes, thus improving the performance of the app, and user experience.





# Angular Services 
    - Used to encapsulate data, making http calls, or performing any task that is not related directly to data rendering(in Ahsan's opinion)
    - Anything that has nothing to do with rendering or the UI…





# Dependency injection
    - ( https://www.freecodecamp.org/news/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f/ )
    - In software engineering, dependency injection is a technique whereby one object (or static method) supplies the dependencies of another object. A dependency is an object that can be used (a service).





# Making HTTP calls with Angular Services
 - Provide HTTP module/providers in the app config using provideHttpClient()
 - Inject the HttpClient service
 - Use the http methods(e.g. get)





 # Angular Directives
  - Allow you to add additional behavior to elements in our Angular applications.

Types of Angular Directives
    - Components - every component is a directive
    - Attribute directives - change some things about the existing html elements, eg adding a class, an attribute to the element, binding come click events…
    - Structural directives - add or remove some things to and from a DOM based on some conditions
    - Creating a directive 
ng g directive directives/highlight-completed-todo





# Angular Pipes
- Used to transform data right in the templates, e.g. making data in uppercase, currency, date format, time format…
- to create: ng pipe <dir>







# Angular data-binding
    - Binding data between the TypeScript class of the component, and the component's template
    - The way you bind the data from your typescript class of angular to the template
    - How do you make them communicate with each other and render data dynamically if it changes
    - Done with signals or standard variables






# Reference
This application was created with the help of Code with Ahsan from youtube.