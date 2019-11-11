import React, { Component } from 'react';
import './SocialLink.css';
import Login from '../Login/Login';

class SocialLink extends Component {
    render() {

        let socialLink = this.props.socialLink;
        let socialImage = this.props.socialImage;

        let loginImage = this.props.loginImage;
        let formLabel = this.props.formLabel;
        let formInput = this.props.formInput;
        let linkAvatar = this.props.linkAvatar;

        let previewTitle = this.props.previewTitle;
        let previewDiscription = this.props.previewDiscription;
        
        let previewTitleDefault = this.props.previewTitleDefault;
        let previewDiscriptionDefault = this.props.previewDiscriptionDefault;

        return (
            <div className="header__contact--item">
                <Login 
                    loginImage={loginImage}
                    formLabel={formLabel}
                    formInput={formInput}
                    linkAvatar={linkAvatar}
                    previewTitle={previewTitle}
                    previewDiscription={previewDiscription}
                    previewTitleDefault={previewTitleDefault}
                    previewDiscriptionDefault={previewDiscriptionDefault}/>
                
                {Object.keys(socialImage).map((elem, index) => {
                    return <div key={index} className="contact">
                                <a href={socialLink[index]} data-social={index} className="contact__social">
                                    <img src={socialImage[elem]} alt="social" className="img--fluid img--small"/>
                                </a>
                            </div>
                })}
            </div>
        );
    }
}

export default SocialLink;

