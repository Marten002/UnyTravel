import React, { Component } from 'react';
import './HeroDistination.css';

class HeroDistination extends Component {

    render() {

        let heroDistination = this.props.heroDistination;
        
        return (
            <div className="content__slider">
                <div className="content__slider--count">
                    <span>{heroDistination}</span>
                </div>
            </div>
        );
    }
}

export default HeroDistination;
