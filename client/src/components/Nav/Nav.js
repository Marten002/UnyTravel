import React, { Component } from 'react';
import './Nav.css';
import NavItem from '../NavItem/NavItem';
import Logo from '../Logo/Logo';
import SearchButton from '../SearchButton/SearchButton';

class Nav extends Component {
  render() {

      let nav__item = this.props.nav__item;
      let logo = this.props.logo;
      let searchButton = this.props.searchButton;

    return (
        <div className="header__nav">
            <nav className="nav">
                <Logo logo={logo}/>
                <NavItem nav__item={nav__item}/>
                <SearchButton searchButton={searchButton}/>
                    {/* <form action="/" class="search__form">
                        <label for="search" class="search__label">Search</label>
                        <input type="text" id="search" class="search__item">
                        <button class="search__button search__button--open">
                            <img src="img/search/search.svg" alt="search" class="img--fluid img--small img--search">
                        </button>
                        <button class="search__button search__button--close">
                            <img src="img/search/close.svg" alt="close" class="img--fluid img--small img--close">
                        </button>
                    </form> */}
            </nav>
        </div>
    );
  }
}

export default Nav;
