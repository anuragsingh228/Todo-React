import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

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

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })

  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }


  addTodo = (tittle) => {
    const newTodo = {
      id: 4,
      tittle,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />

        </div>
      </div>
    );
  }
}

export default App;
