import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})

export class TodosComponent implements OnInit{
  todoService = inject(TodosService);//dependency injecting the TodosService
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    //console.log(this.todoService.todoItems);//logging the list of items
    //this.todoItems.set(this.todoService.todoItems);//WORKING WITH THE HARD CODED TODOS setting the value

    this.todoService
      .getTodosFromAPi() 
      .pipe(//ysing the pipe method to handle errors
        catchError((error) => {
          console.log(error);
          throw error;
        })
      )
      .subscribe((todos) => {//using the subscribe method to get the todos
        this.todoItems.set(todos);//assigning the todoItems to the fetched todos
      })
  }
}
