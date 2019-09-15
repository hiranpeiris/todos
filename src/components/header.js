import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div style={styles.header}>
        <h2>Todo List</h2>
      </div>
    );
  }
}

const styles = {
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center"
  }
}

export default Header;