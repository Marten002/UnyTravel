import React, { Component } from 'react';
import './LoginButton.css';

class LoginButton extends Component {
    constructor(props){
        super(props);
        this.state  = {

        };
    };

    render() {

        let linkAvatar = this.props.linkAvatar;
        let btnClass = this.props.btnClass;
        let btnId = this.props.btnId;
        let btnName = this.props.btnName;
        let imgClass = this.props.imgClass;

        return (
            <button className={"btn " + btnClass} id={btnId}>
                <span>{btnName}</span>
                <img src={linkAvatar} alt="avatar" className={"img--fluid img--small " + imgClass}/>
            </button>
        );
    }
}

export default LoginButton;
