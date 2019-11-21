import React from 'react';
import TaskListItem from './taskListItem/taskListItem';

const TaskListComponent = props => {

    const taskElements = props.taskList.map((t, idx) => <TaskListItem key={idx} task={t} updateTask={props.updateTask} deleteTask={props.deleteTask} />)
    return (
        <div className="task-list">
            <ul>
                {taskElements}
            </ul>
        </div>
    );
}

export default TaskListComponent;