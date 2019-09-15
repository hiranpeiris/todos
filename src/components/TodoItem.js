import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  render() {
    return (
      <div
        style={{
          ...styles.todo,
          textDecoration: this.props.todo.completed ? "line-through" : "none"
        }}
      >
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

// Prop types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const styles = {
  todo: {
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted"
  }
};

export default TodoItem;
