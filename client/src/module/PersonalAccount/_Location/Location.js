import React, { Component } from 'react';
import './Location.css';

class Location extends Component {
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
            <div className="user__location">
                <img src={this.props.locationImage} alt="location" className="img--fluid img--small"/>
                <span>New-York, USA</span>
            </div>
        );
    }
}

export default Location;
