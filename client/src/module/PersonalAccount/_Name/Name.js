import React, { Component } from 'react';
import './Name.css';

class Name extends Component {
    constructor(props){
        super(props);
        this.state  = {
            UserName: 'Elon Musk'
        };
    };

    handleImageReplace = (event) => {

        event.preventDefault();

    };

    render() {
        return (
            <div className="user__name">
                <span>{this.state.UserName}</span>
            </div>
        );
    }
}

export default Name;
