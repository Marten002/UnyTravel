import React, { Component } from 'react';
import './FormRegistration.css';
import LoginItem from '../LoginItem/LoginItem';
import PasswordItem from '../PasswordItem/PasswordItem';
import NameItem from '../NameItem/NameItem';
import LoginButton from '../LoginButton/LoginButton';
import { register } from '../Authentication/Authentication';

class FormRegistration extends Component {
    constructor(props){
        super(props);
        this.state  = {
            label: 'form__label',
            nickname: '',
            email: '',
            password: '',
            errors: {}
        };
    };

    handleSubmit = (event) => {

        event.preventDefault();
        console.log('login:', this.state.email, 'password', this.state.password, 'nickname', this.state.nickname);

        const newUser = {
            nickname: this.state.nickname,
            email: this.state.email,
            password: this.state.password
        };
      
        register(newUser).then(response => {
            // this.props.history.push(`/login`)
        });



    };  

    handleStateUpdateNickname = (nickname) => {

        this.setState({
            nickname: nickname
        });
        
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

        let linkAvatar = this.props.linkAvatar;
        let btnClass = 'btn--bigger btn--white-outline';
        let btnId = 'sigup';
        let btnName = 'Sing Up';
        let imgClass = 'img--login';

        return (
            <form action="" className="form form--modal" onSubmit={this.handleSubmit}>
                <NameItem
                    deliverySendValue={this.handleStateUpdateNickname}/>
                <LoginItem
                    deliverySendValue={this.handleStateUpdateLogin}/>
                <PasswordItem
                    deliverySendValue={this.handleStateUpdatePassword}/>
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

export default FormRegistration;
