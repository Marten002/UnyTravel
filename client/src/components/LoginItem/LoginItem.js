import React, { Component } from 'react';
import './LoginItem.css';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class LoginItem extends Component {
    constructor(props){
        super(props);
        this.state  = {
            label: 'form__label',
            email: '',
            inpuError: {
                email: ''
            }
        };
    };

    handleClickItem = () => {

        if(this.state.label === 'form__label') {

            this.setState({
                label: this.state.label + ' form__label--active'
            });

        }
  
    };

    handleInputValidation = (event) => {

        event.preventDefault();

        const { name, value } = event.target;
        let inpuError = { ...this.state.inpuError };
    
        switch (name) {
          case 'email':
                inpuError.email = emailRegex.test(value)
              ? ''
              : 'invalid E-Mail address';
            break;
          default:
            break;
        }
    
        this.setState({ 
            inpuError, email: value 
        });

    };

    handleSendValue = () => {

        this.props.deliverySendValue(this.state.email);
  
    };

    render() { 
        const { inpuError } = this.state;
        return (
            <div data-item="email" className="form__item">
                <label 
                    htmlFor="email" 
                    className={inpuError.email.length > 0 ? `${this.state.label} form__label--error` : this.state.label}
                >
                Your E-Mail {inpuError.email.length > 1 && (
                        <span className="form__input--message">is invalid :(</span>
                    )}
                </label>
                <input
                    className={inpuError.email.length > 0 ? 'form__input form__input--error' : "form__input"}
                    id="email"                         
                    type="email"
                    name="email"
                    autoComplete="off"
                    noValidate
                    onFocus={this.handleClickItem} 
                    onChange={this.handleInputValidation}
                    onBlur={this.handleSendValue}
                />
            </div>
        );
    }
}

export default LoginItem;