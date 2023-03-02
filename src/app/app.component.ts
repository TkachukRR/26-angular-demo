import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular HTTP client';

  todos: Array<Todo> = [];
  todoTitle = '';
  loading = false;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false,
    };

    this.todosService.addTodo(newTodo).subscribe((todo) => {
      console.log(todo);
      this.todos.push(todo);
      this.todoTitle = '';
    });
  }

  fetchTodos() {
    this.loading = true;

    this.todosService.fetchTodos().subscribe((todoList) => {
      console.log(todoList);
      this.todos = todoList;
      this.loading = false;
    });
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id).subscribe((deletedTodo) => {
      console.log(deletedTodo);
      console.log(this.todos);
      this.todos = this.todos.filter((todo) => todo.id !== id);
      console.log(this.todos);
    });
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id).subscribe((todo) => {
      console.log(todo);
      // @ts-ignore
      this.todos.find((t) => t.id === todo.id).completed = true;
    });
  }
}
