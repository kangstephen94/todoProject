import React from 'react';
import TodoDetails from './todo_details';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      detail: false
    };
    this.toggleTodo = this.toggleTodo.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  toggleTodo(e) {
  e.preventDefault();
  const toggledTodo = merge(
    {},
    this.props.todo,
    { done: !this.props.todo.done }
  );

   this.props.receiveTodo(toggledTodo);
}

  handleClick (e) {
    e.preventDefault();
    this.setState({detail: !this.state.detail});
  }

  render () {
    const {todo, removeTodo} = this.props;
    const {done} = todo;
    let details;
    if (this.state.detail) {
    details = <TodoDetails todo={todo} removeTodo={removeTodo} />;
    }

    return (
      <li>
        <div>
        <h3><a onClick={this.handleClick}>{todo.title}</a></h3>
          <button
              className={ done ? "done" : "undone" }
              onClick={ this.toggleTodo }>
              { done ? "Undo" : "Done" }
            </button>
      </div>
      {details}
      </li>
    );
  }
}


export default TodoListItem;
