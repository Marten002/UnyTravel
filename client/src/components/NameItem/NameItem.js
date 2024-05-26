import React, { Component } from 'react';
import './NameItem.css';

class NameItem extends Component {
    constructor(props){
        super(props);
        this.state  = {
            label: 'form__label',
            nickname: '',
            inpuError: {
                nickname: ''
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
            nickname: value
        });
        
    };

    handleSendValue = () => {

        this.props.deliverySendValue(this.state.nickname);
        
    };


    render() { 
        return (
            <div data-item="nickname" className="form__item">
                <label 
                    htmlFor="nickname" 
                    className={this.state.label}>Your Nickname</label>
                <input 
                    type="text" 
                    id="nickname" 
                    name="nickname" 
                    className="form__input" 
                    data-input="nickname"
                    value={this.state.nickname} 
                    onFocus={this.handleClickItem} 
                    onChange={this.handleInputChange} 
                    onBlur={this.handleSendValue}/>
            </div>
        );
    }
}

export default NameItem;
