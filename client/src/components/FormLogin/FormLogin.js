import React, { Component } from 'react';
import './FormLogin.css';
import LoginSocial from '../LoginSocial/LoginSocial';
import LoginItem from '../LoginItem/LoginItem';
import PasswordItem from '../PasswordItem/PasswordItem';
import LoginButton from '../LoginButton/LoginButton';
import { login } from '../Authentication/Authentication';

class FormLogin extends Component {
    constructor(props){
        super(props);
        this.state  = {
            label: 'form__label',
            email: '',
            password: '',
            errors: {}
        };
    };

    handleSubmit = (event) => {

        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }
      
        login(user).then(res => {
            if (res) {
                console.log('pass: ' + res);
            }
        })

    };  

    handleStateUpdateLogin = (email) => {

        this.setState({
            email: email
        });
        
    };

    handleStateUpdatePassword = (password) => {

        this.setState({
            password: password
        });
        
    };

    render() {

        let loginImage = this.props.loginImage;
        let linkAvatar = this.props.linkAvatar;

        let btnClass = 'btn--bigger btn--white-outline';
        let btnId = 'sigin';
        let btnName = 'Sing In';
        let imgClass = 'img--login';

        return (
            <form action="" className="form form--modal" onSubmit={this.handleSubmit}>
                <LoginSocial
                    loginImage={loginImage}/>
                <LoginItem
                    deliverySendValue={this.handleStateUpdateLogin}/>
                <PasswordItem
                    deliverySendValue={this.handleStateUpdatePassword}/>
                <div className="form__item form__item--checkbox">
                    <input 
                        type="checkbox" 
                        id="remember" 
                        className="input--checkbox"/>
                    <label 
                        for="remember" 
                        className="form__label--checkbox">Remember me?</label>
                    <a 
                        href="" 
                        className="forgot">Forgot your password?</a>
                </div>
                <div className="form__btn">
                    <LoginButton 
                        linkAvatar={linkAvatar}
                        btnClass={btnClass}
                        btnId={btnId}
                        btnName={btnName}
                        imgClass={imgClass}/>
                </div>
            </form>
        );
    }
}

export default FormLogin;
