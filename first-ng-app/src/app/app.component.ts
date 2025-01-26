import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  /*templateUrl: 
  './app.component.html'*/
  template:`
  <app-header/>
  <main>
    <app-home/>
  </main>
  `,
  /*styleUrl: './app.component.scss'*/
  //The styling applied below will only apply in this comoponent and won't be leaked outside of this file
  styles:[`
    main{
      padding: 16px;
    }
  `]
})
export class AppComponent {//This class is used to create the angular application
  title = 'first-ng-app';
}
