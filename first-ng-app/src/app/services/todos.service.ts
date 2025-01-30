import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',//enabling the service to be used in the whole application
})

export class TodosService {

  http = inject(HttpClient);

  //getting and returning the todo items from an API endpoint using the HttpClient service
  getTodosFromAPi(){
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }

  /* Hard coding the array of todo items
  todoItems: Array<Todo> = [

    {
      title: 'groceries',
      id: 0,
      userId: 1,
      completed: false
    },

    {
      title: 'car wash',
      id: 1,
      userId: 1,
      completed: false
    }
  ];

  constructor() { }*/
}
