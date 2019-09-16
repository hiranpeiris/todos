import React, { Component } from "react";
import uuid from "uuid/v4";

class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const todo = {
      id: uuid(),
      title: this.state.title,
      completed: false
    };
    this.props.addTodo(todo);

    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <form style={styles.todoForm} onSubmit={this.onSubmit}>
        <input
          style={styles.todoInput}
          type="text"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input style={styles.todoButton} value="Add" type="submit" />
      </form>
    );
  }
}

const styles = {
  todoForm: {
    display: "flex",
    padding: "10px"
  },
  todoInput: {
    flex: "10",
    padding: "5px"
  },
  todoButton: {
    flex: "1",
    margin: "5px"
  }
};

export default AddTodo;
