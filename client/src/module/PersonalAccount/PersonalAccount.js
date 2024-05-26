import React, { Component } from 'react';
import './PersonalAccount.css';
/* Import child module */
import Logo from './_Logo/Logo';
import MenuNav from './_MenuNav/MenuNav';
import MenuNavLogOut from './_MenuNavLogOut/MenuNavLogOut';
import MenuNavUser from './_MenuNavUser/MenuNavUser';
import MenuNavClose from './_MenuNavClose/MenuNavClose';
import Photo from './_Photo/Photo';
import Especially from './_Especially/Especially';
import Location from './_Location/Location';
import TravelItemDefault from './_TravelItemDefault/TravelItemDefault';
import TravelItemReviews from './_TravelItemReviews/TravelItemReviews';
import Name from './_Name/Name';
import MenuSwitch from './_MenuSwitch/MenuSwitch';
import FormSwitch from './_FormSwitch/FormSwitch';
/* Import libary module */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Fade from 'react-reveal/Fade';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

let propDataBasic = {
    informationItemLabel : [
        'firstName',
        'secondName',
        'lastName',
        'birthday',
        'gender',
    ],
    informationItemName : [
        'First name',
        'Second name',
        'Last name',
        'Birthday',
        'Gender',
    ],
    informationItemInputId : [
        'firstName',
        'secondName',
        'lastName',
        'birthday',
        'gender',
    ],
    informationItemInputName : [
        'firstName',
        'secondName',
        'lastName',
        'birthday',
        'gender',
    ],
    informationItemInputValue : [
        'Elon',
        '',
        'Musk',
        'December 29, 1999',
        'Male',
    ],
};

let propDataContact = {
    informationItemLabel : [
        'phone',
        'email',
        'address',
        'telegram',
        'facebook',
    ],
    informationItemName : [
        'Phone',
        'E-Mail',
        'Adress',
        'Telegram',
        'Facebook',
    ],
    informationItemInputId : [
        'phone',
        'email',
        'address',
        'telegram',
        'facebook',
    ],
    informationItemInputName : [
        'phone',
        'email',
        'address',
        'telegram',
        'facebook',
    ],
    informationItemInputValue : [
        '+1 123 456 78 90',
        'elon.rocket@gmail.com',
        '23 S. Street New York, NY',
        '@ElonMusk2007',
        'Elon Musk',
    ],
};

let propDataTour = {
    informationItemLabel : [
        'when',
        'where',
        'vacationDates',
        'countPerson',
        'hotelName',
    ],
    informationItemName : [
        'When',
        'Where',
        'Vacation dates',
        'Person',
        'Hotel link',
    ],
    informationItemInputId : [
        'when',
        'where',
        'vacationDates',
        'countPerson',
        'hotelName',
    ],
    informationItemInputName : [
        'when',
        'where',
        'vacationDates',
        'countPerson',
        'hotelName',
    ],
    informationItemInputValue : [
        'Friday, 12, November 2019',
        'Budapest',
        '11.12.19 - 11.21.2019',
        '2 adults',
        '7Seasons Apartments Budapest',
    ],
};

let propDataApatment = {
    informationItemLabel : [
        'when',
        'where',
        'vacationDates',
        'countPerson',
        'hotelName',
    ],
    informationItemName : [
        'Bedroom',
        'Apartment',
        'Food & Beverage',
        'Transfer from AIR',
        'Car',
    ],
    informationItemInputId : [
        'when',
        'where',
        'vacationDates',
        'countPerson',
        'hotelName',
    ],
    informationItemInputName : [
        'when',
        'where',
        'vacationDates',
        'countPerson',
        'hotelName',
    ],
    informationItemInputValue : [
        '1 (double)',
        'View all amenities',
        'BB',
        'No',
        'No',
    ],
};

let propDataSettings = {
    informationItemLabel : [
        'yourMail',
        'yourPassword',
        'yourPhone',
        'verMail',
        'verPhone',
    ],
    informationItemName : [
        'Your mail',
        'Your password',
        'Your phone',
        'Verify email',
        'Verify phone',
    ],
    informationItemInputId : [
        'yourMail',
        'yourPassword',
        'yourPhone',
        'verMail',
        'verPhone',
    ],
    informationItemInputName : [
        'yourMail',
        'yourPassword',
        'yourPhone',
        'verMail',
        'verPhone',
    ],
    informationItemInputValue : [
        'elon.rocket@gmail.com',
        '*******************',
        '+1 123 456 78 90',
        'true',
        'false',
    ],
};

let propDataSettings2 = {
    informationItemLabel : [
        'und',
        'und',
        'und',
        'und',
        'und',
    ],
    informationItemName : [
        'und',
        'und',
        'und',
        'und',
        'und',
    ],
    informationItemInputId : [
        'und',
        'und',
        'und',
        'und',
        'und',
    ],
    informationItemInputName : [
        'und',
        'und',
        'und',
        'und',
        'und',
    ],
    informationItemInputValue : [
        'und',
        'und',
        'und',
        'und',
        'und',
    ],
};

