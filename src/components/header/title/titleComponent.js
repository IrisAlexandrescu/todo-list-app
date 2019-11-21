import React from 'react';
import './titleComponent.css';

const TitleComponent = props => {
    return (
        <div className="left-side-container">
            <img src={props.logoPath} alt="Application logo" />
            <div className="welcome-text">
                <h2>{props.title}</h2>
                <h4>{props.subtitle}</h4>
            </div>
        </div>
    );
};

export default TitleComponent;