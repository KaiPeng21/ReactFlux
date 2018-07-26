// ACTION
// - ACTIONs are fired by an event (pushbutton, mouse click, scroll, etc...) in the COMPONENT
// - ACTIONs tells the DISPATCHER to dispatch the STORE to update certain 'state' variables in the COMPONENT
// - ACTIONs are the places where the framework can interact with API calls asynchronously 

import * as TodoConstants from '../constants/TodoConstants';
import dispatcher from '../dispatchers/dispatcher';

import * as TodoSDK from '../utils/TodoSDK';

//#region Actions for changing the new task textbox
export function editNewTaskAction(value){

    dispatcher.dispatch({
        type : TodoConstants.EDIT_NEWTASK,
        value : value
    })
}
//#endregion

//#region Actions for changing the todo-list
export function reloadTodoAction(){

    TodoSDK.getAllTodoPromise().then((val) => {
        dispatcher.dispatch({
            type : TodoConstants.RELOAD_TODO,
            todo : val
        })
    }).catch(error => console.log(error))

}

export function createTodoAction(content){

    TodoSDK.createTodoPromise(content).then((val) => {
        if (val.success){
            dispatcher.dispatch({
                type : TodoConstants.CREATE_TODO,
                id : val.id,
                content : content,
                complete : false
            })
        }
    }).catch(error => console.log(error))
}

export function deleteTodoAction(id){

    TodoSDK.deleteTodoPromise(id).then((val) => {
        if (val.success){
            dispatcher.dispatch({
                type : TodoConstants.DELETE_TODO,
                id : id
            })
        }
    }).catch((error) => console.log(error))
}

export function completeTodoAction(id){


    TodoSDK.completeTodoPromise(id).then((val) => {
        if (val.success){
            dispatcher.dispatch({
                type : TodoConstants.UPDATE_TODO_COMPLETE,
                id : id,
                complete : true
            })
        }
    }).catch((error) => console.log(error))
}
//#endregion

window.createTodoAction = createTodoAction;
window.reloadTodoAction = reloadTodoAction;
window.deleteTodoAction = deleteTodoAction;
window.completeTodoAction = completeTodoAction;