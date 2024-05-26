import React, { Component } from 'react';
import './SearchButton.css';

class SearchButton extends Component {
    constructor(props){
        super(props);
        this.state  = {
            open: 'false',
            close: 'true'
        };
    };

    clickToSearch = (event) => {

        event.preventDefault();

        this.props.clickToSearch();

    };

    render() {

        let searchButtonImage = this.props.searchButtonImage;
        let searchButtonImageClass = this.props.searchButtonImageClass;
        let searchButtonClass = this.props.searchButtonClass;

        return (
            <button className={"search__button" + searchButtonClass} onClick={this.props.clickToSearch}>
                <img src={searchButtonImage} alt="search" className={"img--fluid img--small" + searchButtonImageClass}/>
            </button>
        );
    }
}

export default SearchButton;
