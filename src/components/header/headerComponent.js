import React, { Component } from 'react';
import './headerComponent.css';
import TitleComponent from './title/titleComponent';
import TaskStatusCard from './task-status-card/taskStatusCard';

export class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <header>
                <TitleComponent 
                    title="Hello, there!" 
                    subtitle="What are you up to for today?" 
                    logoPath="../../assets/background/to-do-logo.svg"/>
                    <div className="tasks-status">
                        <TaskStatusCard number={this.props.ongoingNumber} type="Ongoing" />
                        <TaskStatusCard number={this.props.finishedNumber} type="Finished" />
                        <TaskStatusCard number={this.props.favoritedNumber} type="Favorited" />
                    </div>
            </header>

        );
    }
}