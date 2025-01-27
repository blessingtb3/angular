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
    - Library 
    - Not have CLI
    - Requires additional packages such as axios for http requests, etc


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
#select SCSS
#no to Server-Side Rendering (SSR)


