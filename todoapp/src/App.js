
//#region Imports
import React, { Component } from 'react';
import './App.css';

// stores
import TodoStore from './stores/TodoStore';

// actions
import * as TodoAction from './actions/TodoAction';

// components
import EnterField from './components/EnterField';
import TodoList from './components/TodoList';
//#endregion

class App extends Component {

  //#region Constructor
  constructor(props){
    super(props)

    this.state = {
      newEvent : '',
      todolist : TodoStore.getAll()
    }
    
    // bind methods for STOREs
    this.getTodoList = this.getTodoList.bind(this)

    // bind methods for ACTIONs
    this.createToDo = this.createToDo.bind(this)
  }  
  //#endregion


  //#region Method for ACTIONS 
  //        event tells ACTION to dispatch state variables 
  createToDo(content){
    TodoAction.createTodoAction(content);
  }
  //#endregion


  //#region Method for STORES 
  //        enable STORE to change state variables
  getTodoList(){
    this.setState({
      todolist : TodoStore.getAll()
    })
  }
  //#endregion


  //#region React Life Cycles 
  //        where STORE changes the state variables
  componentDidMount(){
    TodoStore.on("change", this.getTodoList)
  }

  componentWillUnmount(){
    TodoStore.removeListener("change", this.getTodoList)
  }
  //#endregion


  //#region Render
  render() {
    const { todolist } = this.state;

    return (
      <div className="App">
        <h1>Todos </h1>
        <TodoList todolist={todolist}/>
        <EnterField />
        <input type='text' placeholder='testing todo' value={this.state.newEvent} onChange={(e) => this.setState({newEvent : e.target.value})}/>
        <button onClick={() => this.createToDo(this.state.newEvent)}>TEST CREATE TODO</button>
      </div>
    );
  }
  //#endregion
}

export default App;
