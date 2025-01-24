/*This file generates or creates the angular application using the app component*/

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)//This function is used to create the angular application
  .catch((err) => console.error(err));//This function is used to catch the error if any error occurs
