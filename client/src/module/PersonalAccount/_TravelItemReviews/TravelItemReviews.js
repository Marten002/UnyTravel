import React, { Component } from 'react';
import './TravelItemReviews.css';

class TravelItemReviews extends Component {
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
            <div className="user__travel--item travel">
                <div className="travel__name">
                    <span>{this.props.travelName}:</span>
                    <a href="">
                        <span className="lk-reviews--active">{this.props.travelreviews}</span>
                    </a>
                </div>
                <div className="travel__count">
                    <span>{this.props.travelCount}</span>
                </div>
            </div>
        );
    }
}

export default TravelItemReviews;
