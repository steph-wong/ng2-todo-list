import { Component, OnInit } from 'angular2/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';
import { TodosSortPipe } from './sort-pipe.component'

@Component({
    selector: 'todo-app',
    templateUrl: "./app/todo-list.component.html",
    providers: [ TodoService ],
    pipes: [ TodosSortPipe ]
})
export class AppComponent implements OnInit{

    public todos: Todo[];
    public edited = false;
    public changes = 0;
    constructor(private _todoService: TodoService) { };

    getTodos() {
        this._todoService.getTodos().then(todos => this.todos = todos);
    }

    ngOnInit() {
        this.getTodos();
    }

    addNewTodo(): void {
        this.todos = this.todos.concat(
            {"name": "click to edit", completed: false}
            );
        this.saveTodos();
    }

    saveTodos(): void {
       this.edited = true;
    }

    editTodo(todo: Todo): void {
        this.saveTodos();
    }

    deleteTodo(i: number): void {
        this.todos.splice(i, 1);
        this.saveTodos();
    }

    completeTodo(todo: Todo): void {
      todo.completed = !todo.completed;
    }

}