import TodoActions from '../actions/todo_action';
import axios from 'axios';

export default class TodoMiddleware{
    static create(todo){
        return dispatch => {
            axios.post('http://localhost:3050/api/todos', todo)
                .then(response => {
                    console.log(response);
                    if(response.status === 200){
                    dispatch(TodoMiddleware.getAllTodos());
                }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    static getAllTodos(){
        return dispatch => {
            axios.get('http://localhost:3050/api/todos')
                .then(response => {
                    dispatch(TodoActions.getTodo(response.data));
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    static editTodo(newData){
        return dispatch => {
            axios.put(`http://localhost:3050/api/todos/${newData._id}`, {todo: newData.todo})
                .then(response => {
                    console.log(response);
                    dispatch(TodoMiddleware.getAllTodos());
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    static deleteTodo(todo){
        return dispatch =>{
            axios.delete(`http://localhost:3050/api/todos/${todo._id}`)
                .then(response => {
                    console.log(response);
                    dispatch(TodoMiddleware.getAllTodos());
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
}