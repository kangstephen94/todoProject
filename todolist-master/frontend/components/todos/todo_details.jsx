import React from 'react';

class TodoDetails extends React.Component {

  render () {
    const {todo, removeTodo} = this.props;


    return (
      <div>
      <p> {todo.body}</p>
      <button onClick={() => removeTodo(todo)}>Delete Todo
        </button>
      </div>
    );

  }

}


export default TodoDetails;
