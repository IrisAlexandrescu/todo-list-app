import React, { Component } from 'react';
import HeaderComponent from '../header/headerComponent';
import './mainComponent.css';
import ContainerComponent from '../container/containerComponent';

export default class MainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: [{
                id: 100,
                description: 'take a jog',
                favorite: false,
                completed: true,
                category: 'sport'
            }, {
                id: 101,
                description: 'buy cereal',
                favorite: false,
                completed: true,
                category: 'shopping'
            }],
        }
    }
    updateTask = (task) => {
        console.log(task);
        const idx = this.state.tasks.findIndex(t => t.id === task.id);
        if (idx > -1) {
            this.setState(prevState => ({
                tasks: prevState.tasks.map((t, i) => i === idx ? task : t)
            }));
        }
    }

    deleteTask = (id) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(t => t.id !== id)
        }));
    }

    addTask = () => {
        const defaultTasks = [
            { description: 'web project', category: 'study', favorite: false, completed: false },
            { description: 'homework', category: 'study', favorite: false, completed: false },
            { description: 'history research', category: 'study', favorite: false, completed: false },
            { description: 'create powerpoint', category: 'work', favorite: false, completed: false },
            { description: 'send e-mail', category: 'work', favorite: false, completed: false },
            { description: 'morning run', category: 'sport', favorite: false, completed: false },
            { description: 'go the gym', category: 'sport', favorite: false, completed: false },
            { description: 'get milk', category: 'shopping', favorite: false, completed: false },
            { description: 'buy yogurt', category: 'shopping', favorite: false, completed: false },
            { description: 'dentist appointmment', category: 'health', favorite: false, completed: false },
            { description: 'call back Mike', category: 'social', favorite: false, completed: false },
            { description: 'Sarah\'s birthday party', category: 'social', favorite: false, completed: false },
        ];

        const i = Math.round(Math.random() * (defaultTasks.length - 1));
        const id = this.state.tasks.length + 100;
        console.log(defaultTasks[i]);
        this.setState(prevState => ({
            tasks: [...prevState.tasks, { ...defaultTasks[i], id }]
        }))
    }

    render() {
        let finishedNumber = 0, favoritedNumber = 0;
        this.state.tasks.forEach(t => {
            finishedNumber += t.completed ? 1 : 0;
            favoritedNumber += t.favorited ? 1 : 0;
        });
        const ongoingNumber = this.state.tasks.length - finishedNumber;
        return (
            <>
                <HeaderComponent
                    ongoingNumber={ongoingNumber}
                    favoritedNumber={favoritedNumber}
                    finishedNumber={finishedNumber} />
                <ContainerComponent
                    taskList={this.state.tasks}
                    updateTask={this.updateTask}
                    deleteTask={this.deleteTask}
                    addTask={this.addTask} />
            </>
        );
    }
}