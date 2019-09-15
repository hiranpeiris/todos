import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  render() {
    const { title, completed } = this.props.todo;

    return (
      <div
        style={{
          ...styles.todo,
          textDecoration: completed ? "line-through" : "none"
        }}
      >
        <p>
          <input style={styles.checkbox} type="checkbox" onChange={this.props.markComplete}/>
          {title}
          <img style={styles.delete} src={require('../assets/deletebutton.png')} onClick={this.props.onDelete}/>
        </p>
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
  },
  checkbox: {
    marginRight: "5px"
  },
  delete: {
    width: "20px",
    height: "20px",
    float: "right",
    cursor: "pointer"
  }
};

export default TodoItem;
