import React, { Component } from 'react';
import './Nav.css';
import NavItem from '../NavItem/NavItem';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';

class Nav extends Component {
    render() {

        let nav__item = this.props.nav__item;
        let logo = this.props.logo;

        return (
            <div className="header__nav">
                <nav className="nav">
                    <Logo logo={logo}/>
                    <NavItem nav__item={nav__item}/>
                    <Search 
                        searchButtonImageOpen={this.props.searchButtonImageOpen}
                        searchButtonImageClose={this.props.searchButtonImageClose}
                    />
                </nav>
            </div>
        );
    }
}

export default Nav;
