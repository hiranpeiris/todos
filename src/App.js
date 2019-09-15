import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Buy a Xbox one x",
        completed: false
      },
      {
        id: 2,
        title: "Buy Halo 5",
        completed: false
      },
      {
        id: 3,
        title: "Install Warframe",
        completed: false
      },
      {
        id: 4,
        title: "Install Apex ledgends",
        completed: false
      }
    ]
  };

  markComplete = todo => {
    console.log(todo);
    this.setState(previousSate => {
      return {
        todos: previousSate.todos.map(t => {
          if (t.id === todo.id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return t;
          }
        })
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Todos List</h1>
        <br></br>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
