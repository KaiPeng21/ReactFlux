// STORE
// - STORE handles changes to the 'state' variables in react COMPONENTs
// - STORE works as an event emitter, and tells the COMPONENTs to update their states after the components rendered
// - STORE registers its handles to the DISPATCHER, and allows the DISPATCHER to dispatch instructions when the 'state' variables in COMPONENTs needs to be updated

// work as an event emitter
import { EventEmitter } from 'events';

// reference to constants and dispatcher
import * as TodoConstant from '../constants/TodoConstants';
import dispatcher from '../dispatchers/dispatcher';

class TodoStore extends EventEmitter{
    constructor(){
        super()
        this.todolist = [{id : 0, content : 'testing react', complete : true}, {id : 1, content : 'create stores for holding states', complete : false}]
    
        // bind the action handle
        this.handleActions = this.handleActions.bind(this)
    }

    // add new element to todolist state
    createTodo(id, content, complete){

        this.todolist.push({
            id,
            content,
            complete
        })

        this.emit("change")
    }

    // change the complete status in the todolist state
    updateTodo(id, complete){

        this.todolist.filter((val) => val.id === id)[0].complete = complete

        this.emit("change")
    }

    // change the complete status and the content in the todolist state
    updateTodo(id, content, complete){

        const ref = this.todolist.filter((val) => val.id === id)[0]
        ref.complete = complete
        ref.content = content

        this.emit("change")
    }

    // delete an element in the todolist state
    deleteTodo(id){

        this.todolist.splice(this.todolist.findIndex((val) => val.id === id), 1)

        this.emit("change")
    }

    // get all elements in the todolist state
    getAll(){
        return this.todolist
    }

    // DISPATCHER uses this to instruct the STORE to update the 'state' variables in the COMPONENTs
    handleActions(actions){

        switch (actions.type){
            case TodoConstant.CREATE_TODO:
                this.createTodo(actions.id, actions.content, actions.complete)
                break
            case TodoConstant.UPDATE_TODO_COMPLETE:
                this.updateTodo(actions.id, actions.complete)
                break
            case TodoConstant.UPDATE_TODO:
                this.updateTodo(actions.id, actions.content, actions.complete)
                break
            case TodoConstant.DELETE_TODO:
                this.deleteTodo(actions.id)
        }
    }
}

const todoStore = new TodoStore();

// register dispatcher to handle all actions
dispatcher.register(todoStore.handleActions)

export default todoStore;