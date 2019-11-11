import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
    render() {

        let logo = this.props.logo;

        return (
            <div className="nav__logo logo">
                <a href='/' className="logo__link">
                    <span className="logo__link--count">{logo}</span>
                </a>
            </div>
        );
  }
}

export default Logo;
