import React, { Component } from 'react';
import './MenuSwitch.css';

class MenuSwitch extends Component {
    constructor(props){
        super(props);
        this.state  = {

        };
    };

    render() {
        return (
            <span data-tab={this.props.datatab}>{this.props.menuSwitchName}</span>
        );
    }
}

export default MenuSwitch;
