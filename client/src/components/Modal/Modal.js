import React, { Component } from 'react';
// import { CSSTransition } from 'react-transition-group';
import './Modal.css';
import FormLogin from '../FormLogin/FormLogin';
import FormRegistration from '../FormRegistration/FormRegistration';
import ModalButton from '../ModalButton/ModalButton';
import FormPreview from '../FormPreview/FormPreview';

class ModalLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: 'form--login',
            previewTitle: this.props.previewTitleDefault,
            previewDiscription: this.props.previewDiscriptionDefault,
            btnName: 'Sing Up'
        }
    };

    clickSelectModalState = (modalSelect, buttonName, previewTitle, previewDiscription) => {

        this.setState({
            form: modalSelect,
            previewTitle: previewTitle,
            previewDiscription: previewDiscription,
            btnName: buttonName
        });

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

        // previev buttob
        let btnClass = 'btn--bigger btn--black-outline';
        let btnId = '';
        let imgClass = 'img--login';

        return (
            <div className="modal__content">
                {/* <CSSTransition
                    in={true}
                    timeout={200}> */}
                {(this.state.form === 'form--login' && 
                    <div className="modal__content--item modal__form">
                        <div className="modal__header">
                            <span>Sign In</span>
                        </div>
                        <div className="modal__body">
                                <FormLogin 
                                    loginImage={loginImage}
                                    formLabel={formLabel}
                                    formInput={formInput}
                                    linkAvatar={linkAvatar}/>
                        </div>
                    </div>
                )}
                {/* </CSSTransition> */}
                {(this.state.form === 'form--registration' && 
                    <div className="modal__content--item modal__form modal__form--registration">
                        <div className="modal__header">
                            <span>Sign Up</span>
                        </div>
                        <div className="modal__body">
                            <FormRegistration 
                                loginImage={loginImage}
                                formLabel={formLabel}
                                formInput={formInput}
                                linkAvatar={linkAvatar}/>
                        </div>
                    </div>
                )}
                <div className="modal__content--item modal__preview modal__preview--singin">
                    <FormPreview 
                        previewTitle={this.state.previewTitle}
                        previewDiscription={this.state.previewDiscription}/>
                    <div className="form__btn">
                        <ModalButton 
                            linkAvatarBlack={linkAvatarBlack}
                            btnClass={btnClass}
                            btnId={btnId}
                            btnName={this.state.btnName}
                            imgClass={imgClass}
                            deliverySelectModal={this.clickSelectModalState}
                            SelectModalState={this.state.form}
                            previewTitleDefault={previewTitleDefault}
                            previewDiscriptionDefault={previewDiscriptionDefault}
                            previewTitle={previewTitle}
                            previewDiscription={previewDiscription}
                            previewTitleState={this.state.previewTitle}
                            previewDiscriptionState={this.state.previewDiscription}/>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default ModalLogin;























//  import React, { Component } from 'react';
//  import { Modal, Button } from 'antd';
//   import 'antd/lib/modal/style/css';
//  import './modal.css';
//  import './modal';

//  class Popup extends Component {
//      state = { 
//          visible: false 
//      };

//      componentDidMount(){
        
//      }

//      showModal = () => {
//          this.setState({
//            visible: true,
//          });
//        };
    
//        handleOk = e => {
//          console.log(e);
//          this.setState({
//            visible: false,
//          });
//        };
    
//        handleCancel = e => {
//          console.log(e);
//          this.setState({
//            visible: false,
//          });
//        };
  
//      render() {

//        return (

//          <div>
//          <Modal
//            title="Basic Modal"
//            visible={this.state.visible}
//            onOk={this.handleOk}
//            onCancel={this.handleCancel}>
//            <p>Some contents...</p>
//            <p>Some contents...</p>
//            <p>Some contents...</p>
//          </Modal>
//        </div>
        
//           <div className="modal modal--auth">
//               <div className="modal__container modal--md">
//                   <div className="modal__content">
//                       <div className="modal__header">
//                           <div className="modal__header--content">
//                               <div className="switch">
//                                   <div className="switch__form">
//                                       <div className="switch__form--container switch__form--login switch__form--active">
//                                           <div className="switch__content">
//                                               <span>Log-In</span>
//                                               <img src="img/social/avatar.svg" alt="avatar" className="img--fluid img--small"/>
//                                           </div>
//                                       </div>
//                                       <div className="switch__form--container switch__form--registration">
//                                           <div className="switch__content">
//                                               <span>Registration</span>
//                                               <img src="img/social/avatarReg.svg" alt="avatarReg" className="img--fluid img--small"/>
//                                           </div>
//                                       </div>
//                                       <div className="form__callback">
//                                           <span>Uups... Invalid Mail or Login</span>
//                                       </div>
//                                   </div>
//                               </div>
//                           </div>
//                           <div className="modal__header--close">
//                               <img src="img/search/close.svg" alt="close" className="img--fluid img--small"/>
//                           </div>
//                       </div>
//                       <div className="modal__body">
//                           <div className="modal__body--content">
//                               <div className="modal__form modal__form--login modal__form--active">
//                                   <form action="" id="form--login" className="form form--modal">
//                                       <div className="form__title">
//                                           <span>Hello, please insert your Login and Password</span>
//                                       </div>
//                                       <div className="form__item form__item--login">
//                                           <label for="login" className="input__lable form__lable--login">Your login</label>
//                                           <input type="text" id="login" className="input"/>
//                                       </div>
//                                       <div className="form__item form__item--password">
//                                           <label for="password" className="input__lable form__lable--password">Your password</label>
//                                           <input type="text" id="password" className="input"/>
//                                       </div>
//                                       <div className="form__item form__item--checkbox">
//                                           <input type="checkbox" id="remember" className="input--checkbox"/>
//                                           <label for="remember" className="input__lable--checkbox">Remember me?</label>
//                                       </div>
//                                       <div className="form__btn">
//                                           <button className="btn btn--primary btn--bigger" id="authentication">
//                                               <span>Log-In</span>
//                                               <img src="img/social/avatar.svg" alt="login" className="img--fluid img--small"/>
//                                           </button>
//                                       </div>
//                                   </form>
//                                   <div className="modal__form--information restore--password">
//                                       <a href="">
//                                           <span>You want to restore password?</span>
//                                       </a>
//                                   </div>
//                                   <div className="form__item--social">
//                                       <div className="count--social">
//                                           <span>You can login using</span>
//                                       </div>
//                                       <div className="login--social">
//                                           <button className="btn btn--login btn--social">
//                                               <a href="" className="link--social-auth">
//                                                   <img src="img/social/facebook.svg" alt="social" className="img--fluid img--small"/>
//                                               </a>
//                                           </button>
//                                           <button className="btn btn--login btn--social">
//                                               <a href="" className="link--social-auth">
//                                                   <img src="img/social/twitter.svg" alt="social" className="img--fluid img--small"/>
//                                               </a>
//                                           </button>
//                                           <button className="btn btn--login btn--social">
//                                               <a href="" className="link--social-auth">
//                                                   <img src="img/social/telegram.svg" alt="social" className="img--fluid img--small"/>
//                                               </a>
//                                           </button>
//                                           <button className="btn btn--login btn--social">
//                                               <a href="" className="link--social-auth">
//                                                   <img src="img/social/instagram.svg" alt="social" className="img--fluid img--small"/>
//                                               </a>
//                                           </button>
//                                       </div>
//                                   </div>	
//                               </div>
//                               <div className="modal__form modal__form--registration">
//                                   <form action="" id="form--registration" className="form form--modal">
//                                       <div className="form__title form__title--registration">
//                                           <span>Hello, register new account or <a href="" className="go--login">log-in</a></span>
//                                       </div>
//                                       <div className="form__item">
//                                           <label for="login" className="input__lable">Your login</label>
//                                           <input type="text" id="login" className="input"/>
//                                       </div>
//                                       <div className="form__item">
//                                           <label for="password" className="input__lable">Your password</label>
//                                           <input type="text" id="password" className="input"/>
//                                       </div>
//                                       <div className="form__item">
//                                           <label for="name" className="input__lable">Your name</label>
//                                           <input type="text" id="name" className="input"/>
//                                       </div>
//                                       <div className="form__item">
//                                           <label for="phone" className="input__lable">Your phone</label>
//                                           <input type="text" id="phone" className="input"/>
//                                       </div>
//                                       <div className="form__item" id="form__item--mail">
//                                           <label for="mail" id="input__lable--mail" className="input__lable">Your E-Mail</label>
//                                           <input type="text" id="mail" className="input"/>
//                                       </div>
//                                       <div className="form__btn">
//                                           <button className="btn btn--primary btn--bigger" id="registration">
//                                               <span>Registration</span>
//                                               <img src="img/social/avatarReg.svg" alt="register" className="img--fluid img--small"/>
//                                           </button>
//                                       </div>
//                                   </form>
//                               </div>
//                               <div className="modal__form modal__form--restore">
//                                   <form action="" id="form--restore" className="form form--modal">
//                                       <div className="form__title">
//                                           <span>For to change the password, enter your E-mail and login</span>
//                                       </div>
//                                       <div className="form__item">
//                                           <label for="login" className="input__lable">Your login</label>
//                                           <input type="text" id="login" className="input"/>
//                                       </div>
//                                       <div className="form__item" id="form__item--mail">
//                                           <label for="mail" id="input__lable--mail" className="input__lable">Your E-Mail</label>
//                                           <input type="text" id="mail" className="input"/>
//                                       </div>
//                                       <div className="form__btn">
//                                           <button className="btn btn--primary btn--bigger" id="restore">
//                                               <span>Restore password</span>
//                                               <img src="img/search/reload.svg" alt="restore" className="img--fluid img--small"/>
//                                           </button>
//                                       </div>
//                                   </form>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
        
//        );
//      }
//    }
  
//    export default Popup;