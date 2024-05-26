import React, { Component } from 'react';
import './Especially.css';

class Especially extends Component {
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
            <div className="account__especially">
                <div className="especially">
                    <div className="especially__title">
                        <span>Especially for you</span>
                    </div>
                    <div className="especially__item">
                        <div className="especially__item--header">
                            <div className="country country--select">
                                <span className="country__city">New-York, <span className="country__name">USA</span></span>
                            </div>
                            <div className="especially--arrow">
                                <img src={this.props.arrowImageEspecially} alt="arrow" className="img--fluid img--arrow-especially"/>
                            </div>
                            <div className="country country--especially">
                                <a href="">
                                    <span className="country__city">Dubai, <span className="country__name">UAE</span></span>
                                </a>
                            </div>
                        </div>
                        <div className="especially__item--body">
                            <div className="weather weather--select">
                                <img src={this.props.tempImageWeather_sc} alt="weather" className="img--fluid img--weather img--weather-select"/>
                            </div>
                            <div className="especially--price">
                                <span>From <span className="price--count">200<span className="price--value">$</span></span></span>
                            </div>
                            <div className="weather weather--especially">
                                <img src={this.props.tempImageWeather_s} alt="weather" className="img--fluid img--weather img--weather-especially"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Especially;
