import { EventEmitter } from 'events';

class TodoStore extends EventEmitter{
    constructor(){
        super()
        this.todolist = [{id : 0, content : 'testing react', complete : true}, {id : 1, content : 'create stores for holding states', complete : false}]
    }

    createTodo(text){

        this.todolist.push({
            id : Date.now(),
            content : text,
            complete : false
        })

        this.emit("change");
    }

    getAll(){
        return this.todolist;
    }
}

const todoStore = new TodoStore;

export default todoStore;