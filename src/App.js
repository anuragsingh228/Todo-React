import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        tittle: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        tittle: "Dinner with friend",
        completed: true
      },
      {
        id: 3,
        tittle: "Meating with boss",
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
