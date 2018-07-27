import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EnterField extends Component{
    render(){
        return (<div>
            <input id='editor' type='text' placeholder='enter new task here' value={this.props.newTask} 
            onChange={(e) => this.props.editNewTask(e.target.value)}
            onKeyDown={(e) => (e.key === 'Enter')? this.props.createTodo(this.props.newTask) : {} }/>
            <button onClick={() => {
                this.props.createTodo(this.props.newTask)
                document.getElementById('editor').focus()
            }}>Add</button>
        </div>)
    }
}
EnterField.propTypes = {
    createTodo : PropTypes.func,
    editNewTask : PropTypes.func,
    newTask : PropTypes.string
}

export default EnterField;