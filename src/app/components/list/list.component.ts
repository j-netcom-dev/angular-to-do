import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoType } from '../../types/todo.type';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  todos: TodoType[] = [];
  current_page: number =1;
  constructor(private todoService: TodoService){}
  ngOnInit() {
    this.todoService.todos$.subscribe(todos => {
      this.todos = todos;
    });

  }

  toggleComplete(index: number){
    this.updateTodo(index, {complete: !this.todos[index].complete});
    
  }
  edit(index: number){
    const task =this.todos[index].name;
    console.log(task);
    

  }
  updateTodo(index: number, updatedTodo: TodoType) {
    this.todoService.update(index, updatedTodo);
  }

  removeTodo(index: number) {
    this.todoService.remove(index);
  }
}
