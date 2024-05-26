import React, { Component } from 'react';
import './Photo.css';

class Photo extends Component {
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
            <div className="account__img" onClick={this.handleImageReplace}>
                <img src={this.props.userImageBigger} alt="account" className="img--fluid img--account-bigger"/>
            </div>
        );
    }
}

export default Photo;
