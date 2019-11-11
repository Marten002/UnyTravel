import React, { Component } from 'react';
import './ContactLink.css';

class ContactLink extends Component {
    render() {

        let contactLink = this.props.contactLink;

        return (
            <div className="header__contact--item">
                {Object.keys(contactLink).map((elem, index) => {
                    return <div key={index} className="contact">
                                <a href={contactLink[elem]} className="contact__call">
                                    <span className="contact__call--count">{elem}</span>
                                </a>
                            </div>
                })}
            </div>
        );
    }
}

export default ContactLink;

