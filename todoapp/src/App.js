import React, { Component } from 'react';
import './App.css';
import EnterField from './components/EnterField';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList todolist={[{id : 0, content : 'testing react', complete : false}]}/>
        <EnterField />
      </div>
    );
  }
}

export default App;
