import React, { Component } from 'react';
import './MenuNav.css';

class MenuNav extends Component {
    constructor(props){
        super(props);
        this.state  = {
            
        };
    };

    render() {
        return (
            <li data-sel="idsldl" className="modal__item">
                <a href="" className="modal__link" onClick={(event) => { event.preventDefault() }}>
                    <span>{this.props.navItemName}</span>
                </a>
            </li>
        );
    }
}

export default MenuNav;
