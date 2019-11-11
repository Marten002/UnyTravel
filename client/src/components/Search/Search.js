import React, { Component } from 'react';
import './Search.css';
import SearchButton from '../SearchButton/SearchButton';

class Search extends Component {
    render() {
    
        let searchButton = this.props.searchButton;

        return (
        <div className="nav__search search">
            <form action="/" className="search__form">
                <label for="search" className="search__label">Search</label>
                <input type="text" id="search" className="search__item" />
                <SearchButton searchButton={searchButton}/>
                {/* <Button /> */}
                {/* <button class="search__button search__button--open">
                    <img src="img/search/search.svg" alt="search" class="img--fluid img--small img--search">
                </button> */}
                {/* <button class="search__button search__button--close">
                    <img src="img/search/close.svg" alt="close" class="img--fluid img--small img--close">
                </button> */}
            </form>
        </div>
    );
  }
}

export default Search;
