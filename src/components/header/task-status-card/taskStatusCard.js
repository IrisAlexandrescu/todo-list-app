import React from 'react';
import './taskStatusCard.css';

const TaskStatusCard = props => {
    return (
        <div className="card-item">
            <span className={`${props.type.toLowerCase()}-task`}> 
                <i className="number">{props.number}</i> 
                <img 
                    src={`../../../assets/background/${props.type.toLowerCase()}-task-01.svg`} 
                    className="task-status-icon" 
                    alt={`${props.type.toLowerCase()}-task`} />
            </span>
            <p><strong>{props.type}</strong> tasks</p>                
        </div>
    );
};

export default TaskStatusCard;