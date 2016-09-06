import {TODOS} from './mock-todos';
import {Injectable} from 'angular2/core';
import {Todo} from './todo';

@Injectable()
export class TodoService {
    getTodos() {
        return Promise.resolve(TODOS);
    }
}