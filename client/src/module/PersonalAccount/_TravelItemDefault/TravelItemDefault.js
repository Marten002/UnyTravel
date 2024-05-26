import React, { Component } from 'react';
import './TravelItemDefault.css';

class TravelItemDefault extends Component {
    constructor(props){
        super(props);
        this.state  = {

        };
    };

    handleImageReplace = (event) => {

        event.preventDefault();

    };

    render() {
        return (
            <div className={"user__travel--item travel" + this.props.active}>
                <div className="travel__name">
                    <span>{this.props.travelName}:</span>
                </div>
                <div className="travel__count">
                    <span>{this.props.travelCount}</span>
                </div>
            </div>
        );
    }
}

export default TravelItemDefault;
