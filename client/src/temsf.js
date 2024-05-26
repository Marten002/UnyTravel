/* 
    Import React, React Components and React libaryes  
*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/* 
    Import Logo and main Style  
    */
import './logo.svg';
import './App.css';
/* 
    Import custom Components  
*/
import Carousel from './components/Carousel/Carousel';

import Menu from './components/Menu/Menu';
    import Contact from './components/Contact/Contact';
        import ContactLink from './components/ContactLink/ContactLink';
        import SocialLink from './components/SocialLink/SocialLink';
            import Login from './components/Login/Login';
                import ContactProfile from './components/ContactProfile/ContactProfile';
                    import ToggleMenuUser from './components/ToggleMenuUser/ToggleMenuUser';
                        import Drawer from '/components/';
                            import PersonalAccount from './module/PersonalAccount/PersonalAccount';
    import Nav from './components/Nav/Nav';
        import Logo from './components/Logo/Logo';
        import NavItem from './components/NavItem/NavItem';
        import Search from './components/Search/Search';
            import SearchItem from './components/SearchItem/SearchItem';
            import SearchButton from './components/SearchButton/SearchButton';

import Header from './components/Header/Header';
    import Offer from './components/Offer/Offer';
    import HeroDistination from './components/HeroDistination/HeroDistination';
    import Distination from './components/Distination/Distination';
/* 
    Import pages React-router  
*/
import Destinations from './Pages/Distination/Distination';
import Countries from './Pages/Countries/Countries';
import Tours from './Pages/Tours/Tours';
import Blog from './Pages/Blog/Blog';
import Hot from './Pages/Hot/Hot';

/* 
    class App is main class -> info

    UnyTravel version: ^1.2.000.0
    Author: Marten002
*/

class App extends Component {
    constructor(props){
        super(props);
        this.state  = {
            
        };
    };
    render() {
        return (
            <div className="App">
                <div className="container container--preview fade">
                    <Carousel 
                        countryName={countryName} 
                        countryImage={countryImage}>
                    </Carousel>
                    <div className="container__content container__content--absolute">
                        <Menu>
                            <Contact>
                                <ContactLink>
                                    <ContactLinkItem>

                                    </ContactLinkItem>
                                    <ContactLinkItem>

                                    </ContactLinkItem>
                                </ContactLink>
                                <SocialLink>
                                    <Login>
                                        <ContactProfile>
                                            <ToggleMenuUser>
                                                <Drawer>
                                                    <PersonalAccount></PersonalAccount>
                                                </Drawer>
                                            </ToggleMenuUser>
                                        </ContactProfile>
                                    </Login>
                                    <SocialLinkItem>

                                    </SocialLinkItem>
                                    <SocialLinkItem>

                                    </SocialLinkItem>
                                    <SocialLinkItem>

                                    </SocialLinkItem>
                                    <SocialLinkItem>

                                    </SocialLinkItem>
                                </SocialLink>
                            </Contact>
                            <Nav>
                                <Logo>

                                </Logo>
                                <NavItem>

                                </NavItem>
                                <NavItem>

                                </NavItem>
                                <NavItem>

                                </NavItem>
                                <NavItem>

                                </NavItem>
                                <NavItem>

                                </NavItem>
                                <NavItem>

                                </NavItem>
                                <Search>
                                    <SearchItem></SearchItem>
                                    <SearchButton></SearchButton>
                                    <SearchButton></SearchButton>
                                </Search>
                            </Nav>
                        </Menu>
                        <Header>
                            <Offer>

                            </Offer>
                            <HeroDistination>

                            </HeroDistination>
                            <Distination>

                            </Distination>
                            <Distination>

                            </Distination>
                            <Distination>

                            </Distination>
                            <Distination>

                            </Distination>
                            <Distination>

                            </Distination>
                        </Header>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;
