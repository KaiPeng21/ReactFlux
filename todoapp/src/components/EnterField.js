import React, {Component} from 'react';

class EnterField extends Component{
    render(){
        return (<div>
            <input type='text' placeholder='enter new task here' /><button>Add</button>
        </div>)
    }
}

export default EnterField;