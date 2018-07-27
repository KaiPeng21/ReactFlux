import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoBullet extends Component{
    render(){
        return <li>{this.props.content} <button onClick={() => this.props.removeTodo(this.props.id)}>x</button> {this.props.complete? <span></span> : <button onClick={() => this.props.completeTodo(this.props.id)}>complete</button>}</li>
    }
}
TodoBullet.propTypes = {
    content : PropTypes.string,
    id : PropTypes.string,
    complete : PropTypes.bool,
    removeTodo : PropTypes.func,
    completeTodo : PropTypes.func
}

export default TodoBullet;