let logoImage = images['plane.svg'];
let userImageSmall = images['imagesmall.png'];
let closeImage = images['close.svg'];

let userImageBigger = images['mainimg.png'];
let arrowImageEspecially = images['Arrowgo.svg'];

let locationImage = images['local.svg'];

// temp images
let tempImageWeather_sc = images['image 8.svg'];
let tempImageWeather_s = images['image 9.svg'];

class PersonalAccount extends Component {
    constructor(props){
        super(props);
        this.state  = {
            open: this.props.deliveryStateModal,
            travelActive: ' travel--active',
        };
    };

    handleStateUpdateModal = (isModal) => {
        
        this.setState(

            { open: isModal },

              () => {

                console.log(isModal);
                console.log(this.state.open);

                this.props.deliveryStateIsModal(this.state.open);

              }
        );
        
    };
    
    render() {
        return (
            <div className="modal__content">
                <div className="modal__header">
                    <div className="modal__header--container">
                        <Logo logoImage={logoImage}/>
                        <div className="modal__menu">
                            <ul className="modal__list">
                                <MenuNav 
                                    navItemName={'Active tour'}/>
                                <MenuNav 
                                    navItemName={'My Travels'}/>
                                <MenuNavLogOut 
                                    navItemName={'Log-Out'}/>
                                <MenuNavUser 
                                    userImageSmall={userImageSmall}/>
                                <MenuNavClose 
                                    closeImage={closeImage} 
                                    deliveryStateModal={this.handleStateUpdateModal}/>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="modal__body">
                    <div className="modal__body--container account">
                        <div className="account__preview">
                            <Photo 
                                userImageBigger={userImageBigger}/>
                            <Especially 
                                arrowImageEspecially={arrowImageEspecially}
                                tempImageWeather_sc={tempImageWeather_sc}
                                tempImageWeather_s={tempImageWeather_s}/>
                        </div>
                        <div className="account__information">
                            <div className="account__information--header user">
                                <Name />
                                <Location locationImage={locationImage}/>
                            </div>
                            <div className="account__information--body user">
                                <div className="user__travel">
                                    <TravelItemDefault travelName={'Count tour'} travelCount={'5'} active={''}/>
                                    <TravelItemDefault travelName={'Count tour'} travelCount={'1'} active={this.state.travelActive}/>
                                    <TravelItemReviews travelName={'Reviews'} travelCount={'5'} travelreviews={'Continue reviews'}/>
                                </div>
                            </div>
                            <div className="account__information--footer user">
                                <Tabs defaultIndex={1}>
                                    <div className="user__menu lk-menu">
                                        <TabList>
                                            <Tab>
                                                <MenuSwitch menuSwitchName={'Active tour'} datatab={'0'}/>
                                            </Tab>
                                            <Tab>
                                                <MenuSwitch menuSwitchName={'About me'} datatab={'1'}/>
                                            </Tab>
                                            <Tab>
                                                <MenuSwitch menuSwitchName={'Payment Information'} datatab={'2'}/>
                                            </Tab>
                                            <Tab>
                                                <MenuSwitch menuSwitchName={'Account settings'} datatab={'3'}/>
                                            </Tab>
                                        </TabList>
                                    </div>
                                    <div className="user__information lk-information">
                                        <div className="lk-information--container">
                                            <TabPanel>
                                                <Fade bottom>
                                                    <FormSwitch 
                                                        informationTabName={'Tour information'}
                                                        informationPropData={propDataTour}
                                                        readOnly={true}
                                                    />
                                                    <FormSwitch 
                                                        informationTabName={'Apartment information'}
                                                        informationPropData={propDataApatment}
                                                        readOnly={true}
                                                    />
                                                </Fade>
                                            </TabPanel>
                                            <TabPanel>
                                                <Fade bottom>
                                                    <FormSwitch 
                                                        informationTabName={'Basic information'}
                                                        informationPropData={propDataBasic}
                                                        readOnly={false}
                                                    />
                                                    <FormSwitch 
                                                        informationTabName={'Contact information'}
                                                        informationPropData={propDataContact}
                                                        readOnly={false}
                                                    />
                                                </Fade>
                                            </TabPanel>
                                            <TabPanel>
                                                <Fade bottom>
                                                    {/* <FormSwitch 
                                                        informationTabName={'General settings'}
                                                        informationPropData={propDataSettings}
                                                        readOnly={false}
                                                    />
                                                    <FormSwitch 
                                                        informationTabName={'Account settings'}
                                                        informationPropData={propDataSettings2}
                                                        readOnly={false}
                                                    /> */}
                                                </Fade>
                                            </TabPanel>
                                            <TabPanel>
                                                <Fade bottom>
                                                    <FormSwitch 
                                                        informationTabName={'General settings'}
                                                        informationPropData={propDataSettings}
                                                        readOnly={false}
                                                    />
                                                    <FormSwitch 
                                                        informationTabName={'Account settings'}
                                                        informationPropData={propDataSettings2}
                                                        readOnly={false}
                                                    />
                                                </Fade>
                                            </TabPanel>
                                        </div>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default PersonalAccount;
