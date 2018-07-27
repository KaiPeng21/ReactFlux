
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
    this.actionReloadTodo = this.actionReloadTodo.bind(this)
    this.actionEditNewTask = this.actionEditNewTask.bind(this)
    this.actionCreateToDo = this.actionCreateTodo.bind(this)
    this.actionDeleteTodo = this.actionDeleteTodo.bind(this)
    this.actionCompleteTodo = this.actionCompleteTodo.bind(this)

    // bind methods for STOREs
    this.storeSetTodoList = this.storeSetTodoList.bind(this)
    this.storeSetNewTask = this.storeSetNewTask.bind(this)
  }  
  //#endregion


  //#region Method for ACTIONS 
  //        event tells ACTION to dispatch state variables 
  actionReloadTodo(){
    TodoAction.reloadTodoAction()
  }
  actionEditNewTask(value){
    TodoAction.editNewTaskAction(value)
  }
  actionCreateTodo(content){
    TodoAction.createTodoAction(content)
  }
  actionDeleteTodo(id){
    TodoAction.deleteTodoAction(id)
  }
  actionCompleteTodo(id){
    TodoAction.completeTodoAction(id)
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
        <TodoList title='Incomplete List' todolist={todolist.filter((val) => !val.complete)} removeTodo={this.actionDeleteTodo} completeTodo={this.actionCompleteTodo}/>
        <EnterField createTodo={this.actionCreateTodo} newTask={this.state.newTask} editNewTask={this.actionEditNewTask}/>
        <TodoList title='Complete List' todolist={todolist.filter((val) => val.complete)} removeTodo={this.actionDeleteTodo} completeTodo={this.actionCompleteTodo}/>
      </div>
    );
  }
  //#endregion
}

window.onload = new App().actionReloadTodo()

export default App;
