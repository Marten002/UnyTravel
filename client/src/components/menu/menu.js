import React, { Component } from 'react';
import {TweenMax, Power4} from "gsap/TweenMax";
import './Menu.css';
import Nav from '../Nav/Nav';
import Contact from '../Contact/Contact';

class Menu extends Component {

    componentDidMount(){
        
        let headerNav = document.querySelector('.header__nav');

        TweenMax.to(headerNav, .8, {
            ease: Power4.easeInOut,
            width: '100%',
        });

        let menuItem = document.querySelectorAll('.menu__item');

        TweenMax.to(menuItem[0], 1, {
            ease: Power4.easeInOut,
            duration: 2.5,
            opacity: 1,
        });

        TweenMax.to(menuItem[1], 1.3, {
            ease: Power4.easeInOut,
            duration: 2.5,
            opacity: 1,
        });

        TweenMax.to(menuItem[2], 1.6, {
            ease: Power4.easeInOut,
            duration: 2.5,
            opacity: 1,
        });

        TweenMax.to(menuItem[3], 1.9, {
            ease: Power4.easeInOut,
            duration: 2.5,
            opacity: 1,
        });

        TweenMax.to(menuItem[4], 2.2, {
            ease: Power4.easeInOut,
            duration: 2.5,
            opacity: 1,
        });

        TweenMax.to(menuItem[5], 2.5, {
            ease: Power4.easeInOut,
            duration: 2.5,
            opacity: 1,
        });

        let headerContact = document.querySelector('.header__contact');

        TweenMax.to(headerContact, 2.3, {
            ease: Power4.easeInOut,
            transform: 'translateY(0px)',
            opacity: 1,
        });

    }
  
    render() {

        let nav__item = this.props.nav__item;
        let logo = this.props.logo;
        let searchButton = this.props.searchButton;
        let socialLink = this.props.socialLink;
        let socialImage = this.props.socialImage;
        let contactLink = this.props.contactLink;

        let loginImage = this.props.loginImage;
        let formLabel = this.props.formLabel;
        let formInput = this.props.formInput;
        let linkAvatar = this.props.linkAvatar;

        let previewTitle = this.props.previewTitle;
        let previewDiscription = this.props.previewDiscription;
        
        let previewTitleDefault = this.props.previewTitleDefault;
        let previewDiscriptionDefault = this.props.previewDiscriptionDefault;


        return (
            <header className="header">
                <Contact 
                    contactLink={contactLink} 
                    socialLink={socialLink} 
                    socialImage={socialImage} 
                    loginImage={loginImage}
                    formLabel={formLabel}
                    formInput={formInput}
                    linkAvatar={linkAvatar}
                    previewTitle={previewTitle}
                    previewDiscription={previewDiscription}
                    previewTitleDefault={previewTitleDefault}
                    previewDiscriptionDefault={previewDiscriptionDefault}/>
                <Nav 
                    nav__item={nav__item} 
                    logo={logo} 
                    searchButton={searchButton}/>
            </header>
      );
    }
}
  
export default Menu;