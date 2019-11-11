import React, { Component } from 'react';
import './Distination.css';

class Distination extends Component {

    render() {

        let distinationLink = this.props.distinationLink;
        let distinationImage = this.props.distinationImage;
        let distinationName = this.props.distinationName;
        
        return (
            <div className="content__distination">
                <div className="content__distination--tour distination">
                    {Object.keys(distinationImage).map((elem, index) => {
                        return <div key={index} className="distination__item">
                                    <a href={distinationLink[elem]} className="distination__item--link">
                                        <div className="distination__item--img">
                                            <img src={distinationImage[elem]} alt="distination" className="img--fluid img--distination" />
                                        </div>
                                        <div className="distination__item--count">
                                            <span>{distinationName[elem]}</span>
                                        </div>
                                    </a>
                                </div>
                        })}
                </div>
            </div>
        );
    }
}

export default Distination;
