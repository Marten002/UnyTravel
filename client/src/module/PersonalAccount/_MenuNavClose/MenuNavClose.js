import React, { Component } from 'react';
import './MenuNavClose.css';

class MenuNavClose extends Component {
    constructor(props){
        super(props);
        this.state  = {
            isModal: 'true'
        };
    };

    handleModalClose = (event) => {

        event.preventDefault();

        this.setState(

            { isModal: 'false' },

              () => {

                console.log(this.state.isModal);

                this.props.deliveryStateModal(this.state.isModal);

              }
        );

    };

    render() {
        return (
            <li className="modal__item">
                <a href="" className="modal__link" onClick={this.handleModalClose}>
                    <img src={this.props.closeImage} alt="close" className="img--fluid img--small img--close"/>
                </a>
            </li>
        );
    }
}

export default MenuNavClose;
