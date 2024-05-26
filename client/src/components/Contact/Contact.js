import React, { Component } from 'react';
import './Contact.css';
import ContactLink from '../ContactLink/ContactLink';
import SocialLink from '../SocialLink/SocialLink';

class Contact extends Component {
    render() {

        let socialLink = this.props.socialLink;
        let socialImage = this.props.socialImage;
        let contactLink = this.props.contactLink;

        let loginImage = this.props.loginImage;
        let formLabel = this.props.formLabel;
        let formInput = this.props.formInput;
        let linkAvatar = this.props.linkAvatar;
        let linkAvatarBlack = this.props.linkAvatarBlack;

        let previewTitle = this.props.previewTitle;
        let previewDiscription = this.props.previewDiscription;

        let previewTitleDefault = this.props.previewTitleDefault;
        let previewDiscriptionDefault = this.props.previewDiscriptionDefault;


        return (
            <div className="header__contact">
                <ContactLink 
                    contactLink={contactLink}/>
                <SocialLink 
                    socialLink={socialLink} 
                    socialImage={socialImage} 
                    loginImage={loginImage}
                    formLabel={formLabel}
                    formInput={formInput}
                    linkAvatar={linkAvatar}
                    linkAvatarBlack={linkAvatarBlack}
                    previewTitle={previewTitle}
                    previewDiscription={previewDiscription}
                    previewTitleDefault={previewTitleDefault}
                    previewDiscriptionDefault={previewDiscriptionDefault}/>
            </div>
        );
    }
}

export default Contact;

