import React, { Component } from 'react';
import './App.css';


// stores
import TodoStore from './stores/TodoStore';

// components
import EnterField from './components/EnterField';
import TodoList from './components/TodoList';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      todolist : TodoStore.getAll()
    }
  }

  componentDidMount(){
    TodoStore.on("change", ()=>{
      this.setState({
        todolist : TodoStore.getAll()
      })
    })
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
