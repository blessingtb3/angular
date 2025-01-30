import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';


//pipe to take the entire array of todos and filter them based on the search term
@Pipe({
  name: 'filterTodos',
  standalone: true
})
export class FilterTodosPipe implements PipeTransform {

  //function to use to make the pipe work
  //takes in the todos array and the search term, makes the terms lowercase and filters the todos based on the search term
  transform(todos: Todo[], searchTerm: string): Todo[] {
    if(!searchTerm){
      return todos;
    }
    const text = searchTerm.toLowerCase();
    return todos.filter(todo => {
      return todo.title.toLowerCase().includes(text);
      })
  }

}
