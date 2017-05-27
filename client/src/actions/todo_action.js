export default class TodoAction{
    static GET_TODO = 'GET_TODO';
  
    static getTodo(todos){
        return {
            type: TodoAction.GET_TODO,
            todos
        }
    }
}