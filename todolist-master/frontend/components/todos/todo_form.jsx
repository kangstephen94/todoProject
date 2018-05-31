import React from 'react';
import { uniqueId } from '../../util/id_generator';

 class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>Title:
        <input onChange ={this.update('title')}
          ref="title"
          value={this.state.title}
          placeholder="What do you need to do?"
          required/>
      </label>
        <label>Body:
        <textarea onChange ={this.update('body')}
          ref="body"
          value={this.state.body}
          placeholder="Describe your task"
          cols='20'
          rows='5'
          required></textarea>
      </label>
      <button className="create-button">Create Todo</button>
      </form>
    </div>

    );
  }
}

export default TodoForm;
