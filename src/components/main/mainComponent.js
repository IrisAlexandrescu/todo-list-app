import React, { Component } from 'react';
import { HeaderComponent } from '../header/headerComponent';
import './mainComponent.css';   
import ContainerComponent from '../container/containerComponent';

export default class MainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
            return (
                <>
                    <HeaderComponent 
                        ongoingNumber={5}
                        favoritedNumber={5}
                        finishedNumber={5}
                        title = "Header">
                    </HeaderComponent>
                    <ContainerComponent />
                    
                </> 
            );
    }
}