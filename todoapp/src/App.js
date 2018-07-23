
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

    // states are initialized from STOREs
    this.state = {
      newTask : TodoStore.getNewTask(),
      todolist : TodoStore.getTodoList()
    }
    
    // bind methods for ACTIONs
    this.actionEditNewTask = this.actionEditNewTask.bind(this)
    this.actionCreateToDo = this.actionCreateTodo.bind(this)

    // bind methods for STOREs
    this.storeSetTodoList = this.storeSetTodoList.bind(this)
    this.storeSetNewTask = this.storeSetNewTask.bind(this)
  }  
  //#endregion


  //#region Method for ACTIONS 
  //        event tells ACTION to dispatch state variables 
  actionEditNewTask(value){
    TodoAction.editNewTaskAction(value);
  }
  actionCreateTodo(content){
    TodoAction.createTodoAction(content);
  }
  //#endregion


  //#region Method for STORES 
  //        enable STORE to change state variables
  storeSetNewTask(){
    this.setState({
      newTask : TodoStore.getNewTask()
    })
  }
  storeSetTodoList(){
    this.setState({
      todolist : TodoStore.getTodoList()
    })
  }
  //#endregion


  //#region React Life Cycles 
  //        where STORE changes the state variables
  componentDidMount(){
    TodoStore.on("change", this.storeSetNewTask)
    TodoStore.on("change", this.storeSetTodoList)
  }

  componentWillUnmount(){
    TodoStore.removeListener("change", this.storeSetNewTask)
    TodoStore.removeListener("change", this.storeSetTodoList)
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
        <input type='text' placeholder='testing todo' value={this.state.newTask} onChange={(e) => this.actionEditNewTask(e.target.value)}/>
        <button onClick={() => this.actionCreateTodo(this.state.newTask)}>TEST CREATE TODO</button>
      </div>
    );
  }
  //#endregion
}

export default App;
