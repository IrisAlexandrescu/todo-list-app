import React, { Component } from 'react';
import CategoriesComponent from './categories/categoriesComponent';
import TodoControls from './controls/todoControls';
import './containerComponent.css';
import TaskListComponent from './taskList/taskListComponent';

class ContainerComponent extends Component {
    render() {
        return (
            <div className="container">
               <CategoriesComponent />
               <TodoControls /> 
               <TaskListComponent />
            </div>
        );
    }
}

export default ContainerComponent;