import React, { Component } from 'react';
import './SearchButton.css';

class SearchButton extends Component {
    render() {
        let searchButton = this.props.searchButton;

        return (
            // <div className="">
            <React.Fragment>
                 {Object.keys(searchButton).map((elem, index) => {
                        return  <button key={index} className="search__button search__button--open">
                                    <img src={searchButton[elem]} alt={searchButton[elem]} className="img--fluid img--small img--search" />
                                </button>
                    })}
            </React.Fragment>
            // </div>
        );
  }
}

export default SearchButton;
