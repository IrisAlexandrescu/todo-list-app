import React from 'react';
import './headerComponent.css';
import TitleComponent from './title/titleComponent';
import TaskStatusCard from './task-status-card/taskStatusCard';

const HeaderComponent = props => {
    return (
        <header>
            <TitleComponent
                title="Hello, there!"
                subtitle="What are you up to for today?"
                logoPath="../../assets/background/to-do-logo.svg" />
            <div className="tasks-status">
                <TaskStatusCard number={props.ongoingNumber} type="Ongoing" />
                <TaskStatusCard number={props.finishedNumber} type="Finished" />
                <TaskStatusCard number={props.favoritedNumber} type="Favorited" />
            </div>
        </header>

    );
}

export default HeaderComponent;