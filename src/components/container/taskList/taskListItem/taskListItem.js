import React, { Component } from 'react';
import './taskListItem.css';

class TaskListItem extends Component {
    render() {
        const favoriteClass = this.props.favorited ? 'favourite' : 'not-favourite';
        return (
            <li className="to-do-list-item">
                <div className="to-do-container">
                    <div className="to-do-details">
                        <div className="list-item-category sport"></div>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="to-do-options">
                        <div className="check">
                            <label 
                                htmlFor="status-checkbox"
                                className="uncheck-label">
                                {this.props.completed ? 'Finished' : 'In progress'}
                            </label>
                            <input 
                                type="checkbox" 
                                name="status-checkbox"
                                id="status-checkbox"
                                checked={this.props.completed} 
                            />
                        </div>
                        <span>
                            <img 
                                alt={`${favoriteClass} task`}
                                className={favoriteClass}
                                src="/assets/background/star-solid.svg" />
                        </span>
                        <button className="delete-item">Delete</button>
                    </div>
                </div>
            </li>
        );
    }
}

export default TaskListItem;