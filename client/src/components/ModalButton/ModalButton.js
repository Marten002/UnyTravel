import React, { Component } from 'react';
import './ModalButton.css';

class ModalButton extends Component {
    constructor(props){
        super(props);
        this.state  = {

        };
    };

    handleSelect = () => {

        let modalSelect;
        let buttonName;
        let previewTitle;
        let previewDiscription;

        if(this.props.SelectModalState === 'form--login') {

            modalSelect = 'form--registration';

        } else {

            modalSelect = 'form--login';

        }

        /* Button name */

        if(this.props.btnName === 'Sing Up') {

            buttonName = 'Sing In';

        } else {

            buttonName = 'Sing Up';

        }

        /* Preview text */

        if(this.props.previewTitleState === this.props.previewTitleDefault) {

            previewTitle = this.props.previewTitle;

        } else {

            previewTitle = this.props.previewTitleDefault;

        }

        if(this.props.previewDiscriptionState === this.props.previewDiscriptionDefault) {

            previewDiscription = this.props.previewDiscription;

        } else {

            previewDiscription = this.props.previewDiscriptionDefault;

        }

        this.props.deliverySelectModal(modalSelect, buttonName, previewTitle, previewDiscription);
    };

    render() {

        let linkAvatar = this.props.linkAvatar;
        let btnClass = this.props.btnClass;
        let btnId = this.props.btnId;
        let btnName = this.props.btnName;
        let imgClass = this.props.imgClass;

        return (
            <button onClick={this.handleSelect} className={"btn " + btnClass} id={btnId}>
                <span>{btnName}</span>
                <img src={linkAvatar} alt="avatarBlack" className={"img--fluid img--small " + imgClass}/>
            </button>
        );
    }
}

export default ModalButton;
