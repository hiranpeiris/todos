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
        completed: true
      },
      {
        id: 4,
        title: "Install Apex ledgends",
        completed: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Todos List</h1>
        <br></br>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
