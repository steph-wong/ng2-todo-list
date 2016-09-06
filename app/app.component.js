System.register(['angular2/core', './todo.service', './sort-pipe.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1, sort_pipe_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (sort_pipe_component_1_1) {
                sort_pipe_component_1 = sort_pipe_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_todoService) {
                    this._todoService = _todoService;
                    this.edited = false;
                    this.changes = 0;
                }
                ;
                AppComponent.prototype.getTodos = function () {
                    var _this = this;
                    this._todoService.getTodos().then(function (todos) { return _this.todos = todos; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getTodos();
                };
                AppComponent.prototype.addNewTodo = function () {
                    this.todos = this.todos.concat({ "name": "click to edit", completed: false });
                    this.saveTodos();
                };
                AppComponent.prototype.saveTodos = function () {
                    this.edited = true;
                };
                AppComponent.prototype.editTodo = function (todo) {
                    this.saveTodos();
                };
                AppComponent.prototype.deleteTodo = function (i) {
                    this.todos.splice(i, 1);
                    this.saveTodos();
                };
                AppComponent.prototype.completeTodo = function (todo) {
                    todo.completed = !todo.completed;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-app',
                        templateUrl: "./app/todo-list.component.html",
                        providers: [todo_service_1.TodoService],
                        pipes: [sort_pipe_component_1.TodosSortPipe]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map