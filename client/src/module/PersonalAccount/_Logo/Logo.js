import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
    constructor(props){
        super(props);
        this.state  = {
            
        };
    };

    render() {
        return (
            <div className="modal__logo">
                <img src={this.props.logoImage} alt="plane" className="img--fluid img--middle img--modal-logo"/>
                <div className="logo__count">UnyTravel</div>
            </div>
        );
    }
}

export default Logo;
