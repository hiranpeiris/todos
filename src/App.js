import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
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

  onDelete = todo => {
    this.setState(previousSate => {
      return {
        todos: previousSate.todos.filter(t => t.id !== todo.id)
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <br></br>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
