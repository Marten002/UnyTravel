import React, { Component } from 'react';
import './MenuNavLogOut.css';

class MenuNavLogOut extends Component {
    constructor(props){
        super(props);
        this.state  = {
            
        };
    };

    handleLogOut = (event) => {

        event.preventDefault();
        // localStorage.removeItem('usertoken');
    
    };

    render() {
        return (
            <li className="modal__item">
                <a href="" className="modal__link" onClick={this.handleLogOut}>
                    <span>{this.props.navItemName}</span>
                </a>
            </li>
        );
    }
}

export default MenuNavLogOut;
