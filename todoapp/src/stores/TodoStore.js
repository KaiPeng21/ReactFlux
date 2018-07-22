import { EventEmitter } from 'events';

// STORE
// - STORE handles changes to the 'state' variables in react COMPONENTs
// - STORE works as an event emitter, and tells the COMPONENTs to update their states after components rendered


class TodoStore extends EventEmitter{
    constructor(){
        super()
        this.todolist = [{id : 0, content : 'testing react', complete : true}, {id : 1, content : 'create stores for holding states', complete : false}]
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
}

const todoStore = new TodoStore();

export default todoStore;