import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoBullet extends Component{
    render(){
        return <li>{this.props.content} <button>x</button> </li>
    }
}
TodoBullet.propTypes = {
    content : PropTypes.string,
    id : PropTypes.number,
    complete : PropTypes.bool
}

export default TodoBullet;