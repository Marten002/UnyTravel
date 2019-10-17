import React, { Component } from 'react';
import './menu.css';
import './menu';
// import './menuTM';

function importImages(image) {

    let images = {};

    image.keys().map(function(item) {

        images[item.replace('./', '')] = image(item); 

    })

    return images;

}

const images = importImages(require.context('./menu', false, /\.(png|jpe?g|svg)$/));

class Menu extends Component {
    constructor() {
      super();
      this.state = {
        fxbbbgbgb = []
      };
    }
  
    render() {
      return (
        <header className="header">
            <div className="header__contact">
                <div className="header__contact--item">
                    <div className="contact">
                        <a href="" className="contact__call">
                            <span className="contact__call--count">+1 888 237 8289</span>
                        </a>
                    </div>
                    <div className="contact">
                        <a href="" className="contact__call">
                            <span className="contact__call--count">question@unytour.com</span>
                        </a>
                    </div>
                </div>
                <div className="header__contact--item">
                    <div className="contact">
                        <div className="contact__profile">
                            <div className="contact__profile--count">
                                <span>Log-In</span>
                            </div>
                            <div className="contact__profile--img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" className="img--fluid img--small" fill="none">
                                    <path d="M7.44587 8.08242C7.4614 8.08242 7.47693 8.08242 7.49557 8.08242C7.50178 8.08242 7.50799 8.08242 7.5142 8.08242C7.52352 8.08242 7.53595 8.08242 7.54527 8.08242C8.45539 8.06689 9.19157 7.74695 9.73516 7.13502C10.9311 5.78691 10.7323 3.47588 10.7105 3.25533C10.6329 1.59971 9.85009 0.807621 9.20399 0.437979C8.72253 0.161524 8.1603 0.0124249 7.53284 0H7.5111C7.50799 0 7.50178 0 7.49867 0H7.48004C7.13524 0 6.45808 0.0559122 5.80888 0.425554C5.15657 0.795196 4.36138 1.58729 4.28372 3.25533C4.26198 3.47588 4.06318 5.78691 5.25908 7.13502C5.79956 7.74695 6.53574 8.06689 7.44587 8.08242ZM5.11309 3.33299C5.11309 3.32367 5.11619 3.31435 5.11619 3.30814C5.2187 1.08097 6.79977 0.841789 7.47693 0.841789H7.48935C7.49557 0.841789 7.50489 0.841789 7.5142 0.841789C8.35289 0.860427 9.77865 1.20211 9.87494 3.30814C9.87494 3.31746 9.87494 3.32678 9.87805 3.33299C9.88115 3.35473 10.0986 5.46697 9.11081 6.579C8.71942 7.02009 8.19758 7.23752 7.5111 7.24374C7.50489 7.24374 7.50178 7.24374 7.49557 7.24374C7.48935 7.24374 7.48625 7.24374 7.48004 7.24374C6.79666 7.23752 6.27171 7.02009 5.88343 6.579C4.89876 5.47318 5.10998 3.35163 5.11309 3.33299Z" fill="white"/>
                                    <path d="M13.8787 11.9155C13.8787 11.9124 13.8787 11.9093 13.8787 11.9062C13.8787 11.8813 13.8756 11.8565 13.8756 11.8285C13.857 11.2135 13.8166 9.77532 12.4685 9.3156C12.4592 9.31249 12.4468 9.30938 12.4375 9.30628C11.0365 8.94906 9.87171 8.14144 9.85928 8.13212C9.6698 7.99855 9.40888 8.04514 9.27531 8.23462C9.14174 8.42411 9.18834 8.68503 9.37782 8.8186C9.43062 8.85587 10.6669 9.7163 12.2138 10.1139C12.9376 10.3717 13.0183 11.1452 13.0401 11.8534C13.0401 11.8813 13.0401 11.9062 13.0432 11.931C13.0463 12.2106 13.0276 12.6424 12.9779 12.8909C12.4747 13.1767 10.5023 14.1644 7.50165 14.1644C4.51346 14.1644 2.52857 13.1735 2.02226 12.8878C1.97256 12.6393 1.95082 12.2075 1.95703 11.9279C1.95703 11.9031 1.96013 11.8782 1.96013 11.8503C1.98188 11.1421 2.06264 10.3686 2.78639 10.1108C4.3333 9.71319 5.56958 8.84966 5.62238 8.81549C5.81186 8.68192 5.85846 8.421 5.72489 8.23152C5.59132 8.04204 5.3304 7.99544 5.14092 8.12901C5.12849 8.13833 3.96987 8.94595 2.56274 9.30317C2.55032 9.30628 2.541 9.30938 2.53168 9.31249C1.18358 9.77532 1.14319 11.2135 1.12456 11.8254C1.12456 11.8534 1.12456 11.8782 1.12145 11.9031C1.12145 11.9062 1.12145 11.9093 1.12145 11.9124C1.11834 12.0739 1.11524 12.9033 1.27987 13.3195C1.31093 13.4003 1.36684 13.4686 1.44139 13.5152C1.53458 13.5774 3.76796 15 7.50476 15C11.2416 15 13.4749 13.5743 13.5681 13.5152C13.6396 13.4686 13.6986 13.4003 13.7297 13.3195C13.885 12.9064 13.8819 12.077 13.8787 11.9155Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="contact">
                        <a href="" className="contact__social">
                            <img src={images['twitter.svg']} alt="twitter" className="img--fluid img--small"/>
                        </a>
                    </div>
                    <div className="contact">
                        <a href="" className="contact__social">
                            <img src={images['facebook.svg']} alt="facebook" className="img--fluid img--small"/>
                        </a>
                    </div>
                    <div className="contact">
                        <a href="" className="contact__social">
                            <img src={images['telegram.svg']} alt="telegram" className="img--fluid img--small"/>
                        </a>
                    </div>
                    <div className="contact">
                        <a href="" className="contact__social">
                            <img src={images['instagram.svg']} alt="instagram" className="img--fluid img--small"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="header__nav">
                <nav className="nav">
                    <div className="nav__logo logo">
                        <a href="" className="logo__link">
                            <span className="logo__link--count">UnyTravel</span>
                        </a>
                    </div>
                    <div className="nav__menu menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="" className="menu__link menu__link--active">Home</a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">Destinations</a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">Countries</a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">Tours</a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">Blog</a>
                            </li>
                            <li className="menu__item">
                                <a href="" className="menu__link">Hot Tours</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__search search">
                        <form action="/" className="search__form">
                            <label for="search" className="search__label">Search</label>
                            <input type="text" id="search" className="search__item"/>
                            <button className="search__button search__button--open">
                                <img src={images['search.svg']} alt="search" className="img--fluid img--small img--search"/>
                            </button>
                            <button className="search__button search__button--close">
                                <img src={images['close.svg']} alt="close" className="img--fluid img--small img--close"/>
                            </button>
                        </form>
                    </div>
                </nav>
            </div>
        </header>
      );
    }
  }
  
  export default Menu;