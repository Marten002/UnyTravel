import React, { Component } from 'react';
import './ToggleMenuUser.css';
import Drawer from 'react-drag-drawer';
import PersonalAccount from '../../module/PersonalAccount/PersonalAccount';

class ToggleMenuUser extends Component {
    constructor(props){
        super(props);
        this.state  = {
            open: false,
            hidden: ''
        };
    };

    handleClientLogOut = (event) => {

        event.preventDefault();
        
        localStorage.removeItem('usertoken');

    };

    handleClientLogIn = (event) => {

        event.preventDefault();

        document.body.style.overflow = 'hidden';
        
        this.setState({ 
            open: !this.state.open 
        });

    };


    handleStateUpdateModal = (isModalValue) => {

        console.log(`lol:${isModalValue}`);

        this.setState({ 
            open: !this.state.open,
        });

        document.body.style.overflow = 'initial';

        this.props.deliveryStateToggleMenu(isModalValue);
        
    };

    render() {
        return (
            <div className={"menu__user" + this.props.userMenu}>
                <div className="menu__user--container">
                    <a  onClick={this.handleClientLogIn}
                        href=""
                        className="menu__user--link">
                        <span>My account</span>
                    </a>
                    <a  onClick={this.handleClientLogOut}
                        href=""
                        className="menu__user--link">
                        <span>Log-Out</span>
                    </a>
                </div>
                <Drawer
                    open={this.state.open}
                    onRequestClose={this.handleClientLogIn}
                    onDrag={ () => {
                        
                    }}
                    onOpen={ () => {

                    }}
                    allowClose={true}
                    modalElementClass='modal__container modal__container--full'
                    containerElementClass='modal'
                    direction='top'
                >
                    <PersonalAccount  deliveryStateModal={this.state.open} deliveryStateIsModal={this.handleStateUpdateModal}>

                    </PersonalAccount>
                </Drawer>
            </div>
        );
    }
}

export default ToggleMenuUser;
