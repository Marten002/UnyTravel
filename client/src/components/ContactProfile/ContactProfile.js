import React, { Component } from 'react';
import './ContactProfile.css';

class ContactProfile extends Component {
    constructor(props){
        super(props);
        this.state  = {
            
        };
    };

    render() {

        return (
            <div className={"contact__profile" + this.props.contactProfile}>
                <div className="contact__profile--count">
                    <span>{this.props.email}</span>
                </div>
                <div className="contact__profile--img">
                    <img src={this.props.avatar} alt="avatar" className="img--fluid img--small"/>
                </div>
            </div>
        );
    }
}

export default ContactProfile;
