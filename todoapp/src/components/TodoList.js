import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TodoBullet from './TodoBullet';

class TodoList extends Component{
    render(){
    return (<div>
            {this.props.todolist.map((val, ind) => <TodoBullet key={ind} {...val}/>)}
        </div>);
    }
}
TodoList.propTypes = {
    todolist : PropTypes.array.isRequired // array format: [{id: <int>, content: <string>, complete=<bool>}, ...]
}

export default TodoList;