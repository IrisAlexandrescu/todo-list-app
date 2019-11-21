import React, { Component } from 'react';
import TaskListItem from './taskListItem/taskListItem';

class TaskListComponent extends Component {
    render() {
        const sampleTasks = [{
            description: 'take a jog',
            favorite: true,
            completed: false
        }];
        const taskElements = sampleTasks.map((t,idx) => <TaskListItem key={idx} description={t.description} favorited={t.favorite} completed={t.completed}/>)
        return (
            <div className="task-list">
                <ul>
                    {taskElements}
                </ul>
            </div>
        );
    }
}

export default TaskListComponent;