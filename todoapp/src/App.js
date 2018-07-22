import React, { Component } from 'react';
import './App.css';

import EnterField from './components/EnterField';
import TodoList from './components/TodoList';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      todolist : [{id : 0, content : 'testing react', complete : true}, {id : 1, content : 'create stores', complete : false}]
    }
  }

  render() {
    const { todolist } = this.state;

    return (
      <div className="App">
        <h1>Todos </h1>
        <TodoList todolist={todolist}/>
        <EnterField />
      </div>
    );
  }
}

export default App;
