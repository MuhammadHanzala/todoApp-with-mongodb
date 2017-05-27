import TodoAction from '../actions/todo_action';

export default function (state = [], action){
    switch(action.type){
        case TodoAction.GET_TODO:
            return action.todos;
        default:
            return state;
    }
} 