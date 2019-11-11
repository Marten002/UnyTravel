import React, { Component } from 'react';
import './LoginSocial.css';

class LoginSocial extends Component {

    render() { 

        let loginImage = this.props.loginImage;

        return (
            <div className="form__social">
                {Object.keys(loginImage).map((elem, index) => {
                    return  <button key={index} data-login={index} className="btn btn--social">
                                <img src={loginImage[elem]} alt="social" className="img--fluid img--small img--social"/>
                            </button>
                })}
            </div>
        );
    }
}

export default LoginSocial;
