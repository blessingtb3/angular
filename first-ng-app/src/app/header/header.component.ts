import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],//importing RouterLink to use it in our header component(specificalling in .html) to navigate to different routes
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  //providers: [TodosService]//providing TodosService to use it in our header component], just for example to use in our header component only...
})
export class HeaderComponent {
    //creating signal to bind in our header html file
    title = signal('My first Angular App');
}
