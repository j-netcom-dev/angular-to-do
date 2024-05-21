import { BehaviorSubject } from 'rxjs';
import { TodoType } from '../types/todo.type';
import { ElementRef, Injectable, ViewChild } from '@angular/core';



@Injectable({
  providedIn: 'root',
})

export class TodoService{
  @ViewChild('todo') inputRef!: ElementRef;
  field =null;
  private todosSubject: BehaviorSubject<TodoType[]> = new BehaviorSubject<TodoType[]>([]);
  todos$ = this.todosSubject.asObservable();

  constructor() {
    this.field =this.inputRef?.nativeElement;
    if (typeof window !== 'undefined' && window.localStorage) 
      this.todosSubject.next(JSON.parse(localStorage.getItem('todos') || JSON.stringify([])));
  }

  save(todo: string) {
    const currentTodos = this.todosSubject.value;
    const updatedTodos = [...currentTodos, { name: todo.trim(), complete: false }];
    this.todosSubject.next(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  update(index: number, updatedTodo: TodoType) {
    const currentTodos = this.todosSubject.value;
    currentTodos[index] = {...currentTodos[index], ...updatedTodo};
    this.todosSubject.next(currentTodos);
    localStorage.setItem('todos', JSON.stringify(currentTodos));
  }

  remove(index: number) {
    const currentTodos = this.todosSubject.value;
    currentTodos.splice(index, 1);
    this.todosSubject.next(currentTodos);
    localStorage.setItem('todos', JSON.stringify(currentTodos));
  }
}