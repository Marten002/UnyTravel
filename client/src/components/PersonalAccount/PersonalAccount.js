import React, { Component } from 'react';
import './PersonalAccount.css';
// import './images';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

class PersonalAccount extends Component {
    constructor(props){
        super(props);
        this.state  = {
            
        };
    };

    render() {
        return (
            <div className="modal__content">
                <div className="modal__header">
                    <div className="modal__header--container">
                        <div className="modal__logo">
                            <img src={images['plane.svg']} alt="plane" className="img--fluid img--middle img--modal-logo"/>
                            <div className="logo__count">UnyTravel</div>
                        </div>
                        <div className="modal__menu">
                            <ul className="modal__list">
                                <li className="modal__item">
                                    <a href="" className="modal__link">
                                        <span>Active tour</span>
                                    </a>
                                </li>
                                <li className="modal__item">
                                    <a href="" className="modal__link">
                                        <span>My Travels</span>
                                    </a>
                                </li>
                                <li className="modal__item">
                                    <a href="" className="modal__link">
                                        <span>Log-Out</span>
                                    </a>
                                </li>
                                <li className="modal__item">
                                    <div className="modal__item--container">
                                        <a href="" className="modal__link">
                                            <span>elon.rocket@gmail.com</span>
                                        </a>
                                        <img src={images['imagesmall.png']} alt="person" className="img--fluid img--small img--account-small"/>
                                    </div>
                                </li>
                                <li className="modal__item">
                                    <a href="" className="modal__link">
                                        <img src={images['close.svg']} alt="close" className="img--fluid img--small img--close"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="modal__body">
                    <div className="modal__body--container account">
                        <div className="account__preview">
                            <div className="account__img">
                                <img src={images['mainimg.png']} alt="account" className="img--fluid img--account-bigger"/>
                            </div>
                            <div className="account__news">
                                <div className="news">
                                    <div className="news__title">
                                        <span>News</span>
                                    </div>
                                    <div className="news__item">
                                        <div className="news__item--header">
                                            <img src={images['ru.svg']} alt="news" className="img--fluid img--small img--news"/>
                                            <div className="news__locale">
                                                <span className="news--country">Russia, <span className="news--city">Moskow</span></span>
                                            </div>
                                        </div>
                                        <div className="news__item--body">
                                            <span className="news--discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                Voluptatum cupiditate eos illum quidem culpa eveniet.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="account__information">
                            <div className="account__information--header user">
                                <div className="user__name">
                                    <span>Elon Musk</span>
                                </div>
                                <div className="user__location">
                                    <img src={images['local.svg']} alt="location" className="img--fluid img--small"/>
                                    <span>New-York, USA</span>
                                </div>
                            </div>
                            <div className="account__information--body user">
                                <div className="user__travel">
                                    {/* <!-- user travel item 1 --> */}
                                    <div className="user__travel--item travel">
                                        <div className="travel__name">
                                            <span>Count tour:</span>
                                        </div>
                                        <div className="travel__count">
                                            <span>5</span>
                                        </div>
                                    </div>
                                    {/* <!-- user travel item 2 [demonstration main]--> */}
                                    <div className="user__travel--item travel travel--active">
                                        <div className="travel__name">
                                            <span>Active tour:</span>
                                        </div>
                                        <div className="travel__count">
                                            <span>1</span>
                                        </div>
                                    </div>
                                    {/* <!-- user travel item 3 --> */}
                                    <div className="user__travel--item travel">
                                        <div className="travel__name">
                                            <span>Reviews:</span>
                                            <a href="">
                                                <span className="lk-reviews--active">Continue reviews</span>
                                            </a>
                                        </div>
                                        <div className="travel__count">
                                            <span>3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="account__information--footer user">
                                <div className="user__menu lk-menu">
                                    <ul className="lk-menu--list">
                                        <li className="lk-menu--item">
                                            <span>Active tour</span>
                                        </li>
                                        <li className="lk-menu--item lk-menu--item-active">
                                            <span>About me</span>
                                        </li>
                                        <li className="lk-menu--item">
                                            <span>Payment Information</span>
                                        </li>
                                        <li className="lk-menu--item">
                                            <span>Account settings</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="user__information lk-information">
                                    {/* <!-- container with info 1 --> */}
                                    <div className="lk-information--container">
                                        {/* <!-- lk information item 1 --> */}
                                        <div className="lk-information--item">
                                            <div className="lk-information--header">
                                                <span>Basic information</span>
                                            </div>
                                            <div className="lk-information--body">
                                                <div className="lk-form">
                                                    <div className="lk-form__item">
                                                        <div className="lk-form__name">
                                                            <label htmlFor="firstName">First name:</label>
                                                        </div>
                                                        <div className="lk-form__input">
                                                            <input type="text" id="firstName" name="firstName" defaultValue="Elon"/>
                                                        </div>
                                                    </div>
                                                    <div className="lk-form__item">
                                                        <div className="lk-form__name">
                                                            <span>Second name:</span>
                                                        </div>
                                                        <div className="lk-form__input">
                                                            <input type="text" name="firstName" defaultValue=""/>
                                                        </div>
                                                    </div>
                                                    <div className="lk-form__item">
                                                        <div className="lk-form__name">
                                                            <span>Last name:</span>
                                                        </div>
                                                        <div className="lk-form__input">
                                                            <input type="text" name="firstName" defaultValue="Musk"/>
                                                        </div>
                                                    </div>
                                                    <div className="lk-form__item">
                                                        <div className="lk-form__name">
                                                            <span>Birthday:</span>
                                                        </div>
                                                        <div className="lk-form__input">
                                                            <input type="text" name="firstName" defaultValue="December 29, 1999"/>
                                                        </div>
                                                    </div>
                                                    <div className="lk-form__item">
                                                        <div className="lk-form__name">
                                                            <span>Gender:</span>
                                                        </div>
                                                        <div className="lk-form__input">
                                                            <input type="text" name="firstName" defaultValue="Male"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- lk information item 2 --> */}
                                        <div className="lk-information--item">
                                            <div className="lk-information--header">
                                                <span>Contact information</span>
                                            </div>
                                            <div className="lk-information--body">
                                                <div className="lk-form">
                                                    <div className="lk-form__item">
                                                        <div className="lk-form__name">
                                                            <span>Phone:</span>
                                                        </div>
                                                        <div className="lk-form__input">
                                                            <input type="text" name="firstName" defaultValue="+1 123 456 78 90"/>
                                                        </div>
                                                    </div>
                                                    <div className="lk-form__item">
                                                        <div className="lk-form__name">
                                                            <span>E-Mail:</span>
                                                        </div>
                                                        <div className="lk-form__input">
                                                            <input type="text" name="firstName" defaultValue="elon.rocket@gmail.com"/>
                                                        </div>
                                                    </div>
                                                    <div className="lk-form__item">
                                                        <div className="lk-form__name">
                                                            <span>Adress:</span>
                                                        </div>
                                                        <div className="lk-form__input">
                                                            <input type="text" name="firstName" defaultValue="23 S. Street New York, NY"/>
                                                        </div>
                                                    </div>
                                                    <div className="lk-form__item">
                                                        <div className="lk-form__name">
                                                            <span>Telegram:</span>
                                                        </div>
                                                        <div className="lk-form__input">
                                                            <input type="text" name="firstName" defaultValue="@ElonMusk2007"/>
                                                        </div>
                                                    </div>
                                                    <div className="lk-form__item">
                                                        <div className="lk-form__name">
                                                            <span>Facebook:</span>
                                                        </div>
                                                        <div className="lk-form__input">
                                                            <input type="text" name="firstName" defaultValue="Elon Musk"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalAccount;
