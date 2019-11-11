import React, { Component } from 'react';
import './Header.css';
import './Header';
import {TweenMax, Power4} from 'gsap/TweenMax';
import Offer from '../Offer/Offer';
import Distination from '../Distination/Distination';
import HeroDistination from '../HeroDistination/HeroDistination';

class Header extends Component {

    componentDidMount(){
        
        TweenMax.to('.offer__title', 1, {
            opacity: 1,
            x: '0px',
        });

        TweenMax.to('.offer__discription', 1, {
            opacity: 1,
            x: '0px',
        });  

        let distinationItem = document.querySelectorAll('.distination__item');

        TweenMax.to(distinationItem[0], 1, {
            ease: Power4.easeInOut,
            opacity: 1,
            y: 0,
            visibility: 'visible',
            delay: 0,
        });

        TweenMax.to(distinationItem[1], 1, {
            ease: Power4.easeInOut,
            opacity: 1,
            y: 0,
            visibility: 'visible',
            delay: .1,
        });

        TweenMax.to(distinationItem[2], 1, {
            ease: Power4.easeInOut,
            opacity: 1,
            y: 0,
            visibility: 'visible',
            delay: .2,
        });

        TweenMax.to(distinationItem[3], 1, {
            ease: Power4.easeInOut,
            opacity: 1,
            y: 0,
            visibility: 'visible',
            delay: .3,
        });

        TweenMax.to(distinationItem[4], 1, {
            ease: Power4.easeInOut,
            opacity: 1,
            y: 0,
            visibility: 'visible',
            delay: .4,
        });

    };
  
    render() {

        let offerTitle = this.props.offerTitle;
        let offerDiscription = this.props.offerDiscription;
        let distinationLink = this.props.distinationLink;
        let distinationImage = this.props.distinationImage;
        let distinationName = this.props.distinationName;
        let heroDistination = this.props.heroDistination;
        
        return (
            <div className="content">
                <div className="content__item">
                    <Offer offerTitle={offerTitle} offerDiscription={offerDiscription}/>
                </div>
                <div className="content__item">
                    <HeroDistination heroDistination={heroDistination}/>
                    <Distination distinationLink={distinationLink} distinationImage={distinationImage} distinationName={distinationName}/>
                </div>
            </div>
        );
    }
}
  
export default Header;