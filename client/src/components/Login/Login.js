import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import './Login.css';
import ModalLogin from '../Modal/Modal';
import ToggleMenuUser from '../ToggleMenuUser/ToggleMenuUser';
import Drawer from 'react-drag-drawer';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state  = {
            open: false,
            email: 'Log-In',
            userMenu: '',
            contactProfile: '',
            avatar: this.props.linkAvatar
        };
    };

    handleToggleModal = () => {

        let { toggle } = this.state;
    
        this.setState({ 
            open: !this.state.open 
        });

    };

    componentDidMount() {

        const token = localStorage.usertoken;

        if(token) {

            const decoded = jwt_decode(token);

            this.setState({
                email: decoded.email
            });

        } else {

            this.setState({
                email: 'Log-In'
            });

        }
        
    };

    tempLogout = (event) => {

        event.preventDefault()
        localStorage.removeItem('usertoken');

    };

    handleToggleUserMenu = (event) => {

        event.preventDefault();

        if(this.state.userMenu === '') {

            this.setState({
                userMenu: ' menu__user--active',
                contactProfile: ' contact__profile--active',
                avatar: this.props.linkAvatarBlack
            });

        } else {

            this.setState({
                userMenu: '',
                contactProfile: '',
                avatar: this.props.linkAvatar
            });

        }

    };

    handleToggleUserMenu222 = (event) => {

        event.preventDefault();

        if(this.state.contactProfile === '' && this.state.userMenu === '') {

            console.log('111');

        } else {

            console.log('222');

        }

    };
    
    render() {

        // new
        let linkAvatarBlack = this.props.linkAvatarBlack;

        let loginImage = this.props.loginImage;
        let formLabel = this.props.formLabel;
        let formInput = this.props.formInput;
        let linkAvatar = this.props.linkAvatar;

        let previewTitle = this.props.previewTitle;
        let previewDiscription = this.props.previewDiscription;

        let previewTitleDefault = this.props.previewTitleDefault;
        let previewDiscriptionDefault = this.props.previewDiscriptionDefault;


        const { open } = this.state;

        return (
            <div className="contact">
                <div className={"contact__profile" + this.state.contactProfile} 
                    onClick={this.handleToggleModal} 
                    onMouseEnter={this.handleToggleUserMenu}
                    onMouseLeave={this.handleToggleUserMenu222}
                >
                    <div className="contact__profile--count">
                        <span>{this.state.email}</span>
                    </div>
                    <div className="contact__profile--img">
                        <img src={this.state.avatar} alt="avatar" className="img--fluid img--small"/>
                    </div>
                </div>
                {(this.state.email === 'Log-In' &&
                <Drawer
                    open={this.state.open}
                    onRequestClose={this.handleToggleModal}
                    onDrag={ () => {
                        
                    }}
                    onOpen={ () => {

                    }}
                    allowClose={true}
                    modalElementClass='modal__container modal__container--md'
                    containerElementClass='modal'
                    direction='bottom'>
                    <ModalLogin 
                        loginImage={loginImage}
                        formLabel={formLabel}
                        formInput={formInput}
                        linkAvatar={linkAvatar}
                        previewTitle={previewTitle}
                        previewDiscription={previewDiscription}
                        previewTitleDefault={previewTitleDefault}
                        previewDiscriptionDefault={previewDiscriptionDefault}/>
                </Drawer>
                )}
                {(this.state.email != 'Log-In' && 
                    <ToggleMenuUser 
                        userMenu={this.state.userMenu}
                        contactProfile={this.state.contactProfile}
                        linkAvatarBlack={linkAvatarBlack}
                        linkAvatar={linkAvatar}>
                    </ToggleMenuUser>
                    // <Drawer
                    //     open={this.state.open}
                    //     onRequestClose={this.handleToggleModal}
                    //     onDrag={ () => {
                            
                    //     }}
                    //     onOpen={ () => {

                    //     }}
                    //     allowClose={true}
                    //     modalElementClass='modal__container modal__container--md'
                    //     containerElementClass='modal'
                    //     direction='top'>
                    //         <div>
                    //             <button onClick={this.tempLogout}>log-uot</button>
                    //         </div>
                    // </Drawer>
                )}
            </div>    
        );
    }
}

export default Contact;
