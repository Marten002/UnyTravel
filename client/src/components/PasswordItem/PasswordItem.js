import React, { Component } from 'react';
import './PasswordItem.css';

class PasswordItem extends Component {
    constructor(props){
        super(props);
        this.state  = {
            label: 'form__label',
            password: '',
            inpuError: {
                password: ''
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

    handleInputChange = ({

        target: {value}

    }) => {

        this.setState({
            password: value
        });
        
    };

    handleSendValue = () => {

        this.props.deliverySendValue(this.state.password);

        console.log(this.state.password);
        console.log(`typeOfPASS: ${typeof(this.state.password)}`);
        
    };


    render() { 
        return (
            <div data-item="password" className="form__item">
                <label 
                    for="password" 
                    className={this.state.label}>Your password</label>
                <input 
                    type="text" 
                    id="password" 
                    name="password" 
                    className="form__input"  
                    data-input="password"
                    autoComplete="off"
                    value={this.state.password} 
                    onFocus={this.handleClickItem} 
                    onChange={this.handleInputChange} 
                    onBlur={this.handleSendValue}/>
            </div>
        );
    }
}

export default PasswordItem;
