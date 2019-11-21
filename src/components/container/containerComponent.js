import React from 'react';
import CategoriesComponent from './categories/categoriesComponent';
import TodoControls from './controls/todoControls';
import './containerComponent.css';
import TaskListComponent from './taskList/taskListComponent';

const ContainerComponent = props => {
    return (
        <div className="container">
            <CategoriesComponent />
            <TodoControls addTask={props.addTask} />
            <TaskListComponent taskList={props.taskList} updateTask={props.updateTask} deleteTask={props.deleteTask} />
        </div>
    );
}

export default ContainerComponent;