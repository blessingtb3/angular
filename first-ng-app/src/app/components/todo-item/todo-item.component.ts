import { Component, inject, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],//importing the HighlightCompletedTodoDirective to use it in the template
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo = input.required<Todo>();//assigning the todo item to the todo model type
  todoToggled = output<Todo>();

  //this method will emit the todo item when the todo is clicked
  todoClicked() {
    this.todoToggled.emit(this.todo());
  }
 
}
