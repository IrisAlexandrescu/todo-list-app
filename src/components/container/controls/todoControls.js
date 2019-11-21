import React from 'react';
import './todoControls.css'

const TodoControls = props => {
    return (
        <div className="to-do-controls">
            <button className="add-items" onClick={props.addTask}>New task</button>
        </div>
    );
};



export default TodoControls;