import React, { Component } from 'react';
import './Offer.css';

class Offer extends Component {

    render() {

        let offerTitle = this.props.offerTitle;
        let offerDiscription = this.props.offerDiscription;
        
        return (
            <div className="content__offer offer offer--center offer--left">
                <div className="offer__title">
                    <span>{offerTitle}</span>
                </div>
                <div className="offer__discription">
                    <span>{offerDiscription}</span>
                </div>
            </div>
        );
    }
}

export default Offer;
