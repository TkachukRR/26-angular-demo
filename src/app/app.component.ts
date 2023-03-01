import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular HTTP client';

  todos: Array<Todo> = [];
  todoTitle = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe((todoList) => {
        console.log(todoList);
        this.todos = todoList;
      });
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false,
    };

    this.http
      .post<Todo>('https://jsonplaceholder.typicode.com/todos', {
        ...newTodo,
      })
      .subscribe((todo) => {
        console.log(todo);
        this.todos.push(todo);
        this.todoTitle = '';
      });
  }
}
