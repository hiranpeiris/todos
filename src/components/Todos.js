import React, { Component } from "react";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => {
      return <h2>{todo.title}</h2>;
    });
  }
}

export default Todos;
