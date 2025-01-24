import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  /*templateUrl: 
  './app.component.html'*/
  template:`
  <h1>Hello Blessing, welcome to {{ title}} </h1>
  <p>This is our paragraph</p>
  `,
  /*styleUrl: './app.component.scss'*/
  //The styling applied below will only apply in this comoponent and won't be leaked outside of this file
  styles:[`
    p{
      background-color: red;
    }
  `]
})
export class AppComponent {//This class is used to create the angular application
  title = 'first-ng-app';
}
