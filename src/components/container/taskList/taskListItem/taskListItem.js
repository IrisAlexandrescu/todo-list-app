import React from 'react';
import './taskListItem.css';

const TaskListItem = props => {

    const changeTaskFavorited = () => {
        props.updateTask({
            ...props.task,
            favorited: !props.task.favorited
        })
    }

    const changeTaskStatus = () => {
        props.updateTask({
            ...props.task,
            completed: !props.task.completed
        })
    }

    const favoriteClass = props.task.favorited ? 'favourite' : 'not-favourite';
    return (
        <li className="to-do-list-item">
            <div className="to-do-container">
                <div className="to-do-details">
                    <div className={`list-item-category ${props.task.category}`}></div>
                    <p>{props.task.description}</p>
                </div>
                <div className="to-do-options">
                    <div className="check">
                        <label
                            htmlFor="status-checkbox"
                            className={props.task.completed ? 'check-label' : 'uncheck-label'}>
                            {props.task.completed ? 'Finished' : 'In progress'}
                        </label>
                        <input
                            type="checkbox"
                            name="status-checkbox"
                            id="status-checkbox"
                            checked={props.task.completed}
                            onChange={changeTaskStatus}
                        />
                    </div>
                    <span>
                        <img
                            alt={`${favoriteClass} task`}
                            className={favoriteClass}
                            src="/assets/background/star-solid.svg"
                            onClick={changeTaskFavorited} />
                    </span>
                    <button className="delete-item" onClick={() => props.deleteTask(props.task.id)} >Delete</button>
                </div>
            </div>
        </li>
    );
}

export default TaskListItem;