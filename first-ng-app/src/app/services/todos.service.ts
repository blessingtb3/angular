import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',//enabling the service to be used in the whole application
})

export class TodosService {

  //array of todo items
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

  constructor() { }
}
