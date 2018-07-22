// ACTION
// - ACTIONs are fired by an event (pushbutton, mouse click, scroll, etc...) in the COMPONENT
// - ACTIONs tells the DISPATCHER to dispatch the STORE to update certain 'state' variables in the COMPONENT
// - ACTIONs are the places where the framework can interact with API calls asynchronously 

import * as TodoConstants from '../constants/TodoConstants';
import dispatcher from '../dispatchers/dispatcher';

export function createTodoAction(content){

    dispatcher.dispatch({
        type : TodoConstants.CREATE_TODO,
        id : Date.now(),
        content : content,
        complete : false
    })
}

export function deleteTodoAction(id){

    dispatcher.dispatch({
        type : TodoConstants.DELETE_TODO,
        id : id
    })
}

export function completeTodoAction(id){

    dispatcher.dispatch({
        type : TodoConstants.UPDATE_TODO_COMPLETE,
        id : id,
        complete : true
    })
}
