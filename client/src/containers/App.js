import React from 'react';
import { connect } from 'react-redux'
import TodoMiddleware from '../middlewares/todo_middlewares';
import TextField from 'material-ui/TextField';
// import axios from 'axios';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// import Dialog from 'material-ui/Dialog';


function mapDispatchToProps(dispatch) {
  return {
    create: (todo) => dispatch(TodoMiddleware.create(todo)),
    getAllTodos: () => dispatch(TodoMiddleware.getAllTodos()),
    delete: (todo) => dispatch(TodoMiddleware.deleteTodo(todo)),
    edit: (newData) => dispatch(TodoMiddleware.editTodo(newData)),
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}



class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }
  componentWillMount() {
    this.props.getAllTodos();
  }

  // handleOpen = () => {
  //   this.setState({ open: true });
  // };

  // handleClose = () => {
  //   this.setState({ open: false });
  // };
  //  edit = (todo) => {
  //     var editedTodo = this.refs.editTodo.getValue();
  //     const newData = {...todo, todo};
  //      if(editedTodo !== null && editedTodo !== '' && editedTodo !== todo.todo){
  //     this.props.edit(newData);
  //     this.setState({ open: false });
  //      }  
  //   };


  onSubmit(e) {
    e.preventDefault();
    console.log(this.refs.todo.getValue());
    var todo = this.refs.todo.getValue();
    this.props.create({ todo })
    console.log(this.props.todos);
    this.refs.todo.value = '';
  }
  render() {



    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} style={{ textAlign: 'center' }}>
          <TextField hintText="Hint Text" ref="todo" />
        </form>
          {this.props.todos.map(todo => {
          var date = new Date();
            return (

              <Card  key={todo._id}>
                <CardHeader
                  title={todo.todo}
                  subtitle={date}
                  actAsExpander={false}
                  showExpandableButton={false}
                />
                <CardActions>
                  <FlatButton label="Edit" primary={true} onTouchTap={() => this.handleOpen(todo)} />
                  <FlatButton label="Delete" secondary={true} onTouchTap={() => this.props.delete(todo)} />
                </CardActions>
              </Card>
           


            )

          })}
        
      </div>
    )
  }
}





export default connect(mapStateToProps, mapDispatchToProps)(Input);
