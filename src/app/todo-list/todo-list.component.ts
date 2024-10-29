import { Component } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { NgFor } from '@angular/common';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, NgFor, FormsModule],
  providers: [TodoService],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todos: string[] = ["Get groceries","Book tickets","Keep next week plan ready"];
  todo: string = ""

  constructor(private todoService: TodoService) {
    this.todos = todoService.getTodos();
  }

  addItem = () => {
    console.log("Add item clicked");
    this.todoService.addTodo(this.todo);
    this.todo = "";
  }
}
