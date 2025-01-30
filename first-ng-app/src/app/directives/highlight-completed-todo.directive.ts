import { Directive, effect, ElementRef, inject, input } from '@angular/core';//importing angular services

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})

//this directive will recieve if the todo is completed or not and will change the style of the element accordingly
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  el = inject(ElementRef);//injecting the ElementRef angular service

  stylesEffect = effect(() => {
    if(this.isCompleted()){//changing the style of the element when the element is completed
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#d3f9d8';
      this.el.nativeElement.style.color = '#6c757d';
    }else{
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = '#fff';
      this.el.nativeElement.style.color = '#000';
    }
  });
}





