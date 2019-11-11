import React, { Component } from 'react';
import './ToggleMenuUser.css';

class ToggleMenuUser extends Component {
    constructor(props){
        super(props);
        this.state  = {
            userMenu: this.props.userMenu
        };
    };

    handleToggleUserMenu = (event) => {

        event.preventDefault();

        if(this.state.userMenu === '') {
            
            this.setState({
                userMenu: ' menu__user--active'
            });

        } else {

            this.setState({
                userMenu: ''
            });

        }

    };

    render() {
        return (
            <div className={"menu__user" + this.props.userMenu} onMouseEnter={this.handleToggleUserMenu} onMouseEnter={this.handleToggleUserMenu}>
                <div className="menu__user--container">
                    <a 
                        href=""
                        className="menu__user--link">
                        <span>My account</span>
                    </a>
                    <a 
                        href=""
                        className="menu__user--link">
                        <span>Log-Out</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default ToggleMenuUser;
