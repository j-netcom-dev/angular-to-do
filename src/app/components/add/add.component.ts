import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  styleUrl: './add.component.scss',
  templateUrl: './add.component.html',
})

export class AddComponent {
  constructor(private service: TodoService) {}
  @ViewChild('todo') fieldRef!: ElementRef;
  
  save(){
    const field =this.fieldRef.nativeElement;
    const value =field.value.trim();
    if(!value) return;
    this.service.save(value);
    field.value ='';
  }
}
