import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {  //implementes OnInit is added to implement the ngOnInit method which is a lifecycle hook and runs when the component is initialized
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);//initializing the todoItems signal with an empty array of Todo type

  //printing the todoItems array in the console when the component is initialized(onInit())
  ngOnInit(): void {
    console.log(this.todoService.todoItems);
    this.todoItems.set(this.todoService.todoItems);//setting the todoItems signal with the todoItems array from the service
  }
}
