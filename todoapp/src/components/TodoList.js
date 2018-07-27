import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TodoBullet from './TodoBullet';

class TodoList extends Component{
    render(){
    return (<div>
            <h3>{this.props.title}</h3>
            {this.props.todolist.map((val, ind) => <TodoBullet key={ind} {...val} removeTodo={this.props.removeTodo} completeTodo={this.props.completeTodo}/>)}
        </div>);
    }
}
TodoList.propTypes = {
    title : PropTypes.string,
    todolist : PropTypes.array.isRequired, // array format: [{id: <int>, content: <string>, complete=<bool>}, ...]
    removeTodo : PropTypes.func,
    completeTodo : PropTypes.func
}

export default TodoList